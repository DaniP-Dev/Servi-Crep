import { NextResponse } from "next/server";
import { sendDiscordWebhook } from "@/lib/discord";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
  subject?: string;
  message?: string;
  privacy?: boolean;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = isNonEmptyString(body.name) ? body.name.trim() : "";
    const email = isNonEmptyString(body.email) ? body.email.trim() : "";
    const phone = isNonEmptyString(body.phone) ? body.phone.trim() : "";
    const project = isNonEmptyString(body.project) ? body.project.trim() : "";
    const subject = isNonEmptyString(body.subject) ? body.subject.trim() : "";
    const message = isNonEmptyString(body.message) ? body.message.trim() : "";

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Nombre y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { success: false, error: "Indica un correo o un teléfono de contacto." },
        { status: 400 }
      );
    }

    if (!body.privacy) {
      return NextResponse.json(
        { success: false, error: "Debes aceptar la política de privacidad." },
        { status: 400 }
      );
    }

    const ok = await sendDiscordWebhook({
      content: "📥 **Lead web — formulario** (origen sitio ServiCrep)",
      embeds: [
        {
          title: "Nuevo lead desde el formulario web",
          color: 3447003,
          fields: [
            { name: "Nombre", value: name, inline: true },
            {
              name: "Correo",
              value: email || "No indicado",
              inline: true,
            },
            {
              name: "Teléfono",
              value: phone || "No indicado",
              inline: true,
            },
            {
              name: "Proyecto",
              value: project || "No indicado",
              inline: true,
            },
            {
              name: "Asunto",
              value: subject || "Sin asunto",
              inline: true,
            },
            {
              name: "Fecha/Hora",
              value: new Date().toLocaleString("es-CO", {
                timeZone: "America/Bogota",
              }),
              inline: true,
            },
            {
              name: "Origen",
              value: "Formulario /contacto — lead atribuible a la web",
            },
            { name: "Mensaje", value: message.slice(0, 1000) },
          ],
          footer: { text: "Control de leads ServiCrep · Formulario" },
        },
      ],
    });

    if (!ok) {
      return NextResponse.json(
        {
          success: false,
          error: "No pudimos enviar tu mensaje. Intenta por WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Solicitud inválida." },
      { status: 400 }
    );
  }
}

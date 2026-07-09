import { NextResponse } from "next/server";
import { sendDiscordWebhook } from "@/lib/discord";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pagePath =
      typeof body?.pagePath === "string" && body.pagePath.trim()
        ? body.pagePath.trim()
        : "Desconocida";

    const ok = await sendDiscordWebhook({
      embeds: [
        {
          title: "Nuevo clic en WhatsApp",
          color: 3066993,
          fields: [
            {
              name: "Página",
              value: pagePath,
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
              name: "Mensaje enviado",
              value: "Se inició una conversación con el identificador de la web.",
            },
          ],
          footer: {
            text: "Rastreador ServiCrep",
          },
        },
      ],
    });

    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Webhook no configurado o falló" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("track-whatsapp error:", error);
    return NextResponse.json(
      { success: false, error: "Solicitud inválida" },
      { status: 400 }
    );
  }
}

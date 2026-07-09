import { NextResponse } from "next/server";
import { sendDiscordWebhook } from "@/lib/discord";

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    let body: { pagePath?: string; href?: string } = {};
    if (raw.trim()) {
      try {
        body = JSON.parse(raw) as { pagePath?: string; href?: string };
      } catch {
        return NextResponse.json(
          { success: false, error: "Solicitud inválida" },
          { status: 400 }
        );
      }
    }

    const pagePath =
      typeof body.pagePath === "string" && body.pagePath.trim()
        ? body.pagePath.trim()
        : "Desconocida";
    const href =
      typeof body.href === "string" && body.href.trim()
        ? body.href.trim().slice(0, 300)
        : "No disponible";

    const ok = await sendDiscordWebhook({
      content: "💬 **Lead web — clic WhatsApp** (origen sitio ServiCrep)",
      embeds: [
        {
          title: "Nuevo clic en WhatsApp desde la web",
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
              name: "Enlace",
              value: href,
            },
            {
              name: "Control",
              value:
                "Este clic salió del sitio. Si el cliente escribe por WhatsApp, el lead es de la web (marcador [Ref:W-WEB] en el mensaje).",
            },
          ],
          footer: {
            text: "Control de leads ServiCrep · WhatsApp",
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

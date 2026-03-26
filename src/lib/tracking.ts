import { CONTACT_INFO } from "./constants";

/**
 * Sends a notification to Discord when a WhatsApp link is clicked.
 */
export async function trackWhatsAppClick(pagePath: string) {
  if (!CONTACT_INFO.discordWebhookUrl) return;

  try {
    const payload = {
      embeds: [
        {
          title: "🚀 Nuevo Clic en WhatsApp",
          color: 3066993, // Green
          fields: [
            {
              name: "Página",
              value: pagePath || "Desconocida",
              inline: true,
            },
            {
              name: "Fecha/Hora",
              value: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" }),
              inline: true,
            },
            {
              name: "Mensaje Enviado",
              value: "Se inició una conversación con el identificador sutil.",
            },
          ],
          footer: {
            text: "Rastreador Servi-Crep",
          },
        },
      ],
    };

    await fetch(CONTACT_INFO.discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Error tracking WhatsApp click:", error);
  }
}

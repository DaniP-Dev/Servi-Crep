/**
 * Client-safe WhatsApp click tracker.
 * Posts to an internal API so the Discord webhook never ships to the browser.
 */
export async function trackWhatsAppClick(pagePath: string) {
  try {
    await fetch("/api/track-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagePath: pagePath || "Desconocida" }),
      keepalive: true,
    });
  } catch (error) {
    console.error("Error tracking WhatsApp click:", error);
  }
}

/**
 * Client-safe WhatsApp click tracker.
 * Posts to an internal API so the Discord webhook never ships to the browser.
 */
export async function trackWhatsAppClick(
  pagePath: string,
  href?: string
): Promise<void> {
  const payload = JSON.stringify({
    pagePath: pagePath || "Desconocida",
    href: href || "",
  });

  try {
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([payload], { type: "application/json" });
      const queued = navigator.sendBeacon("/api/track-whatsapp", blob);
      if (queued) return;
    }

    await fetch("/api/track-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  } catch (error) {
    console.error("Error tracking WhatsApp click:", error);
  }
}

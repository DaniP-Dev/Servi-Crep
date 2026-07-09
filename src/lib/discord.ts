/**
 * Server-only Discord webhook helpers.
 * Never import this module from client components.
 */

export function getDiscordWebhookUrl(): string | undefined {
  const value = process.env.DISCORD_WEBHOOK_URL?.trim();
  return value || undefined;
}

export async function sendDiscordWebhook(payload: unknown): Promise<boolean> {
  const webhookUrl = getDiscordWebhookUrl();
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(
        `Discord webhook failed: HTTP ${response.status}`,
        body.slice(0, 300)
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending Discord webhook:", error);
    return false;
  }
}

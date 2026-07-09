/**
 * Server-only Discord webhook helpers.
 * Never import this module from client components.
 */

export function getDiscordWebhookUrl(): string | undefined {
  return process.env.DISCORD_WEBHOOK_URL;
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
    return response.ok;
  } catch (error) {
    console.error("Error sending Discord webhook:", error);
    return false;
  }
}

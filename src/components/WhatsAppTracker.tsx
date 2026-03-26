"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackWhatsAppClick } from "@/lib/tracking";

/**
 * Invisible component that listens for global WhatsApp clicks.
 * It intercepts clicks on any link containing 'wa.me' or 'whatsapp.com'.
 */
export default function WhatsAppTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href) {
        const isWhatsApp =
          anchor.href.includes("wa.me") || anchor.href.includes("whatsapp.com");

        if (isWhatsApp) {
          // Send tracking info without blocking the UI
          trackWhatsAppClick(pathname);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [pathname]);

  return null; // This component is invisible
}

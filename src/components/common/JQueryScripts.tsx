"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function JQueryScripts() {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);

  useEffect(() => {
    // Verificar si jQuery ya está cargado
    if (typeof window !== "undefined" && typeof (window as unknown as { jQuery: unknown }).jQuery !== "undefined") {
      setJQueryLoaded(true);
    }
  }, []);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => setJQueryLoaded(true)}
      />
      {jQueryLoaded && (
        <>
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/lib/waypoints/waypoints.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/lib/easing/easing.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/lib/owlcarousel/owl.carousel.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/lib/wow/wow.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/main.js"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}

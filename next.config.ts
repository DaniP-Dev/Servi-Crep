import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // aplica a todas las rutas
        headers: [
          // Evita que tu página sea embebida en iframes (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },

          // Evita que el browser interprete archivos con tipo MIME incorrecto
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Fuerza HTTPS siempre (2 años)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // Evita filtrar info del referrer a sitios externos
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Deshabilita funciones del browser que no necesitas
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },

          // Protección XSS básica para browsers viejos
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;

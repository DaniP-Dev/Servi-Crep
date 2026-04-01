import { MetadataRoute } from "next";
import services from "@/lib/services";
import politicas from "@/lib/politicas";

const BASE_URL = "https://www.servicrep.com.co";

/**
 * Sitemap dinámico generado por Next.js.
 * Las fechas de lastModified se actualizan automáticamente en cada build.
 * Para forzar revalidación, ajusta `priority` y `changeFrequency` por ruta.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Páginas estáticas principales ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/nuestros-servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/colombia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/calidad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/calidad/quejas-y-apelaciones`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sobre-servicrep`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/inspeccion-eds-barranquilla`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pruebas-hermeticidad-barranquilla`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // ── Páginas de servicios dinámicas ─────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = Object.values(services).map(
    (service) => ({
      url: `${BASE_URL}${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // ── Páginas de políticas dinámicas ─────────────────────────────────────────
  const politicaPages: MetadataRoute.Sitemap = Object.values(politicas).map(
    (politica) => ({
      url: `${BASE_URL}${politica.slug}`,
      lastModified: new Date(politica.updatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })
  );

  return [...staticPages, ...servicePages, ...politicaPages];
}

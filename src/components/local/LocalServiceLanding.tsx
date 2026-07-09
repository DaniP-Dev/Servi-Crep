import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants";

export type LocalLandingConfig = {
  city: string;
  region: string;
  serviceKind: "inspeccion" | "hermeticidad";
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  lead: string;
  problemTitle: string;
  problemText: string;
  includes: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  schemaName: string;
  schemaDescription: string;
  areaServed: string[];
};

export function buildLocalMetadata(config: LocalLandingConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.path,
      type: "website",
      locale: "es_CO",
      siteName: "ServiCrep",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
    alternates: {
      canonical: config.path,
    },
  };
}

export default function LocalServiceLanding({
  config,
}: {
  config: LocalLandingConfig;
}) {
  const accordionId = `faq-${config.serviceKind}-${config.city
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: config.schemaName,
        description: config.schemaDescription,
        areaServed: config.areaServed,
        provider: {
          "@type": "Organization",
          name: "ServiCrep",
          url: "https://www.servicrep.com.co/",
        },
        url: `https://www.servicrep.com.co${config.path}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="container py-5">
      <Script id={`seo-${accordionId}-schema`} type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <header className="mb-4">
        <h1 className="display-6 fw-bold text-secondary mb-3">{config.h1}</h1>
        <p className="lead mb-0">{config.lead}</p>
      </header>

      <section className="row g-4 mb-4">
        <article className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">{config.problemTitle}</h2>
              <p className="mb-0">{config.problemText}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Qué incluye el servicio?</h2>
              <ul className="mb-0">
                {config.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="h5 mb-3">Preguntas frecuentes</h2>
              <div className="accordion" id={accordionId}>
                {config.faqs.map((faq, index) => {
                  const headingId = `${accordionId}-heading-${index}`;
                  const collapseId = `${accordionId}-collapse-${index}`;

                  return (
                    <div className="accordion-item" key={faq.question}>
                      <h3 className="accordion-header" id={headingId}>
                        <button
                          className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={index === 0}
                          aria-controls={collapseId}
                        >
                          {faq.question}
                        </button>
                      </h3>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent={`#${accordionId}`}
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </article>

        <aside className="col-12 col-lg-4">
          <div className="card border-primary mb-4">
            <div className="card-body">
              <h2 className="h6 mb-3">
                {config.serviceKind === "inspeccion"
                  ? `Solicitar inspección en ${config.city}`
                  : `Solicitar hermeticidad en ${config.city}`}
              </h2>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 mb-2"
              >
                {CTA_LABELS.whatsapp}
              </a>
              <a href={CONTACT_INFO.telUrl} className="btn btn-outline-secondary w-100 mb-2">
                Llamar ahora
              </a>
              <Link href="/como-cotizar" className="btn btn-outline-primary w-100">
                {CTA_LABELS.howToQuote}
              </Link>
              <p className="text-body-secondary small mt-2 mb-0">
                Respuesta en 24–48 horas hábiles.
              </p>
            </div>
          </div>

          <div className="card bg-light">
            <div className="card-body">
              <h2 className="h6 mb-2">Servicios relacionados</h2>
              <div className="d-grid gap-2">
                {config.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="btn btn-sm btn-outline-secondary text-start"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

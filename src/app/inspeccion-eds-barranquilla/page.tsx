import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Inspección EDS en Barranquilla | ServiCrep",
  description:
    "Servicio de inspección técnica para estaciones de servicio en Barranquilla y Atlántico. Programación rápida, soporte técnico y enfoque en cumplimiento normativo.",
  keywords: [
    "inspección EDS barranquilla",
    "inspección técnica estaciones de servicio barranquilla",
    "organismo de inspección EDS atlántico",
    "cotizar inspección EDS barranquilla",
  ],
  openGraph: {
    title: "Inspección EDS en Barranquilla | ServiCrep",
    description:
      "Inspección técnica para estaciones de servicio en Barranquilla con atención programada y documentación técnica.",
    url: "/inspeccion-eds-barranquilla",
    type: "website",
    locale: "es_CO",
    siteName: "ServiCrep",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspección EDS en Barranquilla | ServiCrep",
    description:
      "Servicio de inspección técnica para estaciones de servicio en Barranquilla y Atlántico.",
  },
  alternates: {
    canonical: "/inspeccion-eds-barranquilla",
  },
};

const faqItems = [
  {
    question: "¿Cuánto tarda la inspección de una EDS en Barranquilla?",
    answer:
      "Depende del alcance técnico y de las condiciones de la estación. Generalmente coordinamos la visita en plazos cortos y con cronograma confirmado.",
  },
  {
    question: "¿Atienden solo Barranquilla o también municipios cercanos?",
    answer:
      "Atendemos Barranquilla, Soledad y municipios del Atlántico. También contamos con cobertura nacional mediante programación previa.",
  },
  {
    question: "¿Qué entregan después de la inspección?",
    answer:
      "Entregamos documentación técnica de resultados según alcance, incluyendo observaciones y recomendaciones cuando aplique.",
  },
];

export default function InspeccionEdsBarranquillaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Inspección técnica de EDS en Barranquilla",
        description:
          "Inspección técnica para estaciones de servicio en Barranquilla y Atlántico con enfoque en cumplimiento normativo.",
        areaServed: ["Barranquilla", "Soledad", "Atlántico", "Colombia"],
        provider: {
          "@type": "Organization",
          name: "ServiCrep",
          url: "https://www.servicrep.com.co/",
        },
        url: "https://www.servicrep.com.co/inspeccion-eds-barranquilla",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
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
      <Script id="seo-eds-baq-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <header className="mb-4">
        <h1 className="display-6 fw-bold text-secondary mb-3">
          Inspección técnica de EDS en Barranquilla
        </h1>
        <p className="lead mb-0">
          Ayudamos a estaciones de servicio en Barranquilla y Atlántico a ejecutar su inspección técnica con tiempos
          claros, soporte profesional y documentación confiable.
        </p>
      </header>

      <section className="row g-4 mb-4">
        <article className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Qué problema resolvemos?</h2>
              <p className="mb-0">
                Si necesitas cumplir requisitos técnicos para la operación de tu estación o preparar evidencias de
                cumplimiento, te acompañamos con una inspección en sitio y un proceso ordenado de inicio a entrega.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Qué incluye el servicio?</h2>
              <ul className="mb-0">
                <li>Programación de visita técnica según disponibilidad.</li>
                <li>Evaluación en sitio de componentes según alcance.</li>
                <li>Registro de resultados y observaciones técnicas.</li>
                <li>Entrega de informe técnico según corresponda.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="h5 mb-3">Preguntas frecuentes</h2>
              <div className="accordion" id="faqInspeccionBaq">
                {faqItems.map((faq, index) => {
                  const headingId = `eds-baq-heading-${index}`;
                  const collapseId = `eds-baq-collapse-${index}`;

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
                        data-bs-parent="#faqInspeccionBaq"
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
              <h2 className="h6 mb-3">Solicitar inspección en Barranquilla</h2>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mb-2">
                Cotizar por WhatsApp
              </a>
              <a href={CONTACT_INFO.telUrl} className="btn btn-outline-secondary w-100">
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="card bg-light">
            <div className="card-body">
              <h2 className="h6 mb-2">Servicios relacionados</h2>
              <div className="d-grid gap-2">
                <Link href="/nuestros-servicios/inspeccion-eds" className="btn btn-sm btn-outline-secondary text-start">
                  Inspección de EDS (detalle)
                </Link>
                <Link href="/nuestros-servicios/pruebas-hermeticidad" className="btn btn-sm btn-outline-secondary text-start">
                  Pruebas de hermeticidad
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pruebas de Hermeticidad en Barranquilla | ServiCrep",
  description:
    "Pruebas de hermeticidad para tanques y sistemas de combustible en Barranquilla y Atlántico. Detección de fugas y documentación técnica con metodología especializada.",
  keywords: [
    "prueba hermeticidad barranquilla",
    "pruebas de hermeticidad tanques barranquilla",
    "detección de fugas tanques combustible atlántico",
    "cotizar prueba de hermeticidad EDS",
  ],
  openGraph: {
    title: "Pruebas de Hermeticidad en Barranquilla | ServiCrep",
    description:
      "Servicio de pruebas de hermeticidad para EDS y sistemas de combustible en Barranquilla con enfoque técnico y cobertura regional.",
    url: "/pruebas-hermeticidad-barranquilla",
    type: "website",
    locale: "es_CO",
    siteName: "ServiCrep",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruebas de Hermeticidad en Barranquilla | ServiCrep",
    description:
      "Detección técnica de fugas y verificación de hermeticidad para estaciones de servicio en Barranquilla y Atlántico.",
  },
  alternates: {
    canonical: "/pruebas-hermeticidad-barranquilla",
  },
};

const faqItems = [
  {
    question: "¿Cuándo debo realizar una prueba de hermeticidad en mi EDS?",
    answer:
      "Cuando el requisito técnico lo indique, ante sospecha de fuga o como parte de la gestión preventiva del sistema de almacenamiento de combustible.",
  },
  {
    question: "¿La prueba de hermeticidad detecta fugas pequeñas?",
    answer:
      "Se realiza con metodología técnica y equipos calibrados para verificar condiciones de estanqueidad según alcance del servicio.",
  },
  {
    question: "¿Atienden pruebas de hermeticidad en Soledad y Atlántico?",
    answer:
      "Sí. Atendemos Barranquilla, Soledad y otros municipios del Atlántico con programación previa.",
  },
];

export default function PruebasHermeticidadBarranquillaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Pruebas de hermeticidad en Barranquilla",
        description:
          "Pruebas de hermeticidad para tanques y sistemas de combustible en Barranquilla y Atlántico.",
        areaServed: ["Barranquilla", "Soledad", "Atlántico", "Colombia"],
        provider: {
          "@type": "Organization",
          name: "ServiCrep",
          url: "https://www.servicrep.com.co/",
        },
        url: "https://www.servicrep.com.co/pruebas-hermeticidad-barranquilla",
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
      <Script id="seo-hermeticidad-baq-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <header className="mb-4">
        <h1 className="display-6 fw-bold text-secondary mb-3">
          Pruebas de hermeticidad en Barranquilla para EDS
        </h1>
        <p className="lead mb-0">
          Verificamos condiciones de estanqueidad en tanques y sistemas de combustible para ayudarte a reducir riesgos
          operativos y fortalecer el control técnico de tu estación.
        </p>
      </header>

      <section className="row g-4 mb-4">
        <article className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Qué solucionamos con este servicio?</h2>
              <p className="mb-0">
                Si necesitas verificar posibles fugas, validar hermeticidad de componentes o respaldar decisiones
                técnicas sobre tu sistema de almacenamiento, te acompañamos con una prueba en sitio y resultados
                documentados según alcance.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Qué incluye?</h2>
              <ul className="mb-0">
                <li>Programación de visita técnica en Barranquilla y Atlántico.</li>
                <li>Aplicación de metodología para verificación de hermeticidad.</li>
                <li>Registro técnico de resultados.</li>
                <li>Informe o certificado según alcance contratado.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="h5 mb-3">Preguntas frecuentes</h2>
              <div className="accordion" id="faqHermeticidadBaq">
                {faqItems.map((faq, index) => {
                  const headingId = `her-baq-heading-${index}`;
                  const collapseId = `her-baq-collapse-${index}`;

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
                        data-bs-parent="#faqHermeticidadBaq"
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
              <h2 className="h6 mb-3">Solicitar prueba de hermeticidad</h2>
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
                <Link href="/nuestros-servicios/pruebas-hermeticidad" className="btn btn-sm btn-outline-secondary text-start">
                  Hermeticidad (detalle)
                </Link>
                <Link href="/nuestros-servicios/inspeccion-eds-hermeticidad" className="btn btn-sm btn-outline-secondary text-start">
                  Paquete integral
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

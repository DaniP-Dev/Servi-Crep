import { notFound } from "next/navigation";
import services, { CITY_MODIFIERS } from "@/lib/services";
import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";
import Script from "next/script";


interface PageProps {
  params: Promise<{
    services: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { services: serviceSlug } = await params;
  const service = Object.values(services).find(
    (s) => s.slug === `/nuestros-servicios/${serviceSlug}`
  );

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  const { seo } = service;

  return {
    title: `${service.title} | ServiCrep`,
    description: `${service.description} ${seo.primaryQuery}. Visita nuestro sitio web.`,
    keywords: [
      service.title,
      seo.primaryQuery,
      ...seo.secondaryQueries,
      ...(seo.cityModifiers || CITY_MODIFIERS),
    ],
    openGraph: {
      title: `${service.title} | ServiCrep`,
      description: `${service.description} Servicio disponible en ${seo.cityModifiers?.slice(0, 2).join(", ") || "Colombia"}.`,
      url: service.slug,
      type: "website",
      siteName: "ServiCrep",
      locale: "es_CO",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ServiCrep`,
      description: service.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: service.slug,
    },
  };
}

export async function generateStaticParams() {
  return Object.values(services).map((service) => ({
    services: service.slug.replace("/nuestros-servicios/", ""),
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { services: serviceSlug } = await params;
  const service = Object.values(services).find(
    (s) => s.slug === `/nuestros-servicios/${serviceSlug}`
  );

  if (!service) notFound();

  const { seo } = service;
  const serviceFaqs = service.faqs?.length
    ? service.faqs
    : [
        {
          question: `¿Qué incluye ${service.title.toLowerCase()}?`,
          answer: `Incluye ${service.includes.slice(0, 2).join(" y ")}. También contempla resultados documentados según el alcance aplicable.`,
        },
        {
          question: "¿En cuánto tiempo se programa este servicio?",
          answer:
            "La programación depende de disponibilidad y ubicación. Normalmente coordinamos en plazos cortos y con cronograma confirmado por nuestro equipo.",
        },
        {
          question: "¿Atienden este servicio fuera del Atlántico?",
          answer:
            "Sí. Este servicio se presta en Colombia con cobertura nacional mediante programación previa.",
        },
      ];

  const relatedServices = Object.values(services).filter((item) => item.slug !== service.slug).slice(0, 2);
  const pageUrl = `https://www.servicrep.com.co${service.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://www.servicrep.com.co/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nuestros servicios",
            item: "https://www.servicrep.com.co/nuestros-servicios",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.longDescription,
        serviceType: seo.primaryQuery,
        areaServed: seo.cityModifiers || ["Colombia"],
        provider: {
          "@type": "Organization",
          name: "ServiCrep",
          url: "https://www.servicrep.com.co/",
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: serviceFaqs.map((faq) => ({
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
      <Script id={`service-schema-${serviceSlug}`} type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>

      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/nuestros-servicios">Nuestros servicios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="row align-items-center g-4 mb-4">
        <div className="col-12 col-lg-8">
          {/* H1 usa primaryQuery para SEO */}
          <h1 className="display-6 fw-bold mb-2 text-secondary">{service.title}</h1>
          <p className="lead mb-0">{service.description}</p>
          {service.duration && (
            <p className="text-body-secondary mt-2 mb-0">
              <i className="bi bi-clock me-1"></i>
              Tiempo estimado: {service.duration}
            </p>
          )}
          {/* Ciudades para SEO local */}
          <p className="text-body-secondary small mt-2 mb-0">
            <i className="bi bi-geo-alt me-1"></i>
            Disponible en: {seo.cityModifiers?.join(", ") || "Colombia"}
          </p>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-primary">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Listo para comenzar?</h2>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                {service.cta}
              </a>
              <p className="text-body-secondary small mt-2 mb-0">
                Respuesta en 24–48 horas hábiles.
              </p>
              {service.guarantee && (
                <p className="text-success small mt-2 mb-0">
                  <i className="bi bi-shield-check me-1"></i>
                  {service.guarantee}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="row g-4 mb-4">
        <article className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5">Detalle del servicio</h2>
              <p className="mb-0">{service.longDescription}</p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Por qué elegirnos?</h2>
              <div className="row g-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <span>{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proceso */}
          <div className="card">
            <div className="card-body">
              <h2 className="h5 mb-3">¿Cómo funciona?</h2>
              <div className="row g-3">
                {service.process.map((step, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="d-flex">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "32px", height: "32px", minWidth: "32px" }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="h6 mb-1">{step.title}</h3>
                        <p className="text-body-secondary small mb-0">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="col-12 col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h6 mb-3">Incluye</h2>
              <ul className="list-group list-group-flush">
                {service.includes.map((item, index) => (
                  <li key={index} className="list-group-item px-0">
                    <i className="bi bi-check2 text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Búsquedas relacionadas para SEO interno */}
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h6 mb-3">Búsquedas relacionadas</h2>
              <div className="d-flex flex-wrap gap-2">
                {seo.secondaryQueries.slice(0, 4).map((query, index) => (
                  <span key={index} className="badge bg-light text-dark border">
                    {query}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA secundario */}
          <div className="card bg-light">
            <div className="card-body text-center">
              <h2 className="h6 mb-2">¿Tienes preguntas?</h2>
              <p className="small text-body-secondary mb-3">
                Contáctanos y te asesoramos sin compromiso.
              </p>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
                Solicitar información
              </a>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h2 className="h6 mb-3">Servicios relacionados</h2>
              <div className="d-grid gap-2">
                {relatedServices.map((item) => (
                  <Link key={item.slug} href={item.slug} className="btn btn-sm btn-outline-secondary text-start">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-4" aria-labelledby="service-faq-title">
        <h2 id="service-faq-title" className="h5 mb-3">
          Preguntas frecuentes de este servicio
        </h2>
        <div className="accordion" id="serviceFaqAccordion">
          {serviceFaqs.map((faq, index) => {
            const headingId = `service-faq-heading-${index}`;
            const collapseId = `service-faq-collapse-${index}`;

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
                  data-bs-parent="#serviceFaqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

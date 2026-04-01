import React from "react";
import services from "@/lib/services";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Inspección EDS y Hermeticidad | ServiCrep",
  description:
    "Compara nuestros servicios de inspección para EDS y pruebas de hermeticidad. Elige la opción adecuada según tu operación y requisitos normativos.",
  keywords: [
    "servicios de inspección EDS y hermeticidad Colombia",
    "inspección EDS y pruebas de hermeticidad",
    "inspección técnica vs hermeticidad",
    "servicio integral EDS Colombia",
    "contratar inspección técnica EDS",
  ],
  openGraph: {
    title: "Servicios de Inspección Técnica | ServiCrep",
    description: "Compara servicios de inspección EDS y hermeticidad para elegir la mejor opción para tu estación de servicio.",
    url: "/nuestros-servicios",
    type: "website",
    siteName: "ServiCrep",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestros Servicios | ServiCrep",
    description:
      "Conoce nuestros servicios de inspección técnica para estaciones de servicio y pruebas de hermeticidad en Colombia.",
  },
  alternates: {
    canonical: "/nuestros-servicios",
  },
};

const categoryFaqs = [
  {
    question: "¿Qué diferencia hay entre inspección EDS y prueba de hermeticidad?",
    answer:
      "La inspección EDS evalúa cumplimiento técnico general de la estación; la hermeticidad verifica posibles fugas o estanqueidad en sistemas de almacenamiento. Ambos pueden complementarse.",
  },
  {
    question: "¿Puedo contratar inspección y hermeticidad en una sola visita?",
    answer:
      "Sí. Contamos con un paquete combinado para optimizar tiempos de coordinación y entrega de resultados.",
  },
  {
    question: "¿Qué documentación entregan al finalizar el servicio?",
    answer:
      "Entregamos informe o certificado de resultados según el alcance contratado, incluyendo observaciones técnicas y recomendaciones cuando aplique.",
  },
  {
    question: "¿Atienden en todo Colombia?",
    answer:
      "Sí. Prestamos atención nacional con programación previa y tiempos de respuesta claros.",
  },
];

const page = () => {
  return (
    <main className="container-fluid py-5">
      <div className="container">
        <header className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h1 className="display-6 fw-bold text-secondary mb-3">Servicios de inspección técnica para EDS</h1>
            <p className="lead mb-3">
              En ServiCrep ofrecemos inspección de estaciones de servicio y pruebas de hermeticidad con enfoque
              técnico, imparcial y orientado al cumplimiento normativo en Colombia.
            </p>
            <p className="mb-0 text-body-secondary">
              Si buscas inspección EDS en Colombia, prueba de hermeticidad de tanques o un paquete integral,
              aquí puedes comparar opciones y seleccionar el servicio correcto para tu operación.
            </p>
          </div>
        </header>

        <section>
          <div className="row g-4">
            {Object.entries(services).map(([key, service]) => (
              <div key={key} className="col-lg-4 col-md-6">
                <Link href={service.slug} className="text-decoration-none">
                  <div className="service-item h-100 d-flex flex-column">
                    <div className="border p-4 d-flex flex-column h-100">
                      <h2 className="h5 mb-3">{service.title}</h2>
                      <p className="mb-2 text-body-secondary">{service.description}</p>
                      <p className="mb-4 grow">
                        {service.shortDescription}
                      </p>
                      <span className="btn btn-primary py-2 px-4 align-self-start">
                        Ver detalle del servicio
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="row g-4 mt-4" aria-labelledby="enlaces-apoyo-servicios">
          <div className="col-lg-8">
            <h2 id="enlaces-apoyo-servicios" className="h4 mb-3">Recursos de apoyo para decidir mejor</h2>
            <div className="d-flex flex-wrap gap-2">
              <Link href="/colombia" className="btn btn-outline-secondary">
                Cobertura nacional
              </Link>
              <Link href="/calidad" className="btn btn-outline-secondary">
                Políticas de calidad
              </Link>
              <Link href="/contacto" className="btn btn-outline-secondary">
                Solicitar asesoría
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-5" aria-labelledby="faq-servicios">
          <h2 id="faq-servicios" className="h4 mb-3">Preguntas frecuentes sobre nuestros servicios</h2>
          <div className="accordion" id="servicesFaqAccordion">
            {categoryFaqs.map((faq, index) => {
              const headingId = `faq-heading-${index}`;
              const collapseId = `faq-collapse-${index}`;

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
                    data-bs-parent="#servicesFaqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

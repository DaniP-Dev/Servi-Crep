import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Service from "@/components/home/Service";
import OurProjects from "@/components/home/OurProjects";
import TeamCtaHome from "@/components/home/TeamCtaHome";
import ClientOnly from "@/components/ClientOnly";
import services from "@/lib/services";

export const metadata: Metadata = {
  title: "Inspección Técnica de EDS en Colombia | ServiCrep ONAC",
  description: "Organismo de inspección acreditado por ONAC para EDS y pruebas de hermeticidad en Colombia. Atención nacional, soporte técnico y respuesta rápida.",
  keywords: [
    // Ministerio de Minas y Energía
    "Ministerio de Minas y Energía",
    "requisitos Ministerio Minas EDS",
    "normativa estaciones de servicio Colombia",
    "resolución 40198",
    "regulación combustibles líquidos",
    // Inspección EDS
    "inspección EDS Colombia",
    "inspección estaciones de servicio",
    "inspección técnica EDS",
    "inspección periódica EDS",
    "organismo inspección acreditado",
    // Hermeticidad
    "prueba hermeticidad tanques",
    "hermeticidad tanques subterráneos",
    "prueba estanqueidad combustible",
    // Acreditación
    "organismo inspección ONAC",
    "acreditación ISO 17020",
    "organismo tipo A",
    // Geográficas
    "inspección EDS Barranquilla",
    "inspección EDS Atlántico",
    "inspección EDS Costa Caribe",
  ],
  openGraph: {
    title: "Inspección Técnica de EDS en Colombia | ServiCrep ONAC",
    description: "Inspección técnica de estaciones de servicio y pruebas de hermeticidad con cobertura nacional y enfoque normativo.",
    url: "/",
    type: "website",
    siteName: "ServiCrep",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspección Técnica de EDS en Colombia | ServiCrep",
    description:
      "Servicio acreditado para inspección EDS y hermeticidad de tanques de combustible en Colombia.",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "CO-ATL",
    "geo.placename": "Soledad, Atlántico",
    "geo.position": "10°54'45.5\"N 74°48'50.4\"W",
  },
};

export default function Home() {
  const featuredServices = Object.values(services).slice(0, 3);
  const homeFaqs = [
    {
      question: "¿Cuánto cuesta una inspección técnica de una EDS en Colombia?",
      answer:
        "El valor depende del alcance técnico, ubicación y estado de la estación. En ServiCrep evaluamos tu caso y te entregamos una cotización clara antes de programar la visita.",
    },
    {
      question: "¿Cada cuánto se debe inspeccionar una estación de servicio?",
      answer:
        "Depende de los requisitos regulatorios y del estado operativo de la EDS. Te orientamos para definir la periodicidad y el tipo de inspección que corresponde.",
    },
    {
      question: "¿Las pruebas de hermeticidad son válidas ante autoridades?",
      answer:
        "Sí. Se ejecutan con metodología técnica y equipos calibrados según alcance aplicable, con entrega de documentación para soporte técnico.",
    },
    {
      question: "¿Atienden inspección EDS fuera del Atlántico?",
      answer:
        "Sí. Prestamos servicio en todo Colombia con programación previa, tiempos definidos y seguimiento técnico durante el proceso.",
    },
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "ServiCrep | Inspección Técnica de EDS y Pruebas de Hermeticidad",
        url: "https://www.servicrep.com.co/",
        inLanguage: "es-CO",
        description:
          "Inspección técnica acreditada para estaciones de servicio y pruebas de hermeticidad en Colombia.",
      },
      {
        "@type": "ItemList",
        name: "Servicios destacados",
        itemListElement: featuredServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://www.servicrep.com.co${service.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((faq) => ({
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
    <main>
      <Script id="home-seo-schema" type="application/ld+json">
        {JSON.stringify(homeSchema)}
      </Script>

      <Hero />
      <About />
      <Cta />
      <ClientOnly>
        <Service />
      </ClientOnly>
      <OurProjects />

      <section className="container py-5" aria-labelledby="servicios-lideres">
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <h2 id="servicios-lideres" className="h3 mb-3 text-secondary">
              Servicios líderes de inspección para EDS
            </h2>
            <p className="mb-3">
              Si buscas cumplimiento normativo, continuidad operativa y documentación técnica confiable,
              estos son los servicios más solicitados por estaciones de servicio en Colombia.
            </p>
            <div className="d-flex flex-wrap gap-2">
              {featuredServices.map((service) => (
                <Link key={service.slug} href={service.slug} className="btn btn-outline-primary">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light border-0">
              <div className="card-body">
                <h3 className="h5">Siguiente paso recomendado</h3>
                <p className="mb-3 small text-body-secondary">
                  Explora el listado completo y elige el servicio que mejor se adapta al estado actual de tu EDS.
                </p>
                <Link href="/nuestros-servicios" className="btn btn-primary w-100">
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5" aria-labelledby="busquedas-locales-title">
        <div className="card border-0 bg-light">
          <div className="card-body">
            <h2 id="busquedas-locales-title" className="h4 mb-3 text-secondary">
              Búsquedas locales más frecuentes
            </h2>
            <p className="mb-3 text-body-secondary">
              Si tu estación está en el Atlántico, también puedes ir directo a nuestras páginas locales:
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link href="/inspeccion-eds-barranquilla" className="btn btn-outline-secondary">
                inspección EDS en Barranquilla
              </Link>
              <Link href="/pruebas-hermeticidad-barranquilla" className="btn btn-outline-secondary">
                pruebas de hermeticidad en Barranquilla
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

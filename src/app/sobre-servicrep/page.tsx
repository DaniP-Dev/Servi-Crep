import type { Metadata } from "next";
import Script from "next/script";
import { CONTACT_INFO } from "@/lib/constants";

const siteUrl = "https://www.servicrep.com.co";

export const metadata: Metadata = {
  title: "Sobre ServiCrep | Organización y Canales Oficiales",
  description:
    "Conoce a ServiCrep, organismo de inspección técnica para EDS en Colombia, y verifica nuestros canales oficiales en Instagram, LinkedIn, Facebook y WhatsApp.",
  alternates: {
    canonical: "/sobre-servicrep",
  },
  openGraph: {
    title: "Sobre ServiCrep | Organización y Canales Oficiales",
    description:
      "Información oficial de ServiCrep y enlaces verificados de redes sociales y contacto.",
    url: "/sobre-servicrep",
    type: "website",
    siteName: "ServiCrep",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre ServiCrep",
    description:
      "Entidad oficial ServiCrep con enlaces verificados de Instagram, LinkedIn, Facebook y WhatsApp.",
  },
};

export default function SobreServiCrepPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ServiCrep",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/isologo.png`,
    sameAs: [CONTACT_INFO.facebookUrl, CONTACT_INFO.instagramUrl, CONTACT_INFO.linkedinUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: CONTACT_INFO.email,
        telephone: `+57${CONTACT_INFO.phoneRaw}`,
        areaServed: "CO",
        availableLanguage: ["es"],
        url: `https://wa.me/57${CONTACT_INFO.phoneRaw}`,
      },
    ],
  };

  return (
    <main className="container py-5">
      <Script id="organization-page-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>

      <header className="mb-4">
        <h1 className="display-6 fw-bold text-secondary mb-3">Sobre ServiCrep</h1>
        <p className="lead mb-0">
          Somos un organismo de inspección técnica para estaciones de servicio de combustibles en Colombia,
          con enfoque en cumplimiento normativo, imparcialidad y soporte técnico.
        </p>
      </header>

      <section className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">Canales oficiales de ServiCrep</h2>
              <p className="text-body-secondary mb-3">
                Para validar que estás interactuando con la marca oficial, utiliza únicamente estos enlaces:
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram oficial de ServiCrep
                  </a>
                </li>
                <li className="list-group-item px-0">
                  <a href={CONTACT_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    LinkedIn oficial de ServiCrep
                  </a>
                </li>
                <li className="list-group-item px-0">
                  <a href={CONTACT_INFO.facebookUrl} target="_blank" rel="noopener noreferrer">
                    Facebook oficial de ServiCrep
                  </a>
                </li>
                <li className="list-group-item px-0">
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp oficial de ServiCrep
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="col-12 col-lg-4">
          <div className="card border-primary">
            <div className="card-body">
              <h2 className="h6 mb-3">Contacto directo</h2>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mb-2">
                Escribir por WhatsApp
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn-outline-secondary w-100 mb-2">
                Enviar correo
              </a>
              <a href={CONTACT_INFO.telUrl} className="btn btn-outline-secondary w-100">
                Llamar a ServiCrep
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

import React from "react";
import services from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Inspección EDS y Hermeticidad | ServiCrep",
  description:
    "Inspección de estaciones de servicio (EDS) y pruebas de hermeticidad a tanques. Servicio acreditado por ONAC en Colombia.",
  keywords: [
    "inspección estaciones de servicio",
    "prueba hermeticidad",
    "inspección EDS Colombia",
    "tanques combustible",
  ],
  openGraph: {
    title: "Servicios de Inspección Técnica | ServiCrep",
    description: "Inspección de EDS y pruebas de hermeticidad acreditadas.",
    url: "/nuestros-servicios",
    type: "website",
  },
  alternates: {
    canonical: "/nuestros-servicios",
  },
};

const page = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <section>
          <div className="row g-4">
            {Object.entries(services).map(([key, service]) => (
              <div key={key} className="col-lg-4 col-md-6">
                <div className="service-item h-100 d-flex flex-column">
                  <div className="border p-4 d-flex flex-column h-100">
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4 flex-grow-1">
                      {service.shortDescription}
                    </p>
                    <a
                      className="btn btn-primary py-2 px-4 align-self-start"
                      href={service.slug}
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;

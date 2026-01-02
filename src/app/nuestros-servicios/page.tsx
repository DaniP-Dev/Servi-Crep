import React from "react";
import services from "@/lib/services";
import { title } from "process";

export const metadata = {
  metadataBase: new URL("https://www.servicrep.com.co/"),
  title: "Nuestros Servicios",
  description:
    "Inspección de estaciones de servicio (EDS) y pruebas de hermeticidad. Servicio en sitio en Colombia, programación de visitas y entrega de resultados",
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

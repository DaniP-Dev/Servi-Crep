
import React from 'react';
import Image from "next/image";

const serviceTexts = {
  sectionTitle: "Nuestros Servicios",
  sectionSubtitle: "Inspección técnica acreditada para estaciones de servicio",
  sectionDescription: "Ofrecemos servicios de inspección imparcial y objetiva, garantizando el cumplimiento normativo y la seguridad en el almacenamiento y distribución de combustibles líquidos.",
  tabs: [
    { id: 1, label: "Comercial" },
    { id: 2, label: "Residencial" },
    { id: 3, label: "Industrial" }
  ],
  services: {
    Comercial: [
      {
        img: "/img/commercial-1.jpg",
        title: "Inspección de tanques de almacenamiento",
        desc: "Verificamos el estado y cumplimiento de tanques para combustibles líquidos en estaciones de servicio.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/commercial-2.jpg",
        title: "Revisión de sistemas de seguridad",
        desc: "Evaluamos los sistemas de protección contra incendios y derrames conforme a la normativa vigente.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/commercial-3.jpg",
        title: "Dictamen técnico acreditado",
        desc: "Emitimos informes técnicos válidos ante autoridades regulatorias y entes de control.",
        cta: { label: "Saber más", href: "/contacto" }
      }
    ],
    Residencial: [
      {
        img: "/img/residential-1.jpg",
        title: "Inspección de tanques residenciales",
        desc: "Aseguramos la correcta instalación y operación de tanques en conjuntos residenciales.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/residential-2.jpg",
        title: "Verificación de sistemas de ventilación",
        desc: "Revisamos que los sistemas de ventilación cumplan con los estándares de seguridad.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/residential-3.jpg",
        title: "Evaluación de riesgos",
        desc: "Identificamos y reportamos riesgos asociados al almacenamiento de combustibles en viviendas.",
        cta: { label: "Saber más", href: "/contacto" }
      }
    ],
    Industrial: [
      {
        img: "/img/industrial-1.jpg",
        title: "Inspección de plantas industriales",
        desc: "Inspeccionamos instalaciones industriales que almacenan y manipulan combustibles líquidos.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/industrial-2.jpg",
        title: "Control de cumplimiento normativo",
        desc: "Verificamos el cumplimiento de la normatividad ambiental y de seguridad industrial.",
        cta: { label: "Saber más", href: "/contacto" }
      },
      {
        img: "/img/industrial-3.jpg",
        title: "Auditoría técnica especializada",
        desc: "Realizamos auditorías técnicas para optimizar la seguridad y operación de las plantas.",
        cta: { label: "Saber más", href: "/contacto" }
      }
    ]
  }
};

const Service = () => {
    return (
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="d-flex flex-column mx-auto text-center mb-5" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">{serviceTexts.sectionTitle}</h4>
                    <h1 className="display-4 mb-4">{serviceTexts.sectionSubtitle}</h1>
                    <p className="mb-0">{serviceTexts.sectionDescription}</p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-3 wow fadeInLeft" data-wow-delay="0.2s">
                        <ul className="nav">
                          {serviceTexts.tabs.map((tab, idx) => (
                            <li className={`nav-item me-lg-0 mb-4${idx === 2 ? ' mb-lg-0' : ''}`} key={tab.id}>
                              <a className={`py-3 px-5${idx === 0 ? ' active' : ''}`} data-bs-toggle="pill" href={`#ServiceTab-${tab.id}`}>
                                <span>{tab.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                    </div>
                    <div className="col-lg-9 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="tab-content">
                            {serviceTexts.tabs.map((tab, idx) => {
                              // Map label to the correct key for services
                              type ServiceKey = keyof typeof serviceTexts.services;
                              const labelToKey = (label: string): ServiceKey => {
                                if (label === "Comercial") return "Comercial";
                                if (label === "Residencial") return "Residencial";
                                if (label === "Industrial") return "Industrial";
                                // fallback (should not happen)
                                return "Comercial";
                              };
                              const key = labelToKey(tab.label);
                              return (
                                <div
                                  id={`ServiceTab-${tab.id}`}
                                  className={`tab-pane fade show p-0${idx === 0 ? ' active' : ''}`}
                                  key={tab.id}
                                >
                                  <div className="service-carousel owl-carousel">
                                    {serviceTexts.services[key].map((service, sidx) => (
                                      <div className="service-item" key={service.title}>
                                        <Image src={service.img} className="img-fluid w-100" alt="" width={600} height={400} />
                                        <div className="border border-top-0 p-4">
                                          <h4 className="mb-3">{service.title}</h4>
                                          <p className="mb-4">{service.desc}</p>
                                          <a className="btn btn-primary py-2 px-4" href={service.cta.href}>{service.cta.label}</a>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
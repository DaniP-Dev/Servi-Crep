
import React from 'react';
import Image from "next/image";

const aboutTexts = {
  sectionTitle: "¿Quiénes Somos?",
  sectionSubtitle: "Organismo de Inspección Tipo A, especializado en la verificación técnica de estaciones de servicio que almacenan y distribuyen combustibles líquidos.",
  sectionDescription: "Nuestra operación se basa en la imparcialidad, independencia y competencia técnica. No realizamos actividades que comprometan nuestra objetividad, como diseño, instalación o mantenimiento. Nuestro único enfoque es inspeccionar, conforme al alcance acreditado.",
  features: [
    { icon: "fas fa-bolt fa-3x me-3", label: "Inspección técnica acreditada" },
    { icon: "fas fa-broadcast-tower fa-3x me-3", label: "Verificación de cumplimiento normativo" }
  ],
  highlights: [
    "Imparcialidad y objetividad en cada inspección.",
    "Acreditación ONAC bajo la norma ISO/IEC 17020.",
    "Dictámenes técnicos confiables y respaldados."
  ],
  cta: {
    label: "Contáctanos",
    href: "/contacto"
  },
  experience: {
    years: "5+",
    label: "Años de experiencia"
  }
};

const About = () => {
    return (
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="h-100">
                            <h4 className="text-primary">{aboutTexts.sectionTitle}</h4>
                            <h1 className="display-4 mb-4">{aboutTexts.sectionSubtitle}</h1>
                            <p className="mb-4">{aboutTexts.sectionDescription}</p>
                            <div className="row g-4 mb-4">
                              {aboutTexts.features.map((feature, idx) => (
                                <div className="col-md-6" key={feature.label}>
                                  <div className="d-flex">
                                    <span className={feature.icon}></span>
                                    <h4 className="mb-0">{feature.label}</h4>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-dark mb-4">
                              {aboutTexts.highlights.map((item, idx) => (
                                <p className="fs-5" key={item}><span className="fa fa-check text-primary me-2"></span> {item}</p>
                              ))}
                            </div>
                            <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href={aboutTexts.cta.href}>{aboutTexts.cta.label}</a>
                        </div>
                    </div>
                    <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="position-relative h-100">
                            <Image
                                src="/img/about-1.jpg"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: 'cover' }}
                                alt=""
                                width={600}   // Ajusta según el tamaño real
                                height={400}  // Ajusta según el tamaño real
                            />
                            <div className="bg-white">
                                <div className="position-absolute pt-3 bg-white" style={{ width: '50%', left: 0, bottom: 0 }}>
                                    <div className="bg-primary p-4">
                                        <h4 className="display-2 mb-0">{aboutTexts.experience.years}</h4>
                                        <p className="text-white fs-5 mb-0">{aboutTexts.experience.label}</p>
                                    </div>
                                </div>
                                <div className="position-absolute p-3 bg-white pb-0 pe-0" style={{ width: '50%', bottom: 0, right: 0 }}>
                                    <Image
                                        src="/img/about-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                        width={300}   // Ajusta según el tamaño real
                                        height={200}  // Ajusta según el tamaño real
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
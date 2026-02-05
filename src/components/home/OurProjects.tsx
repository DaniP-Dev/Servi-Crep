
import React from 'react';
import Image from "next/image";

const ourProjectsTexts = {
  sectionTitle: "Proyectos Destacados",
  sectionSubtitle: "De Crisis a Éxito Verificado.",
  sectionDescription: "Con nuestra verificación imparcial, Explora casos reales: antes/después de inspecciones que protegen tu legado.",
  tabs: [
    {
      id: 1,
      icon: "fas fa-bolt small",
      label: "Inspección de tanques subterráneos"
    },
    {
      id: 2,
      icon: "fas fa-charging-station small",
      label: "Evaluación de sistemas de seguridad"
    },
    {
      id: 3,
      icon: "fas fa-broadcast-tower small",
      label: "Verificación de normatividad"
    },
    {
      id: 4,
      icon: "fas fa-bolt small",
      label: "Dictámenes técnicos acreditados"
    }
  ],
  projects: [
    {
      img: "/img/industrial-1.jpg",
      title: "Inspección de tanques subterráneos",
      desc: "Realizamos inspecciones exhaustivas para garantizar la integridad y seguridad de los tanques de almacenamiento.",
      cta: { label: "Ver más", href: "https://wa.me/573152077289" }
    },
    {
      img: "/img/industrial-2.jpg",
      title: "Evaluación de sistemas de seguridad",
      desc: "Verificamos la correcta operación de sistemas contra incendios y control de derrames en estaciones de servicio.",
      cta: { label: "Ver más", href: "https://wa.me/573152077289" }
    },
    {
      img: "/img/commercial-1.jpg",
      title: "Verificación de normatividad",
      desc: "Aseguramos el cumplimiento de la normatividad ambiental y de seguridad vigente.",
      cta: { label: "Ver más", href: "https://wa.me/573152077289" }
    },
    {
      img: "/img/commercial-2.jpg",
      title: "Dictámenes técnicos acreditados",
      desc: "Emitimos informes técnicos válidos ante autoridades regulatorias y entes de control.",
      cta: { label: "Ver más", href: "https://wa.me/573152077289" }
    }
  ]
};

const OurProjects = () => {
    return (
        <div className="container-fluid projects bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-primary">{ourProjectsTexts.sectionTitle}</h4>
                            <h1 className="display-4 mb-4 text-secondary">{ourProjectsTexts.sectionSubtitle}</h1>
                            <p className="mb-5">{ourProjectsTexts.sectionDescription}</p>
                            <ul className="nav">
                              {ourProjectsTexts.tabs.map((tab, idx) => (
                                <li className={`nav-item bg-white mb-4 w-100`} key={tab.id}>
                                  <a className={`d-flex align-items-center h4 mb-0 p-3${idx === 0 ? ' active' : ''}`} data-bs-toggle="pill" href={`#ProjectsTab-${tab.id}`}>
                                    <div className="projects-icon btn-md-square bg-primary text-white me-3"><span className={tab.icon}></span></div><span>{tab.label}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="tab-content">
                            {ourProjectsTexts.tabs.map((tab, idx) => (
                              <div
                                id={`ProjectsTab-${tab.id}`}
                                className={`tab-pane fade show p-0${idx === 0 ? ' active' : ''}`}
                                key={tab.id}
                              >
                                <div className="projects-item">
                                  <Image src={ourProjectsTexts.projects[idx].img} className="img-fluid w-100" alt="" width={600} height={400} />
                                  <div className="projects-content bg-white p-4">
                                    <h4 className="mb-3">{ourProjectsTexts.projects[idx].title}</h4>
                                    <p className="mb-4">{ourProjectsTexts.projects[idx].desc}</p>
                                    <a className="btn btn-primary py-2 px-4" href={ourProjectsTexts.projects[idx].cta.href} target="_blank" rel="noopener noreferrer">{ourProjectsTexts.projects[idx].cta.label}</a>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;
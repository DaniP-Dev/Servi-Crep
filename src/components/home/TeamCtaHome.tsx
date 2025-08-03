
import React from 'react';
import Image from "next/image";

const teamCtaTexts = {
  sectionTitle: "Nuestro Equipo",
  sectionSubtitle: "Profesionales en inspección técnica acreditada",
  sectionDescription: "Contamos con un equipo multidisciplinario, altamente calificado y comprometido con la imparcialidad y la excelencia en cada inspección.",
  team: [
    {
      img: "/img/team-1.jpg",
      name: "Natasha",
      role: "Directora Técnica",
      social: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" }
      ]
    },
    {
      img: "/img/team-2.jpg",
      name: "Josimar Crespo",
      role: "Inspector Líder",
      social: [
        { icon: "fab fa-linkedin-in", href: "#" }
      ]
    },
    {
      img: "/img/team-3.jpg",
      name: "Daniel Perez",
      role: "Coordinador de Calidad",
      social: [
        { icon: "fab fa-linkedin-in", href: "#" }
      ]
    },
    {
      img: "/img/team-4.jpg",
      name: "Johan Crespo",
      role: "Inspector Técnico",
      social: [
        { icon: "fab fa-linkedin-in", href: "#" }
      ]
    }
  ]
};

const TeamCtaHome = () => {
    return (
         <div className="container-fluid team pb-5">
            <div className="container pb-5">
                <div className="d-flex flex-column mx-auto text-center mb-5" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">{teamCtaTexts.sectionTitle}</h4>
                    <h1 className="display-4 mb-4">{teamCtaTexts.sectionSubtitle}</h1>
                    <p className="mb-0">{teamCtaTexts.sectionDescription}</p>
                </div>
                <div className="row g-4">
                  {teamCtaTexts.team.map((member, idx) => (
                    <div className={`col-md-6 col-lg-3`} key={member.name}>
                      <div className="team-item">
                        <div className="team-img">
                          <Image src={member.img} className="img-fluid w-100" alt="" width={400} height={400} />
                          <div className="team-icon">
                            {member.social.map((s, sidx) => (
                              <a className="btn btn-square btn-primary mb-2" href={s.href} key={s.icon}><i className={s.icon}></i></a>
                            ))}
                          </div>
                        </div>
                        <div className="team-content bg-light text-center p-4">
                          <h4>{member.name}</h4>
                          <p className="mb-0">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
         </div>

    );
};

export default TeamCtaHome;
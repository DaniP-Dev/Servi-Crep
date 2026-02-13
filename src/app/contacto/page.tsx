import React from "react";
import type { Metadata } from "next";

const contactoTexts = {
  sectionTitle: "Contáctanos",
  sectionSubtitle: "¡Estamos listos para ayudarte!",
  sectionDescription: "Completa el formulario o utiliza nuestros canales de contacto para recibir asesoría sobre inspección técnica acreditada.",
  social: [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/servicrep" },
  ],
  info: [
    {
      icon: "fas fa-map-marker-alt fa-2x text-primary me-4",
      title: "Dirección",
      value: "Carrera 14 # 77a-87, Mz 4 Cs 11, Los Robles, Soledad, Colombia"
    },
    {
      icon: "fas fa-envelope fa-2x text-primary me-4",
      title: "Correo",
      value: "servicrep04@gmail.com"
    },
    {
      icon: "fa fa-phone-alt fa-2x text-primary me-4",
      title: "Teléfono",
      value: "+57 315 207 7289"
    }
  ],
  form: {
    name: { label: "Nombre completo", placeholder: "Tu nombre" },
    email: { label: "Correo electrónico", placeholder: "Tu correo" },
    phone: { label: "Teléfono", placeholder: "Tu teléfono" },
    project: { label: "Proyecto", placeholder: "¿Sobre qué proyecto quieres información?" },
    subject: { label: "Asunto", placeholder: "Asunto" },
    message: { label: "Mensaje", placeholder: "Déjanos tu mensaje aquí" },
    privacy: "Acepto la política de privacidad del sitio",
    send: "Enviar mensaje"
  }
};

export const metadata: Metadata = {
  title: "Contacto | ServiCrep - Solicita tu Inspección Técnica",
  description: "Contáctanos para cotizar inspección de estaciones de servicio y pruebas de hermeticidad. Respuesta en menos de 24 horas. Atendemos en Atlántico y Colombia.",
  keywords: [
    "contacto inspección EDS",
    "cotización hermeticidad",
    "solicitar inspección técnica",
    "ServiCrep contacto",
  ],
  openGraph: {
    title: "Contacto | ServiCrep",
    description: "Solicita tu cotización de inspección técnica acreditada.",
    url: "https://wa.me/573152077289",
    type: "website",
  },
  alternates: {
    canonical: "https://wa.me/573152077289",
  },
};

const Contacto = () => {
  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div>
              <h4 className="text-primary">{contactoTexts.sectionTitle}</h4>
              <h1 className="display-4 mb-4 text-secondary">{contactoTexts.sectionSubtitle}</h1>
              <p className="mb-5">{contactoTexts.sectionDescription}</p>
              <div className="d-flex align-items-center mb-4">
                {contactoTexts.social.map((s, idx) => (
                  <a className={`btn btn-primary btn-md-square me-${idx === contactoTexts.social.length - 1 ? '0' : '3'}`} href={s.href} key={s.icon} target="_blank" rel="noopener noreferrer">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
              <div className="row g-4">
                {contactoTexts.info.map((item, idx) => (
                  <div className={`col-${idx === 0 ? '12' : 'lg-12 col-xl-6'}`} key={item.title}>
                    <div className="d-inline-flex bg-white w-100 p-4">
                      <i className={item.icon}></i>
                      <div>
                        <h4>{item.title}</h4>
                        <p className="mb-0">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div>
              {/* Aquí puedes agregar un mensaje personalizado si lo deseas */}
              <form>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder={contactoTexts.form.name.placeholder}
                      />
                      <label htmlFor="name">{contactoTexts.form.name.label}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder={contactoTexts.form.email.placeholder}
                      />
                      <label htmlFor="email">{contactoTexts.form.email.label}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control border-0"
                        id="phone"
                        placeholder={contactoTexts.form.phone.placeholder}
                      />
                      <label htmlFor="phone">{contactoTexts.form.phone.label}</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="project"
                        placeholder={contactoTexts.form.project.placeholder}
                      />
                      <label htmlFor="project">{contactoTexts.form.project.label}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="subject"
                        placeholder={contactoTexts.form.subject.placeholder}
                      />
                      <label htmlFor="subject">{contactoTexts.form.subject.label}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder={contactoTexts.form.message.placeholder}
                        id="message"
                        style={{ height: "125px" }}
                      ></textarea>
                      <label htmlFor="message">{contactoTexts.form.message.label}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck"
                      />
                      <label className="form-check-label" htmlFor="flexCheck">
                        {contactoTexts.form.privacy}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      {contactoTexts.form.send}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="h-100 overflow-hidden">
              <iframe
                className="w-100"
                style={{ height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.4168356323786!2d-74.8145597304616!3d10.912866316180665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU0JzQ2LjMiTiA3NMKwNDgnNTAuMSJX!5e0!3m2!1ses-419!2sco!4v1770318570396!5m2!1ses-419!2sco"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

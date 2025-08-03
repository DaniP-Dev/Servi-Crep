
import React from "react";

const contactoTexts = {
  sectionTitle: "Contáctanos",
  sectionSubtitle: "¡Estamos listos para ayudarte!",
  sectionDescription: "Completa el formulario o utiliza nuestros canales de contacto para recibir asesoría sobre inspección técnica acreditada.",
  social: [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" }
  ],
  info: [
    {
      icon: "fas fa-map-marker-alt fa-2x text-primary me-4",
      title: "Dirección",
      value: "Cra. 123 #45-67, Bogotá, Colombia"
    },
    {
      icon: "fas fa-envelope fa-2x text-primary me-4",
      title: "Correo electrónico",
      value: "contacto@servicrep.com"
    },
    {
      icon: "fa fa-phone-alt fa-2x text-primary me-4",
      title: "Teléfono",
      value: "+57 310 123 4567"
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

const Contacto = () => {
  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div>
              <h4 className="text-primary">{contactoTexts.sectionTitle}</h4>
              <h1 className="display-4 mb-4">{contactoTexts.sectionSubtitle}</h1>
              <p className="mb-5">{contactoTexts.sectionDescription}</p>
              <div className="d-flex align-items-center mb-4">
                {contactoTexts.social.map((s, idx) => (
                  <a className={`btn btn-primary btn-md-square me-${idx === contactoTexts.social.length - 1 ? '0' : '3'}`} href={s.href} key={s.icon}>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
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

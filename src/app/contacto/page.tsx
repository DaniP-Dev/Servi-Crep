import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants";
import ContactForm from "@/components/contacto/ContactForm";

const contactoTexts = {
  sectionTitle: "Contáctanos",
  sectionSubtitle: "¡Estamos listos para ayudarte!",
  sectionDescription:
    "Completa el formulario o utiliza nuestros canales de contacto para recibir asesoría sobre inspección técnica acreditada.",
  social: [
    { icon: "fab fa-facebook-f", href: CONTACT_INFO.facebookUrl },
    { icon: "fab fa-linkedin-in", href: CONTACT_INFO.linkedinUrl },
    { icon: "fab fa-instagram", href: CONTACT_INFO.instagramUrl },
  ],
  info: [
    {
      icon: "fas fa-map-marker-alt fa-2x text-primary me-4",
      title: "Dirección",
      value: CONTACT_INFO.address,
    },
    {
      icon: "fas fa-envelope fa-2x text-primary me-4",
      title: "Correo",
      value: CONTACT_INFO.email,
    },
    {
      icon: "fa fa-phone-alt fa-2x text-primary me-4",
      title: "Teléfono",
      value: CONTACT_INFO.phone,
    },
  ],
};

export const metadata: Metadata = {
  title: "Contacto | ServiCrep - Solicita tu Inspección Técnica",
  description:
    "Contáctanos para cotizar inspección de estaciones de servicio y pruebas de hermeticidad. Respuesta en menos de 24 horas. Atendemos en Atlántico y Colombia.",
  keywords: [
    "contacto inspección EDS",
    "cotización hermeticidad",
    "solicitar inspección técnica",
    "ServiCrep contacto",
  ],
  openGraph: {
    title: "Contacto | ServiCrep",
    description: "Solicita tu cotización de inspección técnica acreditada.",
    url: "/contacto",
    type: "website",
  },
  alternates: {
    canonical: "/contacto",
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
              <h1 className="display-4 mb-4 text-secondary">
                {contactoTexts.sectionSubtitle}
              </h1>
              <p className="mb-4">{contactoTexts.sectionDescription}</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <a
                  className="btn btn-primary"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CTA_LABELS.whatsapp}
                </a>
                <Link className="btn btn-outline-secondary" href="/como-cotizar">
                  {CTA_LABELS.howToQuote}
                </Link>
              </div>
              <div className="d-flex align-items-center mb-4">
                {contactoTexts.social.map((s, idx) => (
                  <a
                    className={`btn btn-primary btn-md-square me-${idx === contactoTexts.social.length - 1 ? "0" : "3"}`}
                    href={s.href}
                    key={s.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
              <div className="row g-4">
                {contactoTexts.info.map((item, idx) => (
                  <div
                    className={`col-${idx === 0 ? "12" : "lg-12 col-xl-6"}`}
                    key={item.title}
                  >
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
            <ContactForm />
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="h-100 overflow-hidden">
              <iframe
                className="w-100"
                style={{ height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.4168356323786!2d-74.8145597304616!3d10.912866316180665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU0JzQ2LjMiTiA3NMKwNDgnNTAuMSJX!5e0!3m2!1ses-419!2sco!4v1770318570396!5m2!1ses-419!2sco"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ServiCrep en Soledad, Atlántico"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

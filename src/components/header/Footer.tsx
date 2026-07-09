import React from "react";
import Image from "next/image";
import Link from "next/link";
import services from "@/lib/services";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants";
import { bannerTexts } from "@/lib/navsLinks";

const footerTexts = {
  social: [
    {
      icon: "fab fa-facebook-f",
      label: "Facebook",
      href: CONTACT_INFO.facebookUrl,
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      href: CONTACT_INFO.instagramUrl,
    },
    {
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
      href: CONTACT_INFO.linkedinUrl,
    },
  ],
  brand: {
    name: "ServiCrep",
    description:
      "Organismo de Inspección Tipo A acreditado por ONAC. Especialistas en inspección técnica de estaciones de servicio para combustibles líquidos, garantizando imparcialidad, independencia y cumplimiento normativo.",
  },
  quickLinks: {
    title: "Enlaces rápidos",
    links: [
      ...bannerTexts.nav.filter((item) => item),
      { href: "/como-cotizar", label: CTA_LABELS.howToQuote },
      { href: "/contacto", label: "Validar certificado (contacto)" },
    ],
  },
  services: {
    title: "Explora más servicios de inspección",
    links: Object.values(services).map((service) => ({
      href: service.slug,
      label: service.title,
    })),
  },
  contact: {
    title: "Información de contacto",
    items: [
      {
        icon: "fa fa-map-marker-alt text-primary me-2",
        label: CONTACT_INFO.location,
        href: "/contacto",
      },
      {
        icon: "fas fa-envelope text-primary me-2",
        label: CONTACT_INFO.email,
        href: `mailto:${CONTACT_INFO.email}`,
      },
      {
        icon: "fas fa-phone text-primary me-2",
        label: CONTACT_INFO.phone,
        href: CONTACT_INFO.telUrl,
      },
    ],
  },
};

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5 mb-5 align-items-center">
            <div className="col-lg-7">
              <h3 className="text-light h4 mb-2">¿Listo para cotizar?</h3>
              <p className="text-light mb-0">
                Respuesta en 24–48 horas hábiles. Te orientamos según el alcance de tu EDS.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap gap-2">
                <a
                  className="btn btn-primary"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CTA_LABELS.whatsapp}
                </a>
                <Link className="btn btn-light" href="/como-cotizar">
                  {CTA_LABELS.howToQuote}
                </Link>
                {footerTexts.social.map((item) => (
                  <a
                    key={item.icon}
                    className="btn btn-light btn-md-square"
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <div className="mb-4 d-flex align-items-center">
                    <Image
                      src="/logo.png"
                      alt="Servicrep - Inspecciones a estaciones de gasolina y pruebas de hermeticidad bajo la norma ISO/IEC 17020"
                      width={64}
                      height={64}
                      className="me-3"
                    />
                    <h3 className="text-light mb-0">{footerTexts.brand.name}</h3>
                  </div>
                  <p className="mb-3 text-justify text-light">
                    {footerTexts.brand.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">{footerTexts.services.title}</h4>
                {footerTexts.services.links.map((link) => (
                  <Link
                    className="text-light text-start d-block"
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">{footerTexts.quickLinks.title}</h4>
                {footerTexts.quickLinks.links.map((link) => (
                  <Link className="text-light" key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">{footerTexts.contact.title}</h4>
                {footerTexts.contact.items.map((item, idx) => (
                  <a
                    className="text-light"
                    key={item.label + idx}
                    href={item.href}
                  >
                    <i className={`${item.icon} `}></i> {item.label}
                  </a>
                ))}
                <p className="text-light small mt-3 mb-0">
                  Los certificados se validan con el código QR impreso. Si necesitas ayuda,{" "}
                  <Link href="/contacto" className="text-primary">
                    contáctanos
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

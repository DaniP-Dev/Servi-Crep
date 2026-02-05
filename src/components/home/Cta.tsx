import { subtle } from "crypto";
import React from "react";

const ctaTexts = {
  subtitle: "¿Necesitas una inspección?",
  title: "Una llamada nuestra cambia la historia:",
  subtle1: "servicio confiable y profesional,",
  subtle2: "respuesta rápida garantizada.",
  textCta: "¡Agenda tu inspección hoy mismo!",
  cta: {
    label: "Solicita tu inspección",
    href: "https://wa.me/573152077289",
  },
};

const Cta = () => {
  return (
    <div className="container-fluid banner py-5">
      <div className="banner-design-1"></div>
      <div className="banner-design-2"></div>
      <div className="container py-5">
        <div className="row  ms-4 mt-3">
          <div className="col-lg-8 ">
            <div className="">
              <h4 className="text-info">{ctaTexts.subtitle}</h4>
              <h1 className="display-4 text-light mb-0">{ctaTexts.title}</h1>
              <ul className="mt-2 mb-0 ps-4" style={{ listStyleType: "disc" }}>
                <li className="text-light fs-5 font-semibold">
                  {ctaTexts.subtle1}
                </li>
                <li className="text-light fs-5 font-semibold">
                  {ctaTexts.subtle2}
                </li>
              </ul>
              <div className="mt-3">
                <span className="fw-bold text-warning">{ctaTexts.textCta}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-lg-end h-100">
              <a
                className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                href={ctaTexts.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaTexts.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

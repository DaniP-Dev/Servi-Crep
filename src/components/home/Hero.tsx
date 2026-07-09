"use client";
import React from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const heroTexts = {
  subtitle: "Inspecciones acreditadas por ONAC (ISO/IEC 17020)",
  title: "Inspección técnica acreditada para estaciones de servicio",
  description:
    "Verificamos tanques, hermeticidad y sistemas en EDS con independencia técnica, documentación confiable y cobertura en Colombia.",
  buttonPrimary: {
    label: "Cotizar por WhatsApp",
    iconClass: "fab fa-whatsapp me-2",
  },
  buttonSecondary: {
    label: "Ver servicios",
  },
};

const Hero = () => {
  return (
    <div className="header-carousel overflow-hidden">
      <div className="header-carousel-item hero-section active">
        <div className="hero-bg-half-1"></div>
        <div className="hero-shape-1"></div>

        <div className="carousel-caption align-items-start pt-3 pt-md-4">
          <div className="container h-100">
            <div className="row h-100 g-4 align-items-center">
              <div className="col-lg-7 animated fadeInLeft h-100">
                <div className="text-sm-center text-md-start d-flex flex-column h-100 py-4 py-md-5">
                  <div className="mb-auto">
                    <h1 className="display-5 fw-bold mb-4 lh-sm d-inline-block px-3 py-2 rounded-3 text-light">
                      {heroTexts.title}
                    </h1>
                    <h4 className="text-white text-uppercase fw-bold mb-4">
                      {heroTexts.subtitle}
                    </h4>
                  </div>

                  <div className="mt-auto">
                    <p
                      className="fs-5 text-white text-start me-auto"
                      style={{ maxWidth: "560px" }}
                    >
                      {heroTexts.description}
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start shrink-0 flex-wrap gap-2">
                      <a
                        className="btn btn-light py-3 px-4 px-md-5"
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={heroTexts.buttonPrimary.iconClass}></i>
                        {heroTexts.buttonPrimary.label}
                      </a>
                      <Link
                        className="btn btn-primary py-3 px-4 px-md-5"
                        href="/nuestros-servicios"
                      >
                        {heroTexts.buttonSecondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

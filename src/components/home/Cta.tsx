
import React from 'react';

const ctaTexts = {
  subtitle: "¿Necesitas una inspección?",
  title: "Cumple con la normatividad y garantiza la seguridad de tu estación de servicio.",
  cta: {
    label: "Solicita tu inspección",
    href: "/contacto"
  }
};

const Cta = () => {
    return (
        <div className="container-fluid banner py-5" >
            <div className="banner-design-1"></div>
            <div className="banner-design-2"></div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="">
                            <h4 className="text-info">{ctaTexts.subtitle}</h4>
                            <h1 className="display-4 text-light mb-0">{ctaTexts.title}</h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-lg-end h-100">
                            <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href={ctaTexts.cta.href}>{ctaTexts.cta.label}</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Cta;
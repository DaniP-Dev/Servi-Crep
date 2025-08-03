
import React from 'react';

const footerTexts = {
  subscribePlaceholder: "Correo electrónico para suscribirse",
  subscribeButton: "Suscribirse",
  social: [
    { icon: "fab fa-facebook-f", label: "Facebook", href: "https://facebook.com/servicrep" },
    { icon: "fab fa-instagram", label: "Instagram", href: "https://instagram.com/servicrep" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://linkedin.com/company/servicrep" }
  ],
  brand: {
    icon: "fas fa-bolt text-primary me-3",
    name: "ServiCrep",
    description: "Organismo de Inspección Tipo A acreditado por ONAC. Especialistas en inspección técnica de estaciones de servicio para combustibles líquidos, garantizando imparcialidad, independencia y cumplimiento normativo."
  },
  quickLinks: {
    title: "Enlaces rápidos",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/nuestros-servicios", label: "Servicios" },
      { href: "/contacto", label: "Contacto" },
      { href: "/quienes-somos", label: "¿Quiénes somos?" }
    ]
  },
  services: {
    title: "Servicios de inspección",
    links: [
      { href: "/nuestros-servicios", label: "Inspección técnica acreditada" },
      { href: "/nuestros-servicios", label: "Verificación de cumplimiento normativo" },
      { href: "/nuestros-servicios", label: "Dictamen técnico para estaciones" },
      { href: "/nuestros-servicios", label: "Acompañamiento regulatorio" }
    ]
  },
  contact: {
    title: "Información de contacto",
    items: [
      { icon: "fa fa-map-marker-alt text-primary me-2", label: "Bogotá, Colombia", href: "#" },
      { icon: "fas fa-envelope text-primary me-2", label: "contacto@servicrep.com", href: "mailto:contacto@servicrep.com" },
      { icon: "fas fa-phone text-primary me-2", label: "+57 300 123 4567", href: "tel:+573001234567" }
    ]
  },
  copyright: {
    site: "ServiCrep",
    reserved: "Todos los derechos reservados.",
    designer: "Equipo ServiCrep",
    designerUrl: "https://servi-crep.vercel.app"
  }
};

const Footer = () => {
    return (
        <div>
        <div className="container-fluid footer bg-dark py-5">
            <div className="container py-5">
                <div className="row g-5 mb-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="position-relative mx-auto">
                            <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder={footerTexts.subscribePlaceholder}/>
                            <button type="button" className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">{footerTexts.subscribeButton}</button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                            {footerTexts.social.map((item, idx) => (
                              <a key={item.icon} className={`btn btn-light btn-md-square${idx < footerTexts.social.length - 1 ? ' me-3' : ''}`} href={item.href} aria-label={item.label}>
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
                                <h3 className="text-white mb-4"><i className={footerTexts.brand.icon}></i>{footerTexts.brand.name}</h3>
                                <p className="mb-3" >{footerTexts.brand.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">{footerTexts.quickLinks.title}</h4>
                            {footerTexts.quickLinks.links.map(link => (
                              <a key={link.label} href={link.href}> {link.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">{footerTexts.services.title}</h4>
                            {footerTexts.services.links.map(link => (
                              <a key={link.label} href={link.href}> {link.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">{footerTexts.contact.title}</h4>
                            {footerTexts.contact.items.map((item, idx) => (
                              <a key={item.label + idx} href={item.href}>
                                <i className={item.icon}></i> {item.label}
                              </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>{footerTexts.copyright.site}</a>, {footerTexts.copyright.reserved}</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body">
                   
                        Designed By <a className="border-bottom text-white" href={footerTexts.copyright.designerUrl}>{footerTexts.copyright.designer}</a>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Footer;
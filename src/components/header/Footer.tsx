import React from 'react';
import Image from "next/image";
import { bannerTexts } from "@/lib/navsLinks";
import services from "@/lib/services";


const footerTexts = {
  subscribePlaceholder: "Correo electrónico para suscribirse",
  subscribeButton: "Suscribirse",
  social: [
    { icon: "fab fa-facebook-f", label: "Facebook", href: "https://facebook.com/servicrep" },
    { icon: "fab fa-instagram", label: "Instagram", href: "https://instagram.com/servicrep" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://linkedin.com/company/servicrep" }
  ],
  brand: {
    name: "ServiCrep",
    description: "Organismo de Inspección Tipo A acreditado por ONAC. Especialistas en inspección técnica de estaciones de servicio para combustibles líquidos, garantizando imparcialidad, independencia y cumplimiento normativo."
  },
  quickLinks: {
    title: "Enlaces rápidos",
    links: bannerTexts.nav.filter(item => item)
  },
  services: {
    title: "Servicios de inspección",
    links: Object.values(services).map(service => ({
      href: service.slug,
      label: service.title
    }))
  },
  contact: {
    title: "Información de contacto",
    items: [
      { icon: "fa fa-map-marker-alt text-primary me-2", label: "Soledad, Colombia", href: "#" },
      { icon: "fas fa-envelope text-primary me-2", label: "servicrep04@gmail.com", href: "mailto:servicrep04@gmail.com" },
      { icon: "fas fa-phone text-primary me-2", label: "+57 300 123 4567", href: "tel:+573001234567" }
    ]
  },
  copyright: {
    site: "ServiCrep",
    reserved: "Todos los derechos reservados.",
    designer: "Equipo ServiCrep",
    designerUrl: "https://www.servicrep.com.co/"
  }
};

const Footer = () => {
    return (
        <div>
        <div className="container-fluid footer py-5">
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
                                <div className="mb-4 d-flex align-items-center">
                                    <Image src="/logo.png" alt="Servicrep" width={40} height={40} className="me-3" />
                                    <h3 className="text-white mb-0">{footerTexts.brand.name}</h3>
                                </div>
                                <p className="mb-3 text-justify">{footerTexts.brand.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">{footerTexts.quickLinks.title}</h4>
                            {footerTexts.quickLinks.links.map(link => (
                              <a key={link.label} href={link.href}> {link.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">{footerTexts.services.title}</h4>
                            {footerTexts.services.links.map(link => (
                              <a className='text-start d-block' key={link.label} href={link.href}> {link.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3" >
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
                   
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Footer;
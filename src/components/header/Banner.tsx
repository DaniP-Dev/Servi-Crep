import React from "react";
import Link from "next/link";
import { bannerTexts } from "@/lib/navsLinks";


const Banner = () => {
  return (
    <div>
      <div className="container-fluid header-top">
        <div className="container d-flex align-items-center">
          <div className="d-flex align-items-center h-100">
            <Link href="#" className="navbar-brand" style={{ height: "125px" }}>
              <h1 className="text-primary mb-0">{bannerTexts.brand}</h1>
              {/* <img src="/img/logo.png" alt="Logo"/>*/}
            </Link>
          </div>
          <div className="w-100 h-100">
            <div
              className="topbar px-0 py-2 d-none d-lg-block"
              style={{ height: "45px" }}
            >
              <div className="row gx-0 align-items-center">
                <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                  <div className="d-flex flex-wrap">
                    <div className="border-end border-primary pe-3">
                      <Link href="#" className="text-muted small">
                        <i className={bannerTexts.location.icon}></i>
                        {bannerTexts.location.label}
                      </Link>
                    </div>
                    <div className="ps-3">
                      <Link
                        href={`mailto:${bannerTexts.email.label}`}
                        className="text-muted small"
                      >
                        <i className={bannerTexts.email.icon}></i>
                        {bannerTexts.email.label}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                  <div className="d-flex justify-content-end">
                    <div className="d-flex border-end border-primary pe-3">
                      {bannerTexts.social.map((item, idx) => (
                        <Link
                          key={item.icon}
                          className={`btn p-0 text-primary${
                            idx < bannerTexts.social.length - 1 ? " me-3" : ""
                          }`}
                          href={item.href}
                          aria-label={item.label}
                        >
                          <i className={item.icon}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
              <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                <Link href="#" className="navbar-brand-2">
                  <h1 className="text-primary mb-0">
                    <i className="fas fa-bolt"></i> SERVICREP
                  </h1>
                  {/* <img src="/img/logo.png" alt="Logo"/>*/}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav mx-0 mx-lg-auto bg-white">
                    {bannerTexts.nav.map((item, idx) => {
                      // Si es un dropdown
                      if (item.dropdown) {
                        return (
                          <div key={item.label} className="nav-item dropdown">
                            <Link
                              href="#"
                              className="nav-link dropdown-toggle"
                              id={`navbar${item.label}`}
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {item.label}
                            </Link>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby={`navbar${item.label}`}
                            >
                              {item.dropdown.map((subitem, idx) => (
                                <li key={`${item.label}-${idx}`}>
                                  <Link
                                    href={subitem.href}
                                    className="dropdown-item"
                                  >
                                    {subitem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      // Si es un enlace normal
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`nav-item nav-link${
                            idx === 0 ? " active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                    <div className="nav-btn ps-3">
                      <Link
                        href={bannerTexts.cta.href}
                        className="btn py-2 px-4 ms-0 ms-lg-3 d-flex align-items-center"
                        style={bannerTexts.cta.style}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <i
                          className={`${bannerTexts.cta.icon} me-2`}
                          style={{ fontSize: "1.3em" }}
                        ></i>
                        {bannerTexts.cta.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

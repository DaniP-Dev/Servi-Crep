import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container-fluid header-top">
        <div className="container d-flex align-items-center">
          <div className="d-flex align-items-center h-100">
            <a href="#" className="navbar-brand" style={{ height: "125px" }}>
              <h1 className="text-primary mb-0">
                <i className="fas fa-bolt"></i> Electra
              </h1>
              {/* <img src="/img/logo.png" alt="Logo"/>*/}
            </a>
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
                      <a href="#" className="text-muted small">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        Find A Location
                      </a>
                    </div>
                    <div className="ps-3">
                      <a
                        href="mailto:example@gmail.com"
                        className="text-muted small"
                      >
                        <i className="fas fa-envelope text-primary me-2"></i>
                        example@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                  <div className="d-flex justify-content-end">
                    <div className="d-flex border-end border-primary pe-3">
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn p-0 text-primary me-0" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
              <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                <a href="#" className="navbar-brand-2">
                  <h1 className="text-primary mb-0">
                    <i className="fas fa-bolt"></i> Electra
                  </h1>
                  {/* <img src="/img/logo.png" alt="Logo"/>*/}
                </a>
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
                    <a href="/" className="nav-item nav-link active">
                      Home
                    </a>
                    <a href="/nuestros-servicios" className="nav-item nav-link">
                      Service
                    </a>
                    <a href="/contacto" className="nav-item nav-link">
                      Contact
                    </a>
                    <div className="nav-btn ps-3">
                      <button
                        className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                      >
                        <i className="fas fa-search"></i>
                      </button>
                      <a
                        href="#"
                        className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"
                      >
                        {" "}
                        Get Solution
                      </a>
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

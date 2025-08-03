import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className="container-fluid footer bg-dark py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5 mb-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="position-relative mx-auto">
                            <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Email address to Subscribe"/>
                            <button type="button" className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                            <a className="btn btn-light btn-md-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-light btn-md-square me-3" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-light btn-md-square me-3" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-light btn-md-square me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h3 className="text-white mb-4"><i className="fas fa-bolt text-primary me-3"></i>Electra</h3>
                                <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <a href="#"> Home</a>
                            <a href="#"> About us</a>
                            <a href="#"> Service</a>
                            <a href="#"> Testimonial</a>
                            <a href="#"> Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Electricity service</h4>
                            <a href="#"> Air Conditioning</a>
                            <a href="#"> Electrical Panels</a>
                            <a href="#"> Security System</a>
                            <a href="#"> Indoor Lighting</a>
                            <a href="#"> Electrical Services</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="#"><i className="fa fa-map-marker-alt text-primary me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope text-primary me-2"></i> info@example.com</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope text-primary me-2"></i> info@example.com</a>
                            <a href="tel:+012 345 67890"><i className="fas fa-phone text-primary me-2"></i> +012 345 67890</a>
                            <a href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print text-primary me-2"></i> +012 345 67890</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body">
                   
                        Designed By <a className="border-bottom text-white" href="https://web.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Footer;
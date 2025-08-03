import React from 'react';

const About = () => {
    return (
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="h-100">
                            <h4 className="text-primary">About Us</h4>
                            <h1 className="display-4 mb-4">Providing you with the highest quality of features</h1>
                            <div className="row g-4 mb-4">
                                <div className="col-md-6">
                                    <a href="#" className="d-flex">
                                        <span className="fas fa-bolt fa-3x me-3"></span>
                                        <h4 className="mb-0">Emergency Power Solution</h4>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#" className="d-flex">
                                        <span className="fas fa-broadcast-tower fa-3x me-3"></span>
                                        <h4 className="mb-0">Full-Service Electrical Layout</h4>
                                    </a>
                                </div>
                            </div>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, minus. At velit nam, animi culpa fugiat neque facere illum, eum possimus omnis accusantium deleniti consectetur temporibus necessitatibus asperiores sunt dicta?
                            </p>
                            <div className="text-dark mb-4">
                                <p className="fs-5"><span className="fa fa-check text-primary me-2"></span> Installed, maintained and repaired lighting for clients.</p>
                                <p className="fs-5"><span className="fa fa-check text-primary me-2"></span> Increasingly popular way to generate electricity.</p>
                                <p className="fs-5"><span className="fa fa-check text-primary me-2"></span> Protect electrical devices from damage.</p>
                            </div>
                            <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="position-relative h-100">
                            <img src="img/about-1.jpg" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="" />
                            <div className="bg-white">
                                <div className="position-absolute pt-3 bg-white" style={{ width: '50%', left: 0, bottom: 0 }}>
                                    <div className="bg-primary p-4">
                                        <h4 className="display-2 mb-0">25+</h4>
                                        <p className="text-white fs-5 mb-0">years of experience</p>
                                    </div>
                                </div>
                                <div className="position-absolute p-3 bg-white pb-0 pe-0" style={{ width: '50%', bottom: 0, right: 0 }}>
                                    <img src="img/about-2.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
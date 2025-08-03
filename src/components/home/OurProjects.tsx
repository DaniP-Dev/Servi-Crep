import React from 'react';
import Image from "next/image";

const OurProjects = () => {
    return (
        <div className="container-fluid projects bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-primary">Our Projects</h4>
                            <h1 className="display-4 mb-4">How to work Our Electricity Projects</h1>
                            <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fugiat quae nihil obcaecati,</p>
                            <ul className="nav">
                                <li className="nav-item bg-white mb-4 w-100">
                                    <a className="d-flex align-items-center h4 mb-0 p-3 active" data-bs-toggle="pill" href="#ProjectsTab-1">
                                        <div className="projects-icon btn-md-square bg-primary text-white me-3"><span className="fas fa-bolt small"></span></div><span>Power Path Unveiling Our process</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-white mb-4 w-100">
                                    <a className="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-2">
                                        <div className="projects-icon btn-md-square bg-primary text-white me-3"><span className="fas fa-charging-station small"></span></div><span>Electro Flow Decoding Our method</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-white mb-4 w-100">
                                    <a className="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-3">
                                        <div className="projects-icon btn-md-square bg-primary text-white me-3"><span className="fas fa-broadcast-tower small"></span></div><span>Energetic Engine Behind Scenes</span>
                                    </a>
                                </li>
                                <li className="nav-item bg-white mb-4 w-100">
                                    <a className="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-4">
                                        <div className="projects-icon btn-md-square bg-primary text-white me-3"><span className="fas fa-bolt small"></span></div><span>Watt Works Discover Operations</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="tab-content">
                            <div id="ProjectsTab-1" className="tab-pane fade show p-0 active">
                                <div className="projects-item">
                                    <Image src="/img/industrial-1.jpg" className="img-fluid w-100" alt=""/>
                                    <div className="projects-content bg-white p-4">
                                        <h4 className="mb-3">Power Path Unveiling Our process</h4>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-2" className="tab-pane fade show p-0">
                                <div className="projects-item">
                                    <Image src="/img/industrial-2.jpg" className="img-fluid w-100" alt=""/>
                                    <div className="projects-content bg-white p-4">
                                        <h4 className="mb-3">Electro Flow Decoding Our method</h4>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-3" className="tab-pane fade show p-0">
                                <div className="projects-item">
                                    <Image src="/img/commercial-1.jpg" className="img-fluid w-100" alt=""/>
                                    <div className="projects-content bg-white p-4">
                                        <h4 className="mb-3">Energetic Engine Behind Scenes</h4>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-4" className="tab-pane fade show p-0">
                                <div className="projects-item">
                                    <Image src="/img/commercial-2.jpg" className="img-fluid w-100" alt=""/>
                                    <div className="projects-content bg-white p-4">
                                        <h4 className="mb-4">Watt Works Discover Operations</h4>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
                                        </p>
                                        <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
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

export default OurProjects;
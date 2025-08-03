import React from 'react';
import Image from "next/image";

const Service = () => {
    return (
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Our Services</h4>
                    <h1 className="display-4 mb-4">The Best Service For You</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt provident ab voluptates rerum eaque eum magni autem atque in minus laboriosam corrupti deleniti voluptatibus rem reiciendis modi veniam animi?
                    </p>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-3 wow fadeInLeft" data-wow-delay="0.2s">
                        <ul className="nav">
                            <li className="nav-item me-lg-0 mb-4">
                                <a className="py-3 px-5 active" data-bs-toggle="pill" href="#ServiceTab-1">
                                    <span>Commercial</span>
                                </a>
                            </li>
                            <li className="nav-item me-lg-0 mb-4">
                                <a className="py-3 px-5" data-bs-toggle="pill" href="#ServiceTab-2">
                                    <span>Residential</span>
                                </a>
                            </li>
                            <li className="nav-item me-lg-0 mb-4 mb-lg-0">
                                <a className="py-3 px-5" data-bs-toggle="pill" href="#ServiceTab-3">
                                    <span>Industrial</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="tab-content">
                            <div id="ServiceTab-1" className="tab-pane fade show p-0 active">
                                <div className="service-carousel owl-carousel">
                                    <div className="service-item">
                                        <Image src="/img/commercial-1.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Brite Spark Services</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/commercial-2.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Energy Ease Packages</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/commercial-3.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Electra Care Packages</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="ServiceTab-2" className="tab-pane fade show p-0">
                                <div className="service-carousel owl-carousel">
                                    <div className="service-item">
                                        <Image src="/img/residential-1.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Electrical Services</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/residential-2.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Security Systems</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/residential-3.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Air Conditioner</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="ServiceTab-3" className="tab-pane fade show p-0">
                                <div className="service-carousel owl-carousel">
                                    <div className="service-item">
                                        <Image src="/img/industrial-1.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Factory Manufacture</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/industrial-2.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">General Electrical</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
                                            </p>
                                            <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <Image src="/img/industrial-3.jpg" className="img-fluid w-100" alt="" />
                                        <div className="border border-top-0 p-4">
                                            <h4 className="mb-3">Electrical Planing</h4>
                                            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae ex. Id esse autem ratione vero cupiditate tempora recusandae est!
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
        </div>
    );
};

export default Service;
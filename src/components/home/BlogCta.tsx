import React from 'react';

const BlogCta = () => {
    return (
         <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Our Blog</h4>
                    <h1 className="display-4 mb-4">Electricity News & Updates</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt provident ab voluptates rerum eaque eum magni autem atque in minus laboriosam corrupti deleniti voluptatibus rem reiciendis modi veniam animi?
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/commercial-1.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-heading ms-4">
                                <a href="#" className="h4 mb-0 p-4">Electrifying Reads Explore Our Electricity</a>
                            </div>
                            <div className="blog-content bg-light p-4">
                                <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-0 small"><i className="fa fa-calendar me-2"></i> April 2,2025</p>
                                    <p className="mb-0 small"><i className="fa fa-tag me-2"></i> Electricity Corner</p>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!
                                </p>
                                <a className="btn btn-primary py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/commercial-2.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-heading ms-4">
                                <a href="#" className="h4 mb-0 p-4">Empowering Energy Dive into Our Electricity </a>
                            </div>
                            <div className="blog-content bg-light p-4">
                                <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-0 small"><i className="fa fa-calendar me-2"></i> April 2,2025</p>
                                    <p className="mb-0 small"><i className="fa fa-tag me-2"></i> Electricity Corner</p>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!
                                </p>
                                <a className="btn btn-primary py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/commercial-3.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-heading ms-4">
                                <a href="#" className="h4 mb-0 p-4">Electricity Explained: Bloggin Power of Tomorrow</a>
                            </div>
                            <div className="blog-content bg-light p-4">
                                <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-0 small"><i className="fa fa-calendar me-2"></i> April 2,2025</p>
                                    <p className="mb-0 small"><i className="fa fa-tag me-2"></i> Electricity Corner</p>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem distinctio tempora eum quam eligendi. Repudiandae voluptas voluptatibus quo itaque!
                                </p>
                                <a className="btn btn-primary py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default BlogCta;
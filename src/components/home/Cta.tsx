import React from 'react';

const Cta = () => {
    return (
        <div className="container-fluid banner py-5 wow zoomIn" data-wow-delay="0.2s">
            <div className="banner-design-1"></div>
            <div className="banner-design-2"></div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="">
                            <h4 className="text-white">Contact With Me</h4>
                            <h1 className="display-4 text-white mb-0">We provide professional electric services for our customer</h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-lg-end h-100">
                            <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#">EXPLORE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Cta;
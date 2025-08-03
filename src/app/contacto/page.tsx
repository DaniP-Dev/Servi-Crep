import React from "react";

const Contacto = () => {
  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div>
              <h4 className="text-primary">Contact Us</h4>
              <h1 className="display-4 mb-4">
                Illuminate Your Message Get in Contact
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia hic aspernatur unde magnam necessitatibus provident
                iusto maxime nobis esse eligendi.
              </p>
              <div className="d-flex align-items-center mb-4">
                <a className="btn btn-primary btn-md-square me-3" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-primary btn-md-square me-3" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-primary btn-md-square me-3" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-primary btn-md-square me-0" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-inline-flex bg-white w-100 p-4">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Address</h4>
                      <p className="mb-0">123 North tower New York, USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="d-inline-flex bg-white w-100 p-4">
                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-0">info@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="d-inline-flex bg-white w-100 p-4">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-0">(+012) 3456 7890 123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
                <a
                  className="text-primary fw-bold"
                  href="https://web.com/contact-form"
                >
                  Download Now
                </a>
                .
              </p>
              <form>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control border-0"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="project"
                        placeholder="Project"
                      />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "125px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheck"
                      />
                      <label className="form-check-label" htmlFor="flexCheck">
                        I agree with the site privacy policy
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="h-100 overflow-hidden">
              <iframe
                className="w-100"
                style={{ height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

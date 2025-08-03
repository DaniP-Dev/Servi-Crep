"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bgClass: "hero-bg-half-1",
      shapeClass: "hero-shape-1",
      subtitle: "Current Electricity Services",
      title: "Power for Seamless Electricity Solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
    {
      id: 2,
      bgClass: "hero-bg-half-2",
      shapeClass: "hero-shape-2",
      subtitle: "Current Electricity Services",
      title: "Experience the power of professionalism",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    },
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="header-carousel owl-carousel overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`header-carousel-item hero-section ${
            index === currentSlide ? "active" : ""
          }`}
          style={{
            display: index === currentSlide ? "block" : "none",
          }}
        >
          {/* Background Image */}
          <div className={slide.bgClass}></div>
          {/* Shape */}
          <div className={slide.shapeClass}></div>

          {/* Content */}
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">
                      {slide.subtitle}
                    </h4>
                    <h1 className="display-2 text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="mb-5 fs-5">
                      {slide.description}
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a
                        className="btn btn-light py-3 px-4 px-md-5 me-2"
                        href="#"
                      >
                        <i className="fas fa-play-circle me-2"></i> Watch Video
                      </a>
                      <a
                        className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="carousel-nav">
        <button
          className="btn btn-primary carousel-prev position-absolute"
          style={{
            bottom: "30px",
            left: "30px",
            width: "60px",
            height: "60px",
            borderRadius: "0",
            fontSize: "26px",
            zIndex: 10,
          }}
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="btn btn-primary carousel-next position-absolute"
          style={{
            bottom: "30px",
            right: "30px",
            width: "60px",
            height: "60px",
            borderRadius: "0",
            fontSize: "26px",
            zIndex: 10,
          }}
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Dots Indicator */}
      <div
        className="carousel-dots position-absolute d-flex justify-content-center"
        style={{
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`btn mx-2 ${
              index === currentSlide ? "btn-primary" : "btn-outline-light"
            }`}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              padding: "0",
              minWidth: "unset",
            }}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const heroTexts = {
  slides: [
    {
      id: 1,
      bgClass: "hero-bg-half-1",
      shapeClass: "hero-shape-1",
      subtitle: "Inspecciones acreditadas por ONAC (ISO/IEC 17020)",
      title: "COMPAÑIA SERVICREP S.A.S",
      description:
        "técnicas, independientes y precisas para verificar tanques, hermeticidad y sistemas en estaciones de combustibles líquidos.",
    },
  ],
  buttonVideo: {
    label: "Solicita Inspección",
    iconClass: "fas fa-play-circle me-2",
  },
  buttonLearn: {
    label: "Ver servicios",
  },
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTexts.slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroTexts.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroTexts.slides.length) % heroTexts.slides.length,
    );
  };

  return (
    <div className="header-carousel owl-carousel overflow-hidden">
      {heroTexts.slides.map((slide, index) => (
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
          <div className="carousel-caption align-items-start pt-3 pt-md-4">
            <div className="container h-100">
              <div className="row h-100 g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft h-100">
                  <div className="text-sm-center text-md-start d-flex flex-column h-100 py-4 py-md-5">
                    <div className="mb-auto">
                       <h1 className="display-5 fw-bold mb-4 lh-sm d-inline-block px-3 py-2 rounded-3">
                        {slide.title.split(" ").map((word, index) => (
                          <span
                            key={`${word}-${index}`}
                            className={
                              index % 2 === 0 ? "text-light" : "text-light"
                            }
                          >
                            {word}{" "}
                          </span>
                        ))}
                      </h1>
                      <h4 className="text-white text-uppercase fw-bold mb-4">
                        {slide.subtitle}
                      </h4>
                     
                    </div>

                    <div className="mt-auto">
                      <p
                        className="fs-5 text-white text-start me-auto"
                        style={{ maxWidth: "560px" }}
                      >
                        {slide.description}
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start shrink-0 ">
                        <a
                          className="btn btn-light py-3 px-4 px-md-5 me-2"
                          href={CONTACT_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={heroTexts.buttonVideo.iconClass}></i>{" "}
                          {heroTexts.buttonVideo.label}
                        </a>
                        <Link
                          className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                          href="/nuestros-servicios"
                        >
                          {heroTexts.buttonLearn.label}
                        </Link>
                      </div>
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
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
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
            top: "50%",
            right: "30px",
            transform: "translateY(-50%)",
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
        {heroTexts.slides.map((_, index) => (
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

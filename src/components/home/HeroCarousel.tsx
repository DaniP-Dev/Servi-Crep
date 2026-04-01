"use client";
import React, { useState, useEffect } from "react";

interface HeroCarouselProps {
  slidesCount: number;
}

export default function HeroCarousel({ slidesCount }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slidesCount <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <>
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
          aria-label="Diapositiva anterior"
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
          aria-label="Siguiente diapositiva"
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
        {Array.from({ length: slidesCount }).map((_, index) => (
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
            aria-label={`Ir a diapositiva ${index + 1}`}
          ></button>
        ))}
      </div>
    </>
  );
}

"use client";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden">
        <div className="d-flex min-vh-100" lc-helper="video-bg">
          <video
            style={{ zIndex: 1, objectFit: "cover", objectPosition: "50% 50%" }}
            className="position-absolute w-100 min-vh-100"
            autoPlay
            preload=""
            muted
            loop
            playsInline
          >
            {/* adjust object-position to tweak cropping on mobile */}
            <source
              src="https://cdn.livecanvas.com/media/nature/video.mp4"
              type="video/mp4"
            />
          </video>
          <div
            style={{ zIndex: 2 }}
            className="align-self-center text-center text-light col-md-8 offset-md-2"
          >
            <div className="lc-block mb-4">
              <div>
                <h1 className="display-1 fw-bolder">With Love and Respect</h1>
              </div>
            </div>

            <div className="lc-block">
              <div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus porttitor dui.
                </p>

                <p className="lead">
                  Sim in vestibulum metus pulvinar sit amet.
                </p>
              </div>
            </div>

            <div className="lc-block">
              <svg
                onClick={() => {
                  const section = document.querySelector('section');
                  if (section && section.nextElementSibling) {
                    (section.nextElementSibling as HTMLElement).scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                width="4em"
                height="4em"
                viewBox="0 0 16 16"
                lc-helper="svg-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{}}
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

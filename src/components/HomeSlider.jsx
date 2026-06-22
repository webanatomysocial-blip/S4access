"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import '../css/HomeSlider.css';
// import banner1 from '../assets/images/home-img/home-bgimg.jpg';
import banner2 from '../assets/images/home-img/banner-home/1.jpg';
import banner3 from '../assets/images/home-img/banner-home/2.jpg';
import banner4 from '../assets/images/home-img/banner-home/3.jpg';
import banner5 from '../assets/images/home-img/banner-home/4.png'
import mainlogo from "../assets/images/Mainlogo.png";

import Link from "next/link";

// SmoothLink component for smooth scrolling
const SmoothLink = ({ to, className, children }) => (
  <Link href={to}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    {children}
  </Link>
);

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      textImg: mainlogo,
      image: banner5,
      text: 'Leading SAP Access Management Specialist',
      link: null,
    },
    {
      textImg: null,
      image: banner2,
      text: 'S/4 Access – Get it right from the beginning !',
      link: '/services/sap-s4-access-implementation',
    },
    {
      textImg: null,
      image: banner3,
      text: 'What is the current status of your SAP Access Management?',
      link: '/services/sap-access-management-review',
    },
    {
      textImg: null,
      image: banner4,
      text: 'We are not just hiring. We are building a team - join the journey.',
      link: '/careers',
      
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Slide changes every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <section className="carousel-section only-windows">
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <Image src={slide.image} alt={`Slide ${index + 1}`} style={slides.objectPosition} />
              <div className="slide-content">
                {slide.textImg && <Image src={slide.textImg} alt="Slide logo" />}
                {index === 0 ? <h1>{slide.text}</h1> : <p>{slide.text}</p>}
                {slide.link && (
                  <Link href={slide.link} className="slide-button">
                    <span>Learn More</span>
                    <span>
                      <i className="bi bi-arrow-up"></i>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-pagination" role="tablist" aria-label="Carousel navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
              role="tab"
              aria-selected={currentSlide === index}
              aria-label={`Go to slide ${index + 1}`}
              title={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <SmoothLink to="#go-down-section" className="go-down-arrow">
        <svg
          id="fi_7242819"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m13.766 289.234a47 47 0 0 1 66.468-66.468l175.766 175.766 175.766-175.766a47 47 0 0 1 66.468 66.468l-209 209a47 47 0 0 1 -66.468 0zm209 0a47 47 0 0 0 66.468 0l209-209a47 47 0 0 0 -66.468-66.468l-175.766 175.766-175.766-175.766a47 47 0 0 0 -66.468 66.468z"></path>
        </svg>
      </SmoothLink>
    </section>
  );
};

export default HomeSlider;
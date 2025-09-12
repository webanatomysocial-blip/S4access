import React, { useRef } from 'react';
import '../css/HomeSlidersMobile.css';
import banner1 from '../assets/images/home-img/home-bgimg.jpg';
import banner2 from '../assets/images/home-img/banner-home/1.jpg';
import banner3 from '../assets/images/home-img/banner-home/2.jpg';
import banner4 from '../assets/images/home-img/banner-home/3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import mainlogo from "../assets/images/Mainlogo.png";

const slideData = [
    {
      textImg: mainlogo,
      image: banner1,
      text: 'Leading SAP Access Management Specialist',
      link: null, // No link for the first slide
    },
    {
      textImg: null,
      image: banner2,
      text: 'S/4 Access – Get it right from the beginning !',
      link: '/sap-s4-access-implementation', // Unique link for slide 2
    },
    {
      textImg: null,
      image: banner3,
      text: 'What is the current status of your SAP Access Management?',
      link: '/sap-access-management-review', // Unique link for slide 3
    },
    {
      textImg: null,
      image: banner4,
      text: 'We are not just hiring. We are building a team - join the journey.',
      link: '/careers', // Unique link for slide 4
    },
  ];

const HomeSlidersMobile = () => {
  const customPaginationRef = useRef(null);

  return (
    <section className="hsm-slider-section only-mobile">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={32}
        centeredSlides={true}
        pagination={{ 
          el: customPaginationRef.current,
          clickable: true,
          bulletClass: 'hsm-custom-bullet',
          bulletActiveClass: 'hsm-custom-bullet-active'
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: false,
          },
          800: {
            slidesPerView: 1.5,
            spaceBetween: 32,
            centeredSlides: true,
          },
        }}
        className="hsm-swiper-container"
      >
        {slideData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="hsm-slider-card"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: '#1a1a1a', // Fallback color
                minHeight: '350px', // Ensure visibility
              }}
              onError={() => console.error(`Image failed to load for slide ${idx}: ${slide.image}`)}
            >
              <div className="hsm-slider-content-overlay">
                {slide.textImg && <img src={slide.textImg} alt="Slide logo" className='mobile-logo-s4-car' />}
                <p className="sub-heading-text-white">{slide.text}</p>
                {slide.link && (
                  <Link to={slide.link} className="button-green">Learn More</Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
         {/* Custom pagination div placed below the Swiper */}
      <div ref={customPaginationRef} className="hsm-custom-pagination"></div>
      </Swiper>
     
    </section>
  );
};

export default HomeSlidersMobile;
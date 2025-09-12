import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Testimonial.css";
import testimonialImg from "../assets/images/Careeres-img/testimmonial-1.jpg";
import team1 from '../assets/images/About-img/our-team/Bozhena.jpg';
import team2 from '../assets/images/About-img/our-team/Julius.jpg';
import team3 from '../assets/images/About-img/our-team/Palavi.jpg';
import quoteImg from "../assets/images/Careeres-img/Union.png";

const testimonials = [
  {
    text: "I moved to Finland and started my journey at s4access as an SAP Security Consultant. Since then, it has been an amazing journey - I work on global projects, learn new things every day, and feel truly supported. The team here is incredible, people always ready to help. I enjoy the flexibility, the balance between work and life, and the opportunity to grow in many directions. It’s the most comfortable work environment I’ve ever had.",
    name: "Bozhena",
    role: "Employee",
    Images: team1
  },
  {
    text: "Joining the company as a junior employee while studying and being a new parent could have been overwhelming – but here, it hasn’t been. The flexibility I’ve been given is exceptional.I'm encouraged to grow professionally, and doing my thesis for the company is just one example of how my development is supported.It means a lot that my manager is aware of my daily work and actively helps me progress.I feel valued not just as an employee, but as a whole person.The team culture isalso incredibly supportive – I never feel like I’m going through it alone",
    name: "Raoul",
    role: "Employee",
    Images: testimonialImg
  },
  {
    text: "Starting at s4access as an SAP Security Consultant has been a highlight of my career. Working on international projects fuels my growth, and the team’s encouragement makes every challenge enjoyable. The flexibility and supportive culture here make it a truly unique workplace.",
    name: "Julius",
    role: "Employee",
    Images: team2
  },
  {
    text: "Joining at a senior level at S4access and now stepping into a new architect role has been an exciting journey. From the very beginning, I’ve been struck by the scale and ambition of the projects we deliver—these are high-impact initiatives that truly challenge and inspire. One of the most remarkable aspects of this company is its adaptability to individual needs. Whether I’m diving into high-pressure, fast-paced projects or adjusting my workload to accommodate personal commitments, I’ve found the flexibility to strike a healthy balance between professional growth and personal well-being. Leadership here is deeply committed to development. I’ve received thoughtful guidance on how to evolve in my role and make the most of my contributions. I also feel genuinely supported by my manager, who understands my work and consistently empowers me to succeed.",
    name: "Pallavi",
    role: "Employee",
    Images: team3
  }
];

const TestimonialCarousel = () => {
  const [expanded, setExpanded] = useState({});
  const swiperRef = useRef(null);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const TextWithReadMore = ({ text, index }) => {
    const isLongText = text.length > 200;

    return (
      <div className="testimonialcarousel-text-container">
        <p
          className={`testimonialcarousel-text ${!expanded[index] && isLongText ? 'truncated' : ''}`}
        >
          {text}
        </p>
        {isLongText && (
          <a
            className="read-more-btn-blue"
            onClick={() => toggleReadMore(index)}
          >
            {expanded[index] ? 'Read Less' : 'Read More'}
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="testimonialcarousel-section">
      <p className="big-heading-text-black">Employee testimonials</p>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={32}
        loop={true}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: false
          },
          800: {
            slidesPerView: 1.5,
            spaceBetween: 32,
            centeredSlides: false  // Changed to false for left alignment
          }
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonialcarousel-card">
              <div className="testimonialcarousel-img-container">
                <img src={testimonial.Images} alt="Employee" className="testimonialcarousel-img" />
              </div>
              <div className="testimonialcarousel-content">
                <img src={quoteImg} alt="Quote" className="testimonialcarousel-quote-img" />
                <TextWithReadMore text={testimonial.text} index={idx} />
                <div className="testimonialcarousel-meta">
                  <span className="testimonialcarousel-name">{testimonial.name}</span>
                  <span className="testimonialcarousel-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons outside Swiper */}
      <div className="testimonialcarousel-nav">
        <div
          className="custom-swiper-button-prev"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft />
        </div>
        <div
          className="custom-swiper-button-next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
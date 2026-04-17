import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const successStories = [
  {
    title: "SAP Authorization Concept Owner",
    description: "For several years, we've successfully managed SAP access for a leading steel manufacturer—streamlining processes, ensuring audit compliance, and optimizing both security and license usage.",
    link: "/customer-success/sap-authorisation-concept-owner"
  },
  {
    title: "S/4 Access Management Review",
    description: "An external audit revealed critical SAP S/4 access issues for a client. s4access conducted a thorough review, delivering a prioritized roadmap to enhance governance and reduce risks.",
    link: "/customer-success/s4-access-management-review"
  },
  {
    title: "S/4 Transition Analysis",
    description: "For a material handling solutions company, we analyzed their SAP S/4 upgrade needs. Our work delivered a clear resource plan, preventing disruptions and optimizing the transition process.",
    link: "/customer-success/s4-transition-analysis"
  },
  {
    title: "S/4 HANA/Fiori Transformation",
    description: "We transformed SAP S/4 access and Fiori UX for a global home furnishing brand after a failed go-live. Our reengineered role design and GRC tools ensured a successful Fiori-first rollout.",
    link: "/customer-success/s4-hana-fiori-transformation"
  },
  {
    title: "Stabilising SAP Access at Scale During an S/4HANA Transformation",
    description: "For a global health and hygiene leader, we redesigned their SAP authorization concept during an S/4HANA transformation. Our scalable model reduced complexity and SoD conflicts for over 4,000 users.",
    link: "/customer-success/stabilising-sap-access-at-scale"
  },
  {
    title: "Helsinki SAM Service",
    description: "For a large Scandinavian city, we implemented a structured SAP access management model, improving service predictability and ensuring zero audit observations during the first two years.",
    link: "/customer-success/helsinki-sam-service"
  },
];

const CustomerSuccessCards = () => (
  <section className="Customer-success-stories-section">
    <div>
      <p className="big-heading-text-black">Customer Success Stories</p>
    </div>
    <div className="coustomer-success-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="success-stories-swiper"
      >
        {successStories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="innercoustomer-success-container-left h-100">
              <div className="innercoustomer-heading-cont">
                <p className="sub-heading-text-white">{story.title}</p>
                <p className="small-text-white">{story.description}</p>
              </div>
              <div>
                <Link to={story.link} className="read-more-btn">
                  Read More <i className="bi bi-arrow-right arrow-icon"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);


export default CustomerSuccessCards;
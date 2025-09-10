import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import case1img from "../assets/images/About-img/Top-banner-img.jpg";
import FAQTemplate from '../components/FAQTemplate.jsx';
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
  FaUserTie,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import image from "../assets/images/About-img/Access.png";

export default function SAPAuthorisationConceptOwnerService() {



  const faqs = [
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 1 goes here. You can customize this content for each page.'
    },
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 2 goes here. You can customize this content for each page.'
    },
    {
      question: 'Lorem ipsum over two decades of experience with passion for adopting latest technology',
      answer: 'Answer for FAQ 3 goes here. You can customize this content for each page.'
    }
  ];






  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            Authorisation Concept Owner
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita repellendus, earum quia nobis hic, nesciunt nisi omnis iste ea dolores quas voluptates necessitatibus distinctio recusandae laboriosam fugiat assumenda in.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <img src={image} alt="cloud compliance" />
          </div>
        </div>
      </section>

      <section className="service-journey-container ">
        <div className="service-journey-content ">
          <div className="journey-card ">
            <div className="card-header">
              <h3 className="big-heading-text-white">The SAP Authorization Concept Owner: A Role Under Pressure</h3>
              <div className="card-sub-content">
                <p className="text-white">
                  In every SAP organization, the role of the SAP Authorization Concept Owner is critical for ensuring secure and compliant access management. However, filling this position internally has become increasingly difficult due to several converging factors.
                </p>
                <p className="text-white">
                  Modern SAP landscapes are more complex than ever, requiring deep technical expertise to manage effectively. At the same time, organizations face heightened security and compliance demands, driven by evolving regulations and increased risk exposure. Compounding these challenges is a global shortage of experienced SAP security professionals, making it harder to recruit and retain the right talent.
                </p>
                <p className="text-white">
                  As a result, many organizations are actively seeking sustainable solutions—such as partnering with specialized providers or outsourcing the role—to ensure continuity, gain access to specialist skills, and manage costs effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container">
        <div className="service-solution-content  ">
          <div className="solution-grid">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">SAP Authorization Concept Owner Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  We offer a powerful solution to address this critical role through a scalable, multi-skilled outsourcing model, delivered at a predictable fixed monthly fee. The service is provided by experienced, named consultants, supported by the full breadth of our company’s expertise, proprietary tools, and proven methodologies—including s4access access management best practices.
                </p>
                <p className="text-white">
                  Organizations consistently recognize the value we deliver: access to rare SAP expertise, enhanced operational stability, and measurable cost savings. This model not only fills a vital capability gap but also enables long-term continuity and compliance in increasingly complex SAP environments.
                </p>
              </div>
            </div>
            <div className="solution-intro-card-2 only-mobile ">
              <h2 className="big-heading-text-white">SAP Authorization Concept Owner Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  We offer a powerful solution to address this critical role through a scalable, multi-skilled outsourcing model, delivered at a predictable fixed monthly fee. The service is provided by experienced, named consultants, supported by the full breadth of our company’s expertise, proprietary tools, and proven methodologies—including s4access access management best practices.
                </p>
                <p className="text-white">
                  Organizations consistently recognize the value we deliver: access to rare SAP expertise, enhanced operational stability, and measurable cost savings. This model not only fills a vital capability gap but also enables long-term continuity and compliance in increasingly complex SAP environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="strength-showcase">
    <div className="strength-left">
      <h2 className="big-heading-text-white">Case Studies</h2>
      <p className="text-white">
        Discover how our SAP Authorization Concept Owner Service transformed user management for a steel manufacturer, enhancing security, compliance, and efficiency since 2019.
      </p>
    </div>

    {/* Case Study 1 - Project Detail */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">Steel Manufacturer</h3>
        <h4 className="text-black">Streamlined User Management</h4>
        <p className="text-black">
          Implemented structured passive user removal and optimized SAP license usage for consistent, secure access management.
        </p>
        <div className="image-container-showcase">
          <img src={case1img} alt="case study" />
        </div>
      </div>
    </div>

    {/* Case Study 2 - Business Outcome */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">Steel Manufacturer</h3>
        <h4 className="text-black">30% Reduction in License Costs</h4>
        <p className="text-black">
          Reduced SAP_ALL profile usage and enhanced audit compliance, improving system security and cost efficiency.
        </p>
        <div className="image-container-showcase">
          <img src={case1img} alt="case study" />
        </div>
      </div>
    </div>
  </section>

      <section className="strength-bottom">
        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black">30,000+</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">Access risk checks performed</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black">200M+</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">User access transactions secured</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3 className="big-heading-text-black">4.8</h3>
            </div>
            <ul className="stat-sub">
              <li className="text-black">Average client satisfaction rating</li>
            </ul>
          </div>
        </div>
      </section>












      {/* FAQs section start */}
      <FAQTemplate title="FAQs" faqs={faqs} />
      {/* FAQs section end */}

      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="big-heading-text-white">Ready to Transform Your SAP Access Management?</h2>
              <p className="text-white">
                Get expert guidance and solutions tailored to your organization's needs
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="button-green">
                Contact Us
              </Link>
              <Link to="/customer-success" className="border-button">
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

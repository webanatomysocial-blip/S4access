import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
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

export default function SAPAccessReview() {



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
            SAP Access Management review
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

      <section className="service-journey-container">
        <div className="service-journey-content">
          <div className="journey-card">
            <div className="card-header">
              <h3 className="big-heading-text-white">From Uncertainty to Clarity: Mapping Your SAP Access Management Journey</h3>
              <div className="card-sub-content">
                <p className="text-white">
                  Many organizations operate SAP access management without a clear strategic plan. While systems may continue to function over time, this approach often leads to recurring challenges such as weakened security, audit findings, delays in implementing necessary changes, and concerns around resourcing and skill availability. As these issues accumulate, management typically begins to ask critical questions:
                </p>
              </div>
            </div>
            <div className="questions-grid">
              <div className="question-item">
                <span className="question-number">01</span>
                <p className="small-text-white">How exposed is our system, and what is our current level of Segregation of Duties (SoD)?</p>
              </div>
              <div className="question-item">
                <span className="question-number">02</span>
                <p className="small-text-white">Is our operating model truly optimized for an SAP organization of our size?</p>
              </div>
              <div className="question-item">
                <span className="question-number">03</span>
                <p className="small-text-white">How can we maximize the value of our budget—and are there opportunities to reduce costs?</p>
              </div>
              <div className="question-item">
                <span className="question-number">04</span>
                <p className="small-text-white">How should we structure our access management, and where can we find the necessary expertise?</p>
              </div>
              <div className="question-item">
                <span className="question-number">05</span>
                <p>What are the next steps we should take?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container">
        <div className="service-solution-content">
          <div className="solution-grid">
            <div className="solution-intro-card">
              <h2 className="big-heading-text-white">SAP Access Management Improvement Service</h2>
              <div className="card-sub-content">
                <p className="small-text-white">Our service provides a comprehensive understanding of the organization's SAP Access Management landscape and identifies improvement opportunities by analyzing the current state
                  against s4access best practice standards.</p>
              </div>
            </div>
            <div className="solution-cards">
              <div className="solution-card">
                <div className="card-icon">
                  <FaUserTie className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Governance</h3>
                <p>Organizational analysis of responsibilities and skills around related tasks</p>
              </div>
              <div className="solution-card">
                <div className="card-icon">
                  <FaCogs className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Processes</h3>
                <p className="small-text-white"> Analysis of user administration and role management processes</p>
              </div>
              <div className="solution-card">
                <div className="card-icon">
                  <FaShieldAlt className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Technical</h3>
                <p className="small-text-white">Snapshot analysis of technical feasibility of SAP roles and current security level</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="service-cards-container">
        <h2 className="big-heading-text-black">Lorem ipsum dolor </h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum.</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem ipsum dolor</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae numquam quasi est libero eaque!
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem ipsum dolor</h3>
              <p className="text-black">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit cumque earum. Voluptatum, cumque! Autem?
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="sub-heading-text-black ">Lorem, ipsum dolor.</h3>
              <p className="text-black">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus vitae eos non recusandae inventore culpa.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="strength-showcase only-windows" id="strength-show">
        <div className="strength-left">
          <h2 className="big-heading-text-white">Case Studies</h2>
          <p className="text-white">
            Explore how organizations improved compliance, strengthened security, and
            reduced risks with SAP Access Management Reviews. These studies showcase
            real-world results, best practices, and measurable business impact.
          </p>
        </div>

        {/* Case Study 1 - Testimonial */}
        <div className="strength-right">
          <div className="stats-card">
            <p className="small-text-black">⭐ 4.8 (Rating)</p>
            <p className="text-black">
              The SAP Access Management review identified critical risks and gave us a
              clear roadmap to strengthen controls without slowing down operations.
            </p>
            <h3 className="sub-heading-text-black">Mark R.</h3>
            <p className="text-black">CIO, FinCore Solutions</p>

            <div className="image-container-showcase">
              {/* <img src={image} alt="testimonial" /> */}
            </div>
          </div>
        </div>

        {/* Case Study 2 - Business Outcome */}
        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">Global Retailer</h3>
            <h4 className="text-black">40% reduction in access risks</h4>
            <p className="text-black">
              Role redesign and SoD (Segregation of Duties) checks helped the client
              cut down access violations while improving user productivity.
            </p>
            <div className="image-container-showcase">
              {/* <img src={image} alt="case study" /> */}
            </div>
          </div>
        </div>


      </section>

      <section className="strength-bottom  only-windows">
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

      <section className="service-cta-section only-windows">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Ready to Transform Your SAP Access Management?</h2>
              <p className="cta-description">
                Get expert guidance and solutions tailored to your organization's needs
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="button-green">
                Contact Us
              </Link>
              {/* <Link to="/customer-success" className="border-button">
                Case Studies
              </Link> */}
              <a className="border-button" href="#strength-show">Case Studies</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

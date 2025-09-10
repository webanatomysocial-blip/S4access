import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import case1img from "../assets/images/About-img/Top-banner-img.jpg"

import image from "../assets/images/About-img/Access.png";

export default function SAPAuthorisationRedesign() {



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
            SAP S/4 Access Implementation
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
          <div className="journey-card left-right-container-inner-service">


           
              <div className="card-sub-content card-sub-content-only-some">
                <h3 className="sub-big-heading-text-white">
                  Modernizing SAP Access Management During S/4 Transformation
                </h3>
                <p className="text-white">
                  The transition to SAP S/4 presents a valuable opportunity to modernize your SAP access design. However, the complexity of the environment and heightened security requirements make this task more challenging than ever. <br /><br />

                   In many cases, access management is underplanned and underbudgeted—especially when relying on a single large system integrator. This often results in costly rework during implementation and ongoing maintenance. A common issue is the lack of deep expertise and strategic focus in this area. <br /><br />

                    Recognizing these challenges, a growing number of organizations are choosing to carve out SAP access management and partner with specialist firms to ensure it is handled with the attention and expertise it demands.
                </p>
             
              </div>
           


            <div className="card-sub-content card-sub-content-only-some">
              <h3 className="sub-big-heading-text-white">
                From Planning to Execution – SAP S/4 Access Done Right!
              </h3>
              
              <p className="text-white">
                We’ve supported numerous organizations in designing and successfully implementing their complete SAP S/4HANA security roadmap—on time and within budget. We believe there’s no one-size-fits-all solution, just honest, focused work.
              </p>
              <p className="text-white">
                Success comes from having a detailed plan, the right level of deep expertise, and fit-for-purpose tools. When these elements are in place from the start, organizations can achieve sustainable results, avoid costly rework, and ensure a smooth implementation and balanced maintenance phase.
              </p>
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

     <section className="strength-showcase">
    <div className="strength-left">
      <h2 className="big-heading-text-white">Case Studies</h2>
      <p className="text-white">
        Explore how our S/4 HANA/Fiori Digital Transformation revitalized SAP access and user experience for a global home furnishing brand, ensuring a successful rollout.
      </p>
    </div>

    {/* Case Study 1 - Project Detail */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">Global Home Furnishing</h3>
        <h4 className="text-black">Reengineered Role Design</h4>
        <p className="text-black">
          Revamped SAP S/4 role design and implemented a user access tool with GRC and SOD checks for seamless provisioning.
        </p>
        <div className="image-container-showcase">
          <img src={case1img} alt="case study" />
        </div>
      </div>
    </div>

    {/* Case Study 2 - Business Outcome */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">Global Home Furnishing</h3>
        <h4 className="text-black">100% Fiori Adoption</h4>
        <p className="text-black">
          Achieved successful go-live and full transition from SAP GUI to Fiori, boosting user satisfaction and project success.
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

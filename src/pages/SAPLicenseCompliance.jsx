import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';

import image from "../assets/images/About-img/Access.png";

export default function SAPLicenseCompliance() {

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
            SAP License optimisation
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

      <section className="service-solution-container-not">
        <div className="service-solution-content">
          <div className="solution-grid ">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">Navigating SAP Licensing in the S/4 Era</h2>

              <div className="card-sub-content">
                <p className="text-white">
                  SAP licensing has become a growing area of focus due to the introduction of the SAP S/4HANA strategy and its various deployment models.
                  With new licensing frameworks now in place, organizations must carefully evaluate their options—not only during the purchasing phase but also throughout implementation and ongoing maintenance.
                </p>
                <p className="text-white">
                  Recent insights highlight the importance of having a clear understanding of contractual terms, as licensing implications extend well beyond initial acquisition.
                  This shift presents a new and complex challenge for SAP customers, requiring specialized knowledge and dedicated tools to manage licensing effectively and avoid unexpected costs or compliance risks.
                </p>
              </div>

              <h2 className="big-heading-text-white">S4 Access SAP License Compliance & Optimization Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Over the years, s4access has helped numerous organizations establish effective practices to improve their SAP license compliance.
                  Our proprietary license usage analysis service, part of the s4access platform, is available either as a standalone offering or integrated into our ongoing maintenance services—providing customers with optimal control and visibility over their licensing landscape.
                </p>
                <p className="text-white">
                  The platform includes specialized tools that simulate the cost impact of role designs and user-level changes, even down to individual ticket-level adjustments.
                  This enables informed decision-making without the need for additional costly license management software or services.
                </p>
              </div>
            </div>
            
            <div className="solution-intro-card-2 only-mobile">
              <h2 className="big-heading-text-white">Navigating SAP Licensing in the S/4 Era</h2>

              <div className="card-sub-content">
                <p className="text-white">
                  SAP licensing has become a growing area of focus due to the introduction of the SAP S/4HANA strategy and its various deployment models.
                  With new licensing frameworks now in place, organizations must carefully evaluate their options—not only during the purchasing phase but also throughout implementation and ongoing maintenance.
                </p>
                <p className="text-white">
                  Recent insights highlight the importance of having a clear understanding of contractual terms, as licensing implications extend well beyond initial acquisition.
                  This shift presents a new and complex challenge for SAP customers, requiring specialized knowledge and dedicated tools to manage licensing effectively and avoid unexpected costs or compliance risks.
                </p>
              </div>

              <h2 className="big-heading-text-white">S4 Access SAP License Compliance & Optimization Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Over the years, s4access has helped numerous organizations establish effective practices to improve their SAP license compliance.
                  Our proprietary license usage analysis service, part of the s4access platform, is available either as a standalone offering or integrated into our ongoing maintenance services—providing customers with optimal control and visibility over their licensing landscape.
                </p>
                <p className="text-white">
                  The platform includes specialized tools that simulate the cost impact of role designs and user-level changes, even down to individual ticket-level adjustments.
                  This enables informed decision-making without the need for additional costly license management software or services.
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

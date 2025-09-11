import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';

import image from "../assets/images/inner-services-images/sap-license-optimisation-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";


export default function SAPLicenseCompliance() {

 const faqs = [
    {
      question: 'Why is SAP License Optimization important?',
      answer: 'Without proper optimization, companies often overpay for unused licenses or under-license their systems, exposing them to compliance risks and unexpected audit penalties. Optimization ensures cost-efficiency, prevents compliance issues, and provides better visibility into license consumption.'
    },
    {
      question: 'What does your SAP License Optimization service include?',
      answer: 'We perform a comprehensive analysis of your current license usage, assess user activities, identify unused or underused licenses, provide recommendations for reclassification or reallocation, and design a sustainable licensing strategy that aligns with your business goals and compliance requirements.'
    },
    {
      question: 'How does SAP License Optimization help with cost savings?',
      answer: 'By identifying and removing unused or underutilized licenses, reclassifying user types based on actual system usage, and right-sizing the licensing model, we help reduce licensing costs—often by 20–40%—while ensuring compliance with SAP’s licensing terms.'
    },
    {
      question: 'How often should SAP License Optimization be performed?',
      answer: 'We recommend conducting license optimization assessments at least annually or after major system changes (e.g., business process changes, user role updates, system upgrades, or mergers) to maintain an efficient and compliant licensing posture.'
    },
    {
      question: 'Can your service help with preparing for SAP license audits?',
      answer: 'Yes, our service provides detailed usage reports, documented evidence of license assignment logic, and a clear strategy for optimization, which are critical to demonstrating compliance and mitigating risks during SAP license audits.'
    },
    {
      question: 'Is the SAP License Optimization service industry-specific?',
      answer: 'Our service is flexible and designed to cater to all industries. Whether in manufacturing, healthcare, finance, or energy, we adapt the licensing strategy based on your specific user roles, industry regulations, and SAP usage patterns.'
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
            We analyse and optimise your SAP license usage, helping you reduce costs, eliminate unused licenses, and stay fully compliant with licensing agreements.
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
            <div className="solution-intro-card left-right-container-inner-service ">


              <div className="card-sub-content card-sub-content-only-some">
                <h2 className="sub-big-heading-text-white">Navigating SAP Licensing in the S/4 Era</h2>
                <p className="text-white">
                  SAP licensing has become a growing area of focus due to the introduction of the SAP S/4HANA strategy and its various deployment models.
                  With new licensing frameworks now in place, organizations must carefully evaluate their options—not only during the purchasing phase but also throughout implementation and ongoing maintenance.
                </p>
                <p className="text-white">
                  Recent insights highlight the importance of having a clear understanding of contractual terms, as licensing implications extend well beyond initial acquisition.
                  This shift presents a new and complex challenge for SAP customers, requiring specialized knowledge and dedicated tools to manage licensing effectively and avoid unexpected costs or compliance risks.
                </p>
              </div>


              <div className="card-sub-content card-sub-content-only-some">
                <h2 className="sub-big-heading-text-white">S4 Access SAP License Compliance & Optimization Service</h2>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugit magnam velit eum aliquam eos, cumque cum corrupti rem facilis soluta quae nisi, in atque repellat eius ipsa assumenda! Alias!
          </p>
        </div>

        {/* Case Study 1 - Project Detail */}
        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">Lorem, ipsum dolor.</h3>
            <h4 className="text-black">Lorem, ipsum dolor.</h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque fugit quam quidem eius corporis consequatur distinctio
            </p>
            <div className="image-container-showcase">
              <img src={case1img} alt="case study" />
            </div>
          </div>
        </div>

        {/* Case Study 2 - Business Outcome */}
        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">Lorem, ipsum dolor.</h3>
            <h4 className="text-black">Lorem, ipsum dolor.</h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque fugit quam quidem eius corporis consequatur distinctio
            </p>
            <div className="image-container-showcase">
              <img src={case2img} alt="case study" />
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

import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";
import banner from "../assets/images/inner-services-images/SAP-Access-managment-review-banner.jpg";

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


export default function SAPAccessReview() {



const faqs = [
    {
      question: 'What is included in your SAP Access Management service?',
      answer: 'Our SAP Access Management service includes user provisioning and de-provisioning, role design and optimization, Segregation of Duties (SoD) conflict management, access risk analysis, periodic access reviews, and integration with Identity Access Management (IAM) systems to ensure efficient and secure access control.'
    },
    {
      question: 'How does your SAP Access Management service improve security?',
      answer: 'We perform continuous risk evaluations and analyze over 50 million access risk values annually to identify and remediate vulnerabilities. Our proactive approach ensures that users have the right access levels, reducing the risk of unauthorized transactions and data breaches.'
    },
    {
      question: 'What industries do you serve with your SAP Access Management service?',
      answer: 'We serve a wide range of industries including manufacturing, finance, healthcare, retail, energy, and public sector organizations, helping them manage complex SAP landscapes while maintaining compliance and security standards.'
    },
    {
      question: 'How do you manage Segregation of Duties (SoD) conflicts in SAP Access?',
      answer: 'Our service includes automated SoD conflict detection using industry best practices and predefined rule sets. We evaluate and resolve potential conflicts during role design and periodic risk evaluations, ensuring compliance with regulations like SOX and GDPR.'
    },
    {
      question: 'Can you support SAP Access Management for global organizations?',
      answer: 'Yes. With a diverse team representing 5 nationalities and extensive experience managing multi-country SAP environments, we provide scalable and flexible Access Management solutions that address local compliance requirements and global security strategies.'
    },
    {
      question: 'How frequently should SAP Access be reviewed, and is this part of the service?',
      answer: 'We recommend regular access reviews—typically quarterly or biannually—and include periodic user access reviews as part of our service. This ensures that outdated or excessive access is removed in a timely manner, maintaining security and compliance.'
    },
    {
      question: 'Do you provide role design and optimization as part of the service?',
      answer: 'Absolutely. Our service includes designing and optimizing SAP roles to align with business needs and reduce access risk, leveraging best practices to simplify role structures, reduce SoD conflicts, and improve overall system performance.'
    },
    {
      question: 'How do you ensure compliance through your SAP Access Management service?',
      answer: 'We provide ongoing risk monitoring, detailed access reports, automated SoD conflict detection, and periodic audits. Our service helps companies meet regulatory standards such as SOX, GDPR, HIPAA, and industry-specific compliance requirements by enforcing secure access controls.'
    }
  ];





  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            SAP Access <br /> Management review
          </h2>
          <p className="text-white">
          We provide a clear review of your SAP access setup, identifying risks, compliance gaps, and improvement areas to strengthen security and ensure smooth operations.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <img src={banner} alt="cloud compliance" />
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



            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">SAP Access Management Improvement Service</h2>
              <div className="card-sub-content">
                <p className="text-white">Our service provides a comprehensive understanding of the organization's SAP Access Management landscape and identifies improvement opportunities by analyzing the current state
                  against s4access best practice standards.</p>
              </div>
            </div>



            {/* only mobile start  */}


            <div className="solution-intro-card only-mobile">
              <h2 className="big-heading-text-black">SAP Access Management Improvement Service</h2>
              <div className="card-sub-content">
                <p className="text-black">Our service provides a comprehensive understanding of the organization's SAP Access Management landscape and identifies improvement opportunities by analyzing the current state
                  against s4access best practice standards.</p>
              </div>
            </div>

            {/* only mobile end  */}

















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

       <section className="strength-showcase">
    <div className="strength-left">
      <h2 className="big-heading-text-white">Case Studies</h2>
      <p className="text-white">
        Learn how our S/4 Access Management Review identified critical issues and provided a clear roadmap to strengthen SAP access controls for a client.
      </p>
    </div>

    {/* Case Study 1 - Project Detail */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">SAP S/4 Implementation</h3>
        <h4 className="text-black">Comprehensive Access Review</h4>
        <p className="text-black">
          Assessed governance, processes, and technical configuration using the s4access SAP Access Analytics Platform to identify critical issues.
        </p>
        <div className="image-container-showcase">
          <img src={case1img} alt="case study" />
        </div>
      </div>
    </div>

    {/* Case Study 2 - Business Outcome */}
    <div className="strength-right">
      <div className="stats-card">
        <h3 className="sub-heading-text-black">SAP S/4 Implementation</h3>
        <h4 className="text-black">Reduced Compliance Risks</h4>
        <p className="text-black">
          Delivered a prioritized roadmap aligning with audit requirements, enhancing access management security and compliance.
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
              {/* <Link to="/customer-success" className="border-button">
                Case Studies
              </Link> */}
              <a className="border-button" href="/customer-success">Case Studies</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

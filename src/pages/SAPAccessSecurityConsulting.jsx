import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import { FaSearch, FaShieldAlt, FaUsers, FaCheckCircle } from "react-icons/fa";

import image from "../assets/images/inner-services-images/reorganisation-ma-projects-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";


export default function SAPAccessSecurityConsulting() {



const faqs = [
    {
      question: 'Why is SAP Access management critical during M&A or reorganisations?',
      answer: 'During M&A or reorganisations, there are major changes in business structure, processes, and systems, which often lead to access redundancies, SoD conflicts, and security risks. Proper access management ensures seamless integration, prevents compliance gaps, and protects sensitive data.'
    },
    {
      question: 'How do you handle SAP Access during mergers and acquisitions?',
      answer: 'We conduct a detailed assessment of both companies’ SAP environments, analyze existing roles and access, identify overlaps and conflicts, and implement a consolidated access strategy. This includes harmonizing roles, resolving SoD conflicts, and integrating identity management systems while maintaining operational continuity.'
    },
    {
      question: 'What is your approach to managing SAP Access in reorganisations or process changes?',
      answer: 'Our approach includes analyzing current access assignments against the reorganised business processes, identifying outdated or excessive roles, redesigning roles as needed, and aligning user access with new process flows, ensuring compliance and minimizing disruption.'
    },
    {
      question: 'How do you ensure compliance during these business changes?',
      answer: 'We apply automated risk analysis to identify and resolve SoD conflicts and excessive access before go-live. We ensure that the reorganised or merged SAP landscape meets regulatory standards such as SOX, GDPR, and industry-specific compliance by providing audit-ready documentation and clear risk mitigation.'
    },
    {
      question: 'Can you help simplify the role structure after a merger or reorganisation?',
      answer: 'Yes, as part of the service, we consolidate and rationalize the role landscape by removing redundant roles, harmonizing role definitions, and applying role templates. This reduces complexity, simplifies future maintenance, and lowers the risk of uncontrolled access growth.'
    },
    {
      question: 'What challenges do you solve in SAP Access during M&A projects?',
      answer: 'We address key challenges such as conflicting SoD requirements, duplicated user roles, inconsistent access policies, and lack of visibility into combined user access. Our solution ensures a secure, compliant, and efficient transition of SAP access environments.'
    }
  ];





  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            Reorganisation/ Process changes / M&A
          </h2>
          <p className="text-white">
            We support access management through organisational shifts, process changes, and mergers & acquisitions, ensuring compliance and security remain intact during transitions.
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
              <h2 className="big-heading-text-white">
                The Challenge of Change: Managing SAP Access in a Moving Business Landscape
              </h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Businesses are constantly evolving—through reorganizations, outsourcing, insourcing, process changes, and mergers or acquisitions. For organizations running SAP, these transitions are particularly challenging from an access management perspective.
                </p>
                <p className="text-white">
                  Business decisions are often made behind closed doors, leaving SAP teams with limited time to implement critical access changes. This reactive approach not only increases the risk of compliance and security issues, but also leads to unplanned costs due to rushed implementations, rework, and audit findings.
                </p>
                <p className="text-white">
                  Moreover, poorly managed access changes can result in availability risks, where key users are unable to perform essential tasks due to missing or incorrect access. This can disrupt operations, delay decision-making, and impact business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container">
        <div className="service-solution-content">
          <div className="solution-grid">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">
                Specialist Support for SAP Access Challenges During Business Change
              </h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Here's why we help organizations overcome these challenges:
                </p>
              </div>
            </div>

            <div className="solution-intro-card only-mobile">
              <h2 className="big-heading-text-black">
                Specialist Support for SAP Access Challenges During Business Change
              </h2>
              <div className="card-sub-content">
                <p className="text-black">
                  Here's why we help organizations overcome these challenges:
                </p>
              </div>
            </div>

            <div className="solution-cards">
              <div className="solution-card">
                <div className="card-icon">
                  <FaSearch className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Rapid Assessment & Planning</h3>
                <p className="small-text-white">
                  Tailored access management plan aligned with your business changes
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaShieldAlt className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Risk Mitigation Under Pressure</h3>
                <p className="small-text-white">
                  Mitigate risks during change or post-implementation recovery
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUsers className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Deep Expertise & Scalable Resources</h3>
                <p className="small-text-white">
                  Specialized knowledge with fast ramp-up of skilled resources
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaCheckCircle className="icon" />
                </div>
                <h3 className="sub-big-heading-text-white">Reliable Support</h3>
                <p className="small-text-white">
                  Reduce risks, control costs, and ensure smooth SAP access even during complex business changes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* Case Studies / Strength Showcase */}
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

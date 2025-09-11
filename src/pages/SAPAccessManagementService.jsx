import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';

import image from "../assets/images/inner-services-images/outsourced-access-management-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";

export default function SAPAccessManagementService() {



  const faqs = [
    {
      question: 'Why should a company consider outsourcing SAP Access Management?',
      answer: 'Outsourcing helps reduce internal workload, access management costs, and reliance on scarce internal expertise. It provides access to specialized SAP security knowledge, industry best practices, and advanced automation tools, ensuring secure, scalable, and compliant access management.'
    },
    {
      question: 'What services are included in your Outsourced SAP Access Management offering?',
      answer: 'We provide full lifecycle management of SAP access, including role design and maintenance, user provisioning and de-provisioning, SoD risk analysis, automated access reviews, compliance reporting, integration with IAM systems, and continuous monitoring of access risks.'
    },
    {
      question: 'How do you ensure ongoing compliance when managing SAP Access externally?',
      answer: 'We implement automated workflows for access provisioning and reviews, perform regular SoD conflict and risk analyses, maintain detailed audit trails, and provide transparent reporting. This ensures your SAP environment stays compliant with SOX, GDPR, and other regulatory requirements.'
    },
    {
      question: 'Is the outsourced service customizable to our specific business needs?',
      answer: 'Absolutely. We tailor our outsourced access management services to align with your organization’s industry requirements, internal policies, risk appetite, and SAP landscape complexity, providing a flexible solution that evolves with your business.'
    },
    {
      question: 'How does outsourcing improve access management efficiency?',
      answer: 'By leveraging automation and expert knowledge, we significantly reduce manual processes, accelerate user provisioning and de-provisioning, ensure accurate role assignments, and streamline compliance reporting—resulting in faster service delivery and reduced operational risk.'
    },
    {
      question: 'What industries or companies benefit most from outsourced SAP Access Management?',
      answer: 'Industries with strict regulatory requirements (finance, healthcare, manufacturing, energy, etc.), large organizations with complex SAP landscapes, companies undergoing frequent business changes (M&A, reorganizations), or those lacking in-house security expertise benefit greatly from our outsourced services.'
    }
  ];





  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            Outsourced Access Management

          </h2>
          <p className="text-white">
            We manage your SAP access end-to-end as a trusted partner, providing expertise, consistency, and compliance without the overhead of in-house administration.          </p>
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
              <h2 className="big-heading-text-white">Managing SAP Access: A New Reality</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  A few years ago, organizations could manage SAP access with modest budgets, limited expertise, and relatively simple processes. But today, the landscape has changed dramatically. Access management in SAP has become complex, time-consuming, and mission-critical for maintaining compliance and security.
                </p>
                <p className="text-white">
                  Traditional SAP AMS models no longer meet the demands of modern environments. As regulatory pressures grow and systems become more interconnected, organizations increasingly recognize that specialist providers are essential to keep pace.
                </p>
                <p className="text-white">
                  So how can your organization design effective processes, build critical competencies, and select the right technologies—all while staying within a reasonable budget? The answer lies in rethinking your approach and partnering with experts who can deliver scalable, compliant, and cost-efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container ">
        <div className="service-solution-content ">
          <div className="solution-grid ">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">SAM – Proven SAP Access Management Outsourcing Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  SAM (SAP Access Management) is our complete outsourcing service covering all key areas of SAP access management. Developed in close collaboration with our clients over more than a decade, SAM has been successfully implemented across a wide range of industries and organization sizes.
                </p>
                <p className="text-white">
                  SAM combines expert consulting, s4access access management best practices, and cloud-based analytics into a single, streamlined service—offered at a fixed monthly price. This proven model reduces complexity, ensures compliance, and actively manages access risks, Segregation of Duties (SoD), and SAP license compliance.
                </p>
                <p className="text-white">
                  With SAM, organizations gain a scalable, low-risk service that delivers consistent results and frees internal SAP teams to focus on other priorities.
                </p>
              </div>
            </div>

            <div className="solution-intro-card-2 only-mobile">
              <h2 className="big-heading-text-white">SAM – Proven SAP Access Management Outsourcing Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  SAM (SAP Access Management) is our complete outsourcing service covering all key areas of SAP access management. Developed in close collaboration with our clients over more than a decade, SAM has been successfully implemented across a wide range of industries and organization sizes.
                </p>
                <p className="text-white">
                  SAM combines expert consulting, s4access access management best practices, and cloud-based analytics into a single, streamlined service—offered at a fixed monthly price. This proven model reduces complexity, ensures compliance, and actively manages access risks, Segregation of Duties (SoD), and SAP license compliance.
                </p>
                <p className="text-white">
                  With SAM, organizations gain a scalable, low-risk service that delivers consistent results and frees internal SAP teams to focus on other priorities.
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

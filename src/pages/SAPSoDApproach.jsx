
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import banner from "../assets/images/inner-services-images/sod-Stratergy-approach-banner.jpg";
import { FaCogs, FaUserTie, FaShieldAlt, FaChartLine } from "react-icons/fa";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";


export default function SAPSoDApproach() {



  const faqs = [
    {
      question: 'What is your approach to SoD strategy in SAP environments?',
      answer: 'Our approach involves defining a comprehensive SoD rule set based on industry best practices and regulatory requirements, performing automated SoD risk analysis, resolving existing conflicts through role redesign, and continuously monitoring for new violations to maintain a compliant environment.'
    },
    {
      question: 'How do you identify and manage SoD conflicts in SAP?',
      answer: 'We use automated tools to analyze user roles and access assignments against a predefined SoD rule set, identifying conflicts proactively. Each conflict is reviewed and addressed through role remediation, risk acceptance processes, or role restructuring in collaboration with stakeholders.'
    },
    {
      question: 'Why is a well-defined SoD strategy important for organizations?',
      answer: 'A robust SoD strategy helps prevent fraud, errors, and non-compliance penalties by ensuring that no individual can perform incompatible tasks. It supports internal controls, strengthens auditability, and enhances operational security across SAP landscapes.'
    },
    {
      question: 'Do you customize SoD rules based on specific business needs?',
      answer: 'Yes, we customize SoD rules based on each organization’s business processes, industry regulations (e.g., SOX, GDPR, HIPAA), and risk appetite, ensuring a tailored approach that aligns compliance requirements with practical operational needs.'
    },
    {
      question: 'How often do you recommend performing SoD risk analysis?',
      answer: 'We recommend performing SoD risk analysis continuously or at least on a quarterly basis, depending on the size and complexity of the SAP environment, to detect new conflicts arising from role changes, new users, or system updates.'
    },
    {
      question: 'How does your SoD strategy help with compliance audits?',
      answer: 'Our SoD strategy includes detailed reporting and documentation of risk analyses, conflict resolutions, and ongoing monitoring activities. This enables organizations to provide transparent and audit-ready evidence demonstrating compliance with regulations and internal policies.'
    }
  ];





  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            SoD strategy and approach
          </h2>
          <p className="text-white">
          We design and implement a clear Segregation of Duties (SoD) strategy, reducing risks of conflicts, strengthening compliance, and ensuring secure, sustainable access management.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <img src={banner} alt="cloud compliance" />
          </div>
        </div>
      </section>

      <section className="service-journey-container ">
        <div className="service-journey-content ">
          <div className="journey-card ">
            <div className="card-header">
              <h3 className="big-heading-text-white">Effective SoD Management in SAP: Why a Proactive Approach Matters</h3>
              <div className="card-sub-content">
                <p className="text-white">
                  Every organization running SAP must manage Segregation of Duties (SoD) to ensure compliance and security.
                  However, we often see this handled reactively—triggered by audit findings—without a clear strategy, defined objectives, or the right tools in place.
                </p>
                <p className="text-white">
                  This ad-hoc approach can lead to increased costs in SAP access management, while delivering limited improvements in actual compliance and security.
                  A proactive, well-structured SoD strategy is essential to achieve sustainable control, reduce risk, and optimize resource use.
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
              <h2 className="big-heading-text-white">SAP SoD Strategy and Approach Consulting</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Our consulting service helps organizations design a structured, proactive approach to managing Segregation of Duties (SoD) and SAP access controls.
                  We work with you to define clear objectives, organize responsibilities, and select the right tools—moving beyond reactive audit responses to a sustainable, cost-effective access management model.
                </p>
                <p className="text-white">Key deliverables include:</p>
              </div>
            </div>

            <div className="solution-intro-card only-mobile">
              <h2 className="big-heading-text-black">SAP SoD Strategy and Approach Consulting</h2>
              <div className="card-sub-content">
                <p className="text-black">
                  Our consulting service helps organizations design a structured, proactive approach to managing Segregation of Duties (SoD) and SAP access controls.
                  We work with you to define clear objectives, organize responsibilities, and select the right tools—moving beyond reactive audit responses to a sustainable, cost-effective access management model.
                </p>
                <p className="text-black">Key deliverables include:</p>
              </div>
            </div>


            <div className="solution-cards ">
              <div className="solution-card">
                <div className="card-icon">
                  <FaCogs className="icon" />
                </div>
                <p className="small-text-white">Assessment of current SoD and access control practices</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUserTie className="icon" />
                </div>
                <p className="small-text-white">Definition of governance and process frameworks</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaShieldAlt className="icon" />
                </div>
                <p className="small-text-white"> Tool selection guidance based on your needs and scale</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaChartLine className="icon" />
                </div>
                <p className="small-text-white">Roadmap for implementation and continuous improvement</p>
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

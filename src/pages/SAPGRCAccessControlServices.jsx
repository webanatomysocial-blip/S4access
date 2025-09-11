import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import { FaProjectDiagram, FaNetworkWired, FaUserShield, FaUsersCog, FaCogs } from "react-icons/fa";
import image from "../assets/images/inner-services-images/security-architect-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";

export default function SAPGRCAccessControlServices() {



const faqs = [
    {
      question: 'Why is there a growing demand for SAP Security Architects?',
      answer: 'As SAP systems grow more complex and integrate tightly with other IT systems, ad hoc role design and fragmented security practices often result in inefficiencies and security risks. Organizations need strategic, future-proof security architectures to manage risks, improve compliance, and optimize performance.'
    },
    {
      question: 'What challenges do organizations face without a dedicated SAP Security Architect?',
      answer: 'Without a dedicated Security Architect, companies face uncoordinated role growth, uncontrolled SoD conflicts, inconsistent compliance controls, high complexity in access management, and poor alignment between business requirements and security practices.'
    },
    {
      question: 'What does your SAP Security Architect service provide?',
      answer: 'We deliver end-to-end design and governance of SAP security architecture, including role design strategy, SoD framework development, risk-based role modeling, integration with identity and access management (IAM) systems, compliance alignment, and future-proof design recommendations.'
    },
    {
      question: 'How does an SAP Security Architect help ensure compliance?',
      answer: 'The Security Architect establishes a structured, risk-based approach to role design and SoD management, ensuring that access assignments follow regulatory frameworks like SOX, GDPR, and industry-specific mandates. They provide strategic guidance for access reviews, audit readiness, and continuous risk mitigation.'
    },
    {
      question: 'Why is it hard for companies to fill the SAP Security Architect role internally?',
      answer: 'There is a global shortage of experienced SAP security professionals. The role requires a unique combination of deep SAP technical knowledge, risk management expertise, and strategic business alignment capabilities, making recruitment and retention highly challenging.'
    },
    {
      question: 'Can your SAP Security Architect service be adapted for specific industries or business models?',
      answer: 'Absolutely. We customize the architecture strategy based on industry-specific compliance needs, business processes, system complexity, and organizational structure, ensuring the solution is fully aligned with your unique goals and risk profile.'
    }
  ];




  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            Security Architect
          </h2>
          <p className="text-white">
            We provide expert Security Architecture services, designing robust SAP security frameworks that safeguard systems, reduce risks, and support long-term business goals.          </p>
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
              <h3 className="big-heading-text-white">The Growing Demand for SAP Security Architects</h3>
              <div className="card-sub-content">
                <p className="text-white">
                  Every SAP system has an access management design—whether intentionally crafted or shaped over time through ad hoc decisions. In many cases, the current state is the result of years of incremental changes made without a clear strategy or long-term objective.
                </p>
                <p className="text-white">
                  As SAP landscapes become more complex and tightly integrated with broader IT environments, the need for a robust and well-aligned SAP security architecture has grown significantly. Organizations now require dedicated design services to ensure their access management aligns with compliance, operational, and business goals.
                </p>
                <p className="text-white">
                  In larger enterprises, this often translates into a need for permanent SAP security architect roles—positions that are increasingly difficult to fill due to the scarcity of qualified professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container ">
        <div className="service-solution-content ">
          <div className="solution-grid sod-solution-grid">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">SAP Security Architecture & Design – Ongoing Consulting Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  We provide continuous support to help organizations build and maintain a strong SAP security architecture that evolves with their business and IT landscape. Our ongoing consulting service ensures your SAP access management remains aligned with compliance requirements, operational needs, and enterprise architecture.
                </p >
                <p className="text-white"  >Delivered by experienced SAP security professionals, the service includes:</p>
              </div>
            </div>
            <div className="solution-intro-card only-mobile">
              <h2 className="big-heading-text-black">SAP Security Architecture & Design – Ongoing Consulting Service</h2>
              <div className="card-sub-content">
                <p className="text-black">
                  We provide continuous support to help organizations build and maintain a strong SAP security architecture that evolves with their business and IT landscape. Our ongoing consulting service ensures your SAP access management remains aligned with compliance requirements, operational needs, and enterprise architecture.
                </p >
                <p className="text-black"  >Delivered by experienced SAP security professionals, the service includes:</p>
              </div>
            </div>


            <div className="solution-cards sod-deliverables-cards">
              <div className="solution-card">
                <div className="card-icon">
                  <FaProjectDiagram className="icon" />
                </div>
                <p className="small-text-white">Continuous architecture development and refinement</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaNetworkWired className="icon" />
                </div>
                <p className="small-text-white">Integration with enterprise IT and governance frameworks</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUserShield className="icon" />
                </div>
                <p small->Ongoing role and authorization concept optimization</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUsersCog className="icon" />
                </div>
                <p className="small-text-white">Support for establishing and sustaining SAP Security Architect functions</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaCogs className="icon" />
                </div>
                <p className="small-text-white">Application of s4access access management best practices</p>
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

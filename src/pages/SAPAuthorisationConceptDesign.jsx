import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import image from "../assets/images/inner-services-images/sod-role-redesign-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";

export default function SAPAuthorisationConceptDesign() {

const faqs = [
    {
      question: 'Why is SoD/Role Redesign important?',
      answer: 'Over time, roles can accumulate excessive access due to business changes, outdated designs, or manual modifications, increasing risk and complexity. SoD/Role Redesign ensures that roles are aligned with current business processes, minimizes risk of conflicting access, and improves system performance and auditability.'
    },
    {
      question: 'What does your SoD/Role Redesign service include?',
      answer: 'Our service includes detailed analysis of existing roles and access assignments, identification of SoD conflicts, business process alignment, role optimization to reduce complexity, consolidation of roles where possible, and implementation of a clean, compliant role structure.'
    },
    {
      question: 'How do you approach SoD conflict resolution during role redesign?',
      answer: 'We first perform a comprehensive SoD risk analysis using industry-standard rule sets. Each identified conflict is assessed in collaboration with business stakeholders and resolved by adjusting role design, splitting roles, or applying risk mitigation strategies, ensuring ongoing compliance and usability.'
    },
    {
      question: 'Can you help reduce the number of SAP roles for easier management?',
      answer: 'Yes. Part of our role redesign strategy focuses on optimizing the role landscape by eliminating redundant or overlapping roles, consolidating roles where appropriate, and applying role templates to simplify management, reduce maintenance effort, and ensure scalability.'
    },
    {
      question: 'How does role redesign improve compliance and security?',
      answer: 'By redesigning roles based on business needs and predefined SoD policies, we eliminate unnecessary access and conflicting permissions, enforce principle of least privilege, and provide clear audit trails, helping organizations meet compliance requirements such as SOX and GDPR.'
    },
    {
      question: 'How often should SoD/Role Redesign be performed?',
      answer: 'We recommend performing a role redesign whenever major organizational or system changes occur (e.g., mergers, process overhauls, SAP upgrades) or at least every 1-2 years to prevent role bloat, ensure compliance, and maintain system efficiency.'
    }
  ];



  

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">SoD/Role redesign</h2>
          <p className="text-white">
            We reshape roles and SoD rules to eliminate conflicts, strengthen compliance, and align access with evolving business needs.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <img src={image} alt="cloud compliance" />
          </div>
        </div>
      </section>

      {/* Role Redesign Journey */}
      <section className="service-journey-container">
        <div className="service-journey-content">


          <div className="journey-card">
            <div className="card-header left-right-container-inner-service">
              
              <div className="card-sub-content card-sub-content-only-some">
                <h2 className="sub-big-heading-text-white">The Role Redesign Cycle: <br /> A Common SAP Challenge </h2>
                <p className="text-white">
                  Many organizations using SAP eventually face a familiar challenge: access and role structures become difficult to manage, leading to rising Segregation of Duties (SoD) risks, audit findings, and security concerns.
                </p>
                <p className="text-white">
                  In response, a role redesign project is launched—often with a fresh strategy and renewed focus. Yet, within 2–3 years, the same issues resurface, bringing the organization back to square one. This cycle highlights the need for a sustainable, well-governed access management approach rather than one-off fixes.
                </p>
              </div>

             
              <div className="card-sub-content card-sub-content-only-some">
                 <h2 className="sub-big-heading-text-white">Breaking the Cycle: <br /> Our Approach to SAP Role Redesign</h2>
                <p className="text-white">
                  Our SAP role redesign approach begins with a deep analysis of the root causes that prevent organizations from escaping the recurring cycle of role redesign. In most cases, we uncover gaps across all key areas: governance, processes, technology, resourcing, skills and tools.
                </p>
                <p className="text-white">
                  We then work closely with our clients to design and execute a tailored role redesign project, supported by targeted improvements. The goal is to establish a sustainable, evergreen access design that remains effective and adaptable over time—avoiding the need for repeated overhauls.
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
      {/* Stats Section */}
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

      {/* FAQs section */}
      <FAQTemplate title="FAQs" faqs={faqs} />

      {/* CTA Section */}
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

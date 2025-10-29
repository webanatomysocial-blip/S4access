import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import image from "../assets/images/inner-services-images/sod-role-redesign-banner.jpg";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";
import { Helmet } from 'react-helmet-async';

export default function SAPAuthorisationConceptDesign() {

const faqs = [
  {
    question: 'How does your implementation help break the cycle of recurring role redesigns?',
    answer: 'Our implementation breaks the cycle of recurring role redesigns by identifying and resolving the root causes of access issues. We deliver a clean, SoD-compliant role design that is stable, scalable, and easy to maintain—eliminating the need for frequent rework.'
  },
  {
    question: 'Can you support both ECC and S/4HANA environments in your role redesign approach?',
    answer: 'Yes, we have delivered hundreds of SAP role projects across all major SAP solutions and installation types.'
  },
  {
    question: 'How do you ensure the new role design is evergreen and cost-efficient to maintain?',
    answer: 'This is where we stand apart from many other vendors in the market. As a specialist company, we’ve built deep expertise in understanding how SAP Access Management design and maintenance are interconnected.'
  },
  {
    question: 'Is there an ideal time to redesign SAP roles?',
    answer: 'If the security level of the SAP system is low, the question of timing becomes irrelevant—redesign should happen immediately. A weak access design poses ongoing risks, and delaying action only increases exposure.'
  },
  {
    question: 'Do you have accelerators to help automate parts of the work?',
    answer: 'Yes, we have proven tools and methods that help automate and accelerate key parts of the work, making the process efficient and reliable. However, there are no silver bullets in SAP Access Management—success requires a thoughtful approach, deep expertise, and attention to detail.'
  },
  {
    question: 'What sets your approach apart from the competition?',
    answer: 'As a specialist company, we know there’s no one-size-fits-all approach to SAP role design. We create realistic, tailored plans and combine deep SAP authorization expertise with SoD knowledge in a single team—ensuring both compliance and operational efficiency.'
  }
];



  

  return (
    <>

     <Helmet>

        <title>SAP SoD Role Redesign for S/4HANA | s4access Governances</title>
        <meta name="title" content="SAP SoD Role Redesign for S/4HANA | s4access Governance" />
        <meta name="description" content="Enhance SAP S/4HANA security with s4access’s SoD role redesign: mitigate
conflicts, streamline access, and ensure compliance with expert governance solutions." />

      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">SoD/Role redesign</h2>
          <p className="text-white">
           We break the role redesign cycle by addressing root cause issues and implementing a secure, SoD-compliant access design that is evergreen and cost-efficient to maintain..

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
      <section className="strength-showcase" style={{display:'none'}}>
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

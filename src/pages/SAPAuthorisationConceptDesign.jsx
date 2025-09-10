import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import image from "../assets/images/About-img/Access.png";

export default function SAPAuthorisationConceptDesign() {

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

      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">SoD/Role redesign</h2>
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
            Explore how organizations improved compliance, strengthened security, and
            reduced risks with SAP Access Management Reviews. These studies showcase
            real-world results, best practices, and measurable business impact.
          </p>
        </div>

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
              {/* <img src={image} alt="case study" /> */}
            </div>
          </div>
        </div>

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

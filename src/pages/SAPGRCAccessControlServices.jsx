import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import { FaProjectDiagram, FaNetworkWired, FaUserShield, FaUsersCog, FaCogs } from "react-icons/fa";
import image from "../assets/images/About-img/Access.png";

export default function SAPGRCAccessControlServices() {



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
            Security Architect
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


import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import image from "../assets/images/inner-services-images/ff-log-review-automation-banner.jpg";
import { FaCheckCircle, FaDatabase, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";
import { Helmet } from 'react-helmet-async';


export default function SAPSoDApproach() {



 const faqs = [
  {
    question: 'Do we need SAP GRC for this service?',
    answer: 'No, you don’t. If you already have SAP GRC, we can deliver the service using your existing setup. If not, we offer a fully functional alternative that does not require SAP GRC installation, making it easier and faster to get started.'
  },
  {
    question: 'Is it fast to implement?',
    answer: 'Yes. Once the initial paperwork and technical enablement are complete, the first complete automated review cycle can be started immediately.'
  },
  {
    question: 'Is the service audit-proven?',
    answer: 'Absolutely. Our customers have been using this service for years and have successfully passed audits by all major auditing firms—without comments. It consistently meets audit standards and supports transparent, well-documented access risk management.'
  },
  {
    question: 'What is expected from us as the customer?',
    answer: 'Very little to get started. The service is up and running with minimal effort on your side. Once enabled, we’ll guide you through setting up the necessary governance and processes to ensure you get full value from the log review.'
  },
  {
    question: 'Does it cover ECC and S/4 environments?',
    answer: 'Yes. The service fully supports both SAP ECC and SAP S/4HANA environments.'
  }
];





  return (
    <>
     <Helmet>

        <title>Firefighter Log Review Automation for SAP GRC | s4access</title>
        <meta name="title" content="Firefighter Log Review Automation for SAP GRC | s4access" />
        <meta name="description" content="Automate SAP GRC Firefighter log reviews with s4access: reduce manual
effort, ensure compliance, and enhance audit efficiency through intelligent automation." />

      </Helmet>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            FF Log Review Automation
          </h2>
          <p className="text-white">
            We automate Firefighter (FF) log reviews to improve accuracy, reduce manual workload, and ensure faster, compliant audit reporting.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image ">
            <img src={image} alt="cloud compliance" />
          </div>
        </div>
      </section>

      <section className="service-journey-container ">
        <div className="service-journey-content ">
          <div className="journey-card ">
            <div className="card-header">
              <h3 className="big-heading-text-white">
                The Challenge of Managing Emergency Access in SAP
              </h3>
              <div className="card-sub-content">
                <p className="text-white">
                  In SAP landscapes, terms like break glass users,{" "}
                  emergency users, or firefighters{" "}
                  refer to accounts with elevated privileges used in unplanned or
                  critical situations. While these users are essential for operational
                  continuity, their activities must be tightly controlled through{" "}
                  approval workflows and detailed logging.
                </p>
                <p className="text-white">
                  However, in practice, this often results in{" "}
                  large volumes of log data that are difficult to
                  interpret and require specialized knowledge to
                  review effectively. Without a streamlined process or automated
                  analysis, organizations frequently face{" "}
                  thousands of unreviewed logs, leading to{" "}
                  audit findings and compliance risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-solution-container ">
        <div className="service-solution-content ">
          <div className="solution-grid sod-solution-grid">
            <div className="solution-intro-card only-windows ">
              <h2 className="big-heading-text-white">
                S4access Automated Log Review Service
              </h2>
              <div className="card-sub-content">
                <p className="text-white">
                  In collaboration with our customers, s4access has
                  developed an automated log review service that effectively addresses
                  the common challenges of managing emergency access in SAP environments.
                  The solution is quick to deploy, typically operational within a few
                  weeks, and requires no formal implementation project.
                </p>
                <p className="text-white">
                  It is offered as a fully managed service with a{" "}
                  fixed monthly fee, ensuring predictability and low
                  risk for the customer.
                </p >
                <p className="text-white">Key features of the solution include:</p>
              </div>
            </div>
            <div className="solution-intro-card only-mobile ">
              <h2 className="big-heading-text-black">
                S4Access Automated Log Review Service
              </h2>
              <div className="card-sub-content">
                <p className="text-black">
                  In collaboration with our customers, s4access has
                  developed an automated log review service that effectively addresses
                  the common challenges of managing emergency access in SAP environments.
                  The solution is quick to deploy, typically operational within a few
                  weeks, and requires no formal implementation project.
                </p>
                <p className="text-black">
                  It is offered as a fully managed service with a{" "}
                  fixed monthly fee, ensuring predictability and low
                  risk for the customer.
                </p >
                <p className="text-black">Key features of the solution include:</p>
              </div>
            </div>

            <div className="solution-cards sod-deliverables-cards">
              <div className="solution-card">
                <div className="card-icon">
                  <FaCheckCircle className="icon" />
                </div>
                <p className="small-text-white">Compatible with SAP GRC and non-GRC environments</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaDatabase className="icon" />
                </div>
                <p className="small-text-white">Includes a predefined risk library to automate log analysis</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUserCheck className="icon" />
                </div>
                <p className="small-text-white">Intuitive interface that simplifies review for non-technical users</p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaShieldAlt className="icon" />
                </div>
                <p className="small-text-white">
                  Audited and validated by major audit firms; automated approval rates
                  typically between 80–92%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>







     

      <section className="strength-showcase" style={{display: 'none'}}>
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

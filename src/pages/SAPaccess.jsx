
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../css/InnerServices.css";
import FAQTemplate from '../components/FAQTemplate.jsx';
import banner from "../assets/images/inner-services-images/sap-access-management-automation-banner.jpg";
import { FaCogs, FaUserTie, FaShieldAlt, FaChartLine } from "react-icons/fa";
import case1img from "../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg";
import case2img from "../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg";


export default function SAPaccess() {



const faqs = [
    {
      question: 'What are the key benefits of automating SAP Access Management?',
      answer: 'Automation accelerates access provisioning and de-provisioning, reduces human errors, improves compliance with regulatory requirements, ensures timely access changes, increases process efficiency, and enhances visibility into access controls.'
    },
    {
      question: 'Which processes do you automate in SAP Access Management?',
      answer: 'We automate critical processes such as user onboarding/offboarding, role assignment and adjustment, automated SoD conflict detection, access risk analysis, periodic access reviews, and audit reporting to ensure faster and more secure access management.'
    },
    {
      question: 'How does automation help with compliance in SAP environments?',
      answer: 'Automated workflows ensure consistent enforcement of access policies, real-time SoD conflict checks, and automatic generation of audit trails and compliance reports. This enables faster audit readiness and reduces the risk of non-compliance penalties.'
    },
    {
      question: 'Is your SAP Access Automation solution customizable?',
      answer: 'Yes, our automation solution is fully customizable to reflect each organization’s business rules, risk appetite, SoD policies, and integration needs with other Identity Access Management (IAM) systems, ensuring the right level of control for every unique SAP landscape.'
    },
    {
      question: 'How does automation improve the speed of user provisioning?',
      answer: 'Automated workflows enable immediate role assignments based on predefined rules and approvals, reducing the time it takes from user request to access being provisioned—often from days or weeks down to hours or minutes.'
    },
    {
      question: 'Can automation help with periodic access reviews?',
      answer: 'Absolutely. Automation enables scheduled and systematic user access reviews, sending reminders to managers, automatically highlighting anomalies, and providing structured reports to speed up the review process while ensuring nothing is missed.'
    }
  ];





  return (
    <>
      <Header />

      <section className="service-container-1">
        <div className="service-left">
          <h2 className="extra-big-heading-text-white">
            SAP Access <br /> Management Automation
          </h2>
          <p className="text-white">
            We simplify and accelerate access processes with automation, reducing manual effort, minimizing errors, and ensuring compliance with greater efficiency.
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
              <h3 className="big-heading-text-white">Technology-Driven SAP Access Management: Avoiding Common Pitfalls
              </h3>
              <div className="card-sub-content">
                <p className="text-white">
                  Effective SAP Access Management is nearly impossible without the right supporting technology. While SAP offers native tools, many third-party vendors provide solutions with varying capabilities and cost to enhance efficiency across your access landscape.
                  However, a common mistake is selecting a tool without aligning it to a broader access management approach. Without a clear plan and integration into your overall approach, these tools often result in unnecessary costs—without delivering meaningful improvements in compliance, security, or operational value.
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
              <h2 className="big-heading-text-white">SAP Access Management Automation Consulting
              </h2>
              <div className="card-sub-content">
                <p className="text-white">
                  This service helps organizations design a technology strategy that supports effective SAP Access Management and Segregation of Duties (SoD). We guide you in aligning tool selection with your overall access management approach—ensuring that technology investments deliver real value in compliance, security, and efficiency.
                </p>
                <p className="text-white">What we deliver:
                </p>
              </div>
            </div>

            <div className="solution-intro-card only-mobile ">
              <h2 className="big-heading-text-black">SAP Access Management Automation Consulting
              </h2>
              <div className="card-sub-content">
                <p className="text-black">
                  This service helps organizations design a technology strategy that supports effective SAP Access Management and Segregation of Duties (SoD). We guide you in aligning tool selection with your overall access management approach—ensuring that technology investments deliver real value in compliance, security, and efficiency.
                </p>
                <p className="text-black">What we deliver:
                </p>
              </div>
            </div>

            <div className="solution-cards sod-deliverables-cards">
              <div className="solution-card">
                <div className="card-icon">
                  <FaCogs className="icon" />
                </div>
                <p className="small-text-white">Assessment of current tools and access management practices
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaUserTie className="icon" />
                </div>
                <p className="small-text-white">Definition of objectives and technology requirements
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaShieldAlt className="icon" />
                </div>
                <p className="small-text-white">Evaluation of vendor solutions and fit-for-purpose recommendations
                </p>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <FaChartLine className="icon" />
                </div>
                <p className="small-text-white">Integration planning to ensure tools support your governance and process framework
                </p>
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

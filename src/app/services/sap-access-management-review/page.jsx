import Image from "next/image";
import React from "react";
import Link from "next/link";
import case1img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg';
import case2img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg';
import banner from '../../../assets/images/inner-services-images/SAP-Access-managment-review-banner.jpg';

import '../../../css/InnerServices.css';
import FAQTemplate from '../../../components/FAQTemplate.jsx';
import {    FaUserPlus,
    FaClock,
    FaChartLine,
    FaMoneyBillWave,
    FaFileAlt,
    FaUsers,
    FaUserTie,
    FaCogs,
    FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  alternates: {
    canonical: "/services/sap-access-management-review",
  },
  title: "SAP Access Management Review & Audit Consulting",
  description: "Get a clear view of your SAP access management. Governance, process and technical review with actionable plan to improve compliance, security and reduce costs.",
};


export default function SAPAccessReview() {



    const faqs = [
        {
            question: 'What is the purpose of the SAP Access Management Review?',
            answer: 'To assess the current situation and identify root causes. Based on this, we create a clear, actionable plan to move forward and improve your SAP Access Management.'
        },
        {
            question: 'What kind of insights will we gain from the review?',
            answer: 'The review will help you understand your current situation clearly—identifying not just the symptoms but the actual root causes of access-related challenges. This insight supports the development of permanent solutions that lead to improved SAP Access Management, with stronger security and compliance.'
        },
        {
            question: 'How do you assess our current access management situation?',
            answer: 'We review your governance, skills, resourcing, processes, and technical reality through interviews, system analysis, and documentation review.'
        },
        {
            question: 'What makes your review different from a standard audit?',
            answer: 'Unlike a traditional audit, we focus on root causes, practical improvements, and long-term sustainability—not just compliance checks.'
        },
        {
            question: 'Will we receive a concrete action plan after the review?',
            answer: 'Yes. You’ll receive a realistic, prioritized action plan tailored to your organization’s needs and goals.'
        },
        {
            question: 'How long does the review process typically take?',
            answer: 'Most reviews are completed within 1–2 calendar months, depending on the size and complexity of your SAP environment.'
        },
        {
            question: 'Can the review be followed by support for implementation and ongoing improvements?',
            answer: 'Absolutely. We offer full support from planning and implementation to continuous improvement and operations.'
        },
        {
            question: 'How much involvement is required from our internal team during the review?',
            answer: 'Minimal. We handle most of the work, but we’ll need input from key stakeholders to ensure accuracy and relevance.'
        },
        {
            question: 'Is there an ideal time for the review?',
            answer: 'The review provides valuable insights at any time. Whether you\'re preparing for changes, responding to issues, or simply aiming to improve, it helps uncover root causes and supports lasting improvements in SAP Access Management—making it a smart investment year-round.'
        }
    ];




    return (
        <>
            
            
            <section className="service-container-1">
                <div className="service-left">
                    <h1 className="extra-big-heading-text-white">
                        SAP Access <br /> Management review
                    </h1>
                    <p className="text-white">
                        We provide an understandable view of your organization’s  SAP Access Management situation and deliver a clear, actionable plan forward to improve efficiency, compliance, and long-term sustainability.
                    </p>
                </div>
                <div className="service-right only-windows">
                    <div className="service-image">
                        <Image src={banner} alt="cloud compliance" priority={true} />
                    </div>
                </div>
            </section>

            <section className="service-journey-container">
                <div className="service-journey-content">
                    <div className="journey-card">
                        <div className="card-header">
                            <h2 className="big-heading-text-white">From Uncertainty to Clarity: Mapping Your SAP Access Management Journey</h2>
                            <div className="card-sub-content">
                                <p className="text-white">
                                    Many organizations operate SAP access management without a clear strategic plan. While systems may continue to function over time, this approach often leads to recurring challenges such as weakened security, audit findings, delays in implementing necessary changes, and concerns around resourcing and skill availability. As these issues accumulate, management typically begins to ask critical questions:
                                </p>
                            </div>
                        </div>
                        <div className="questions-grid">
                            <div className="question-item">
                                <span className="question-number">01</span>
                                <p className="small-text-white">How exposed is our system, and what is our current level of <Link href="/services/sod-strategy-approach">Segregation of Duties (SoD)?</Link></p>
                            </div>   
                            <div className="question-item">
                                <span className="question-number">02</span>
                                <p className="small-text-white">Is our operating model truly optimized for an SAP organization of our size?</p>
                            </div>
                            <div className="question-item">
                                <span className="question-number">03</span>
                                <p className="small-text-white">How can we maximize the value of our budget—and are there opportunities to reduce costs?</p>
                            </div>
                            <div className="question-item">
                                <span className="question-number">04</span>
                                <p className="small-text-white">How should we structure our <Link href="/services/sap-access-management-automation">access management</Link>, and where can we find the necessary expertise?</p>
                            </div>
                            <div className="question-item">
                                <span className="question-number">05</span>
                                <p>What are the next steps we should take?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-solution-container">
                <div className="service-solution-content">
                    <div className="solution-grid">



                        <div className="solution-intro-card only-windows">
                            <h2 className="big-heading-text-white">SAP Access Management Improvement Service</h2>
                            <div className="card-sub-content">
                                <p className="text-white">Our service provides a comprehensive understanding of the organization's SAP Access Management landscape and identifies improvement opportunities by analyzing the current state
                                    against s4access best practice standards.</p>
                            </div>
                        </div>



                        {/* only mobile start  */}


                        <div className="solution-intro-card only-mobile">
                            <h2 className="big-heading-text-black">SAP Access Management Improvement Service</h2>
                            <div className="card-sub-content">
                                <p className="text-black">Our service provides a comprehensive understanding of the organization's SAP Access Management landscape and identifies improvement opportunities by analyzing the current state
                                    against s4access best practice standards.</p>
                            </div>
                        </div>

                        {/* only mobile end  */}

















                        <div className="solution-cards">
                            <div className="solution-card">
                                <div className="card-icon">
                                    <FaUserTie className="icon" />
                                </div>
                                <h3 className="sub-big-heading-text-white">Governance</h3>
                                <p>Organizational analysis of responsibilities and skills around related tasks</p>
                            </div>
                            <div className="solution-card">
                                <div className="card-icon">
                                    <FaCogs className="icon" />
                                </div>
                                <h3 className="sub-big-heading-text-white">Processes</h3>
                                <p className="small-text-white"> Analysis of user administration and role management processes</p>
                            </div>
                            <div className="solution-card">
                                <div className="card-icon">
                                    <FaShieldAlt className="icon" />
                                </div>
                                <h3 className="sub-big-heading-text-white">Technical</h3>
                                <p className="small-text-white">Snapshot analysis of technical feasibility of SAP roles and current security level</p>
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
                        Learn how our S/4 Access Management Review identified critical issues and provided a clear roadmap to strengthen SAP access controls for a client.
                    </p>
                    <Link href="/customer-success/s4-access-management-review" className="read-more-btn ">
                        Read More  <i className="bi bi-arrow-right arrow-icon"></i>
                    </Link>
                </div>

                {/* Case Study 1 - Project Detail */}
                <div className="strength-right">
                    <div className="stats-card">
                        <h3 className="sub-heading-text-black">SAP S/4 Implementation</h3>
                        <h4 className="text-black">Comprehensive Access Review</h4>
                        <p className="text-black">
                            Assessed governance, processes, and technical configuration using the s4access SAP Access Analytics Platform to identify critical issues.
                        </p>
                        <div className="image-container-showcase">
                            <Image src={case1img} alt="case study" />
                        </div>
                    </div>
                </div>

                {/* Case Study 2 - Business Outcome */}
                <div className="strength-right">
                    <div className="stats-card">
                        <h3 className="sub-heading-text-black">SAP S/4 Implementation</h3>
                        <h4 className="text-black">Comprehensive Access Review</h4>
                        <p className="text-black">
                            “This review was totally  something else we<br /> get from normal audits” <br /> – SAP Director

                        </p>
                        <div className="image-container-showcase">
                            <Image src={case2img} alt="case study" />
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
                            <Link href="/contact" className="button-green">
                                Contact Us
                            </Link>
                            {/* <Link href="/customer-success" className="border-button">
                Case Studies
              </Link> */}
                            <Link href="/customer-success" className="border-button">Case Studies</Link>
                        </div>
                    </div>
                </div>
            </section>

                    </>
    );
}
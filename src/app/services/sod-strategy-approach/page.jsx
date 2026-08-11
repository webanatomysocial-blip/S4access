import Image from "next/image";

import React from "react";
import Link from "next/link";
import '../../../css/InnerServices.css';
import FAQTemplate from '../../../components/FAQTemplate.jsx';
import banner from '../../../assets/images/inner-services-images/sod-stratergy-approach-banner.jpg';
import { FaCogs, FaUserTie, FaShieldAlt, FaChartLine } from "react-icons/fa";
import case1img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg';
import case2img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg';

export const metadata = {
  alternates: {
    canonical: "/services/sod-strategy-approach",
  },
  title: "SAP SoD Strategy & Access Governance Consulting",
  description: "Build a proactive SAP SoD strategy. Governance frameworks, tool selection, audit-ready access controls and continuous SoD compliance for Nordic companies.",
};



export default function SAPSoDApproach() {



  const faqs = [
    {
      question: 'What kind of deliverables can we expect from the service?',
      answer: 'You will receive an optimized SoD approach tailored to your organization, along with a roadmap for continuous improvement and long-term compliance.'
    },
    {
      question: 'Can you help us build a sustainable SoD governance model?',
      answer: 'Yes. Once the SoD strategy and approach are defined, we can support you in implementing a governance model with clear ownership, processes, and tools.'
    },
    {
      question: 'Will this help us pass internal and external audits?',
      answer: 'Not always directly but defining a clear SoD strategy and approach brings transparency, reduces risk, and significantly improves your chances of meeting audit requirements.'
    },
    {
      question: 'Do we need SAP GRC or another tool in place to benefit from this service?',
      answer: 'No specific tool is required. We work with or without SAP GRC, adapting to your current setup and recommending tools only if they add value.'
    },
    {
      question: 'How much calendar time does this typically require?',
      answer: 'Typically 2-3 calendar months, depending on the size and complexity of your SAP environment.'
    },
    {
      question: 'How much involvement is required from our internal team during the review?',
      answer: 'Key stakeholders from internal controls, internal audit and IT are involved in workshops and decision-making, while we handle the bulk of analysis and documentation.'
    }
  ];




  return (
    <>
      
      
      <section className="service-container-1">
        <div className="service-left">
          <h1 className="extra-big-heading-text-white">
            SoD strategy and approach
          </h1>
          <p className="text-white">
            We design and implement a clear Segregation of Duties (SoD) strategy, reducing risks of conflicts, strengthening compliance, and ensuring secure, sustainable access management.
          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <Image src={banner} alt="cloud compliance" priority={true} />
          </div>
        </div>
      </section>

      <section className="service-journey-container ">
        <div className="service-journey-content ">
          <div className="journey-card ">
            <div className="card-header">
              <h2 className="big-heading-text-white">Effective SoD Management in SAP: Why a Proactive Approach Matters</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  Every organization running SAP must manage Segregation of Duties (SoD) to ensure compliance and security.
                  However, we often see this handled reactively—triggered by audit findings—without a clear strategy, defined objectives, or the right tools in place.
                </p>
                <p className="text-white">
                  This ad-hoc approach can lead to increased costs in <Link href="/services/sap-access-management-review">SAP access management</Link>, while delivering limited improvements in actual compliance and security.
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
                  Our consulting service helps organizations design a structured, proactive approach to managing Segregation of Duties (SoD) and <Link href="/blogs/sap-access-governance-sod-risk">SAP access controls</Link>.
                  We work with you to define clear objectives, organize responsibilities, and select the right tools—moving beyond reactive audit responses to a sustainable, cost-effective access management model.
                </p>
                <p className="text-white">Key deliverables include:</p>
              </div>
            </div>

            <div className="solution-intro-card only-mobile">
              <h2 className="big-heading-text-black">SAP SoD Strategy and Approach Consulting</h2>
              <div className="card-sub-content">
                <p className="text-black">
                  Our consulting service helps organizations design a structured, proactive approach to managing Segregation of Duties (SoD) and <Link href="/blogs/sap-access-governance-sod-risk">SAP access controls</Link>.
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






      <section className="strength-showcase" style={{ display: 'none' }}>
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
              <Image src={case1img} alt="case study" />
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
              <Link href="/customer-success" className="border-button">
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

          </>
  );
}

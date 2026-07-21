import Image from "next/image";
import React from "react";
import Link from "next/link";
import '../../../css/InnerServices.css';
import case1img from '../../../assets/images/inner-services-images/authorisation-concept-owner-case1.jpg';
import case2img from '../../../assets/images/inner-services-images/authorisation-concept-owner-case2.jpg';
import FAQTemplate from '../../../components/FAQTemplate.jsx';
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
  FaUserTie,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import image from '../../../assets/images/inner-services-images/authorisation-concept-owner-banner.jpg';

export const metadata = {
  title: "SAP Authorization Concept Owner Service | s4access",
  description: "Struggling to fill your SAP Authorization Concept Owner role? Outsourced service delivering SAP expertise, audit compliance and licence cost savings daily.",
};


export default function SAPAuthorisationConceptOwnerService() {



  const faqs = [
    {
      question: 'Why should a company consider outsourcing the SAP Authorisation Concept Owner role?',
      answer: 'Recruiting and retaining skilled SAP Authorisation experts is increasingly difficult, especially in modern environments where expertise is needed across multiple areas. Most organizations can\'t justify hiring several high-level specialists for a single role. As the ACO role has become critical, outsourcing offers a scalable expert service that often delivers better results than relying solely on internal staff.'
    },
    {
      question: 'Is outsourcing the SAP Authorisation Concept Owner more expensive than hiring internal personnel?',
      answer: 'Surprisingly, no. Many organizations discover—especially when moving to S/4HANA or improving their SAP Access Management—that the full cost of maintaining an internal team with the required expertise is significantly higher. Outsourcing provides access to a broader skill set without the overhead of recruiting, training, and retaining multiple high-level specialists.'
    },
    {
      question: 'What if we don’t need a full-time Authorisation Concept Owner—can the service be scaled to our needs?',
      answer: 'Yes, the SAP ACO service is fully scalable. It can be adjusted based on your organization’s size and activity level—scaled up for larger environments or busy periods like audits and projects, and scaled down for smaller organizations or calmer phases. This flexibility ensures you get expert support when needed, without the cost of a permanent full-time resource.'
    },
    {
      question: 'How will the SAP ACO service learn and understand our organization’s structure, processes, and SAP environment?',
      answer: 'Our SAP ACO service is delivered by experienced named experts who stay with your account long-term. We work as an integrated part of your organization, taking time to understand your structure, business processes, and SAP landscape. This close collaboration ensures continuity, deep knowledge, and tailored support that evolves with your needs.'
    },
    {
      question: 'Is it difficult to get started with the outsourced SAP ACO service?',
      answer: 'Not at all. We can start quickly and begin delivering value from day one. Our onboarding process is streamlined, and our experienced experts know how to integrate smoothly into your organization, making the transition easy and effective.'
    },
    {
      question: 'Are your customers satisfied with the outsourced SAP ACO service?',
      answer: 'We’re happy to connect you directly with our customers for an unbiased view—one strong indication of satisfaction is that no organization has ever switched away from s4access.'
    }
  ];





  return (
    <>
      
      
      <section className="service-container-1">
        <div className="service-left">
          <h1 className="extra-big-heading-text-white">
            Authorisation <br />Concept Owner
          </h1>
          <p className="text-white">
            We act as your dedicated Authorization Concept Owner, ensuring your SAP access framework stays consistent, compliant, and aligned with both business and regulatory needs.          </p>
        </div>
        <div className="service-right only-windows">
          <div className="service-image">
            <Image src={image} alt="cloud compliance" priority={true} />
          </div>
        </div>
      </section>

      <section className="service-journey-container ">
        <div className="service-journey-content ">
          <div className="journey-card ">
            <div className="card-header">
              <h2 className="big-heading-text-white">The SAP Authorization Concept Owner: A Role Under Pressure</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  In every SAP organization, the role of the SAP Authorization Concept Owner is critical for ensuring secure and compliant access management. However, filling this position internally has become increasingly difficult due to several converging factors.
                </p>
                <p className="text-white">
                  Modern SAP landscapes are more complex than ever, requiring deep technical expertise to manage effectively. At the same time, organizations face heightened <Link href="/services/access-risk-sod-management">security and compliance demands</Link>, driven by evolving regulations and increased risk exposure. Compounding these challenges is a global shortage of experienced SAP security professionals, making it harder to recruit and retain the right talent.
                </p>
                <p className="text-white">
                  As a result, many organizations are actively seeking sustainable solutions—such as partnering with specialized providers or outsourcing the role—to ensure continuity, gain access to specialist skills, and manage costs effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="service-solution-container">
        <div className="service-solution-content  ">
          <div className="solution-grid">
            <div className="solution-intro-card only-windows">
              <h2 className="big-heading-text-white">SAP Authorization Concept Owner Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  We offer a powerful solution to address this critical role through a scalable, multi-skilled outsourcing model, delivered at a predictable fixed monthly fee. The service is provided by experienced, named consultants, supported by the full breadth of our company’s expertise, proprietary tools, and proven methodologies—including <Link href="/services/sap-access-management-automation">s4access access management</Link> best practices.
                </p>
                <p className="text-white">
                  Organizations consistently recognize the value we deliver: access to rare SAP expertise, enhanced operational stability, and measurable cost savings. This model not only fills a vital capability gap but also enables long-term continuity and compliance in increasingly complex SAP environments.
                </p>
              </div>
            </div>
            <div className="solution-intro-card-2 only-mobile ">
              <h2 className="big-heading-text-white">SAP Authorization Concept Owner Service</h2>
              <div className="card-sub-content">
                <p className="text-white">
                  We offer a powerful solution to address this critical role through a scalable, multi-skilled outsourcing model, delivered at a predictable fixed monthly fee. The service is provided by experienced, named consultants, supported by the full breadth of our company’s expertise, proprietary tools, and proven methodologies—including <Link href="/services/sap-access-management-automation">s4access access management</Link> best practices.
                </p>
                <p className="text-white">
                  Organizations consistently recognize the value we deliver: access to rare SAP expertise, enhanced operational stability, and measurable cost savings. This model not only fills a vital capability gap but also enables long-term continuity and compliance in increasingly complex SAP environments.
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
            Discover how our SAP Authorization Concept Owner Service transformed user management for a steel manufacturer, enhancing security, compliance, and efficiency.
          </p>
          <Link href="/customer-success/sap-authorisation-concept-owner" className="read-more-btn ">
            Read More  <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>

        {/* Case Study 1 - Project Detail */}
        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">Steel Manufacturer</h3>
            <h4 className="text-black">Streamlined User Management</h4>
            <p className="text-black">
              Implemented structured passive user removal and optimized SAP license usage for consistent, secure access management.
            </p>
            <div className="image-container-showcase">
              <Image src={case1img} alt="case study" />
            </div>
          </div>
        </div>

        {/* Case Study 2 - Business Outcome */}
        <div className="strength-right">
          <div className="stats-card">
            <h3 className="sub-heading-text-black">Steel Manufacturer</h3>
            <h4 className="text-black">30% Reduction in License Costs</h4>
            <p className="text-black">
              Reduced SAP_ALL profile usage and enhanced audit compliance, improving system security and cost efficiency.
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
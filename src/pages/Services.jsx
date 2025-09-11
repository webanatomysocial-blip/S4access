// import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Services.css"
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';
// import ServiceSection from '../components/ServiceSection.jsx';
import FAQTemplate from '../components/FAQTemplate.jsx';
import ServiceTabs from '../components/ServiceTabs.jsx';
import { Link } from 'react-router-dom';


function Services() {

  const faqs = [
    {
      question: 'What SAP Access Management challenges do your services address?',
      answer: 'We address critical challenges such as managing complex user roles, preventing segregation of duties (SoD) conflicts, controlling unauthorized access, reducing license costs, ensuring compliance with regulations, and handling evolving business processes or mergers.'
    },
    {
      question: 'How do your services help prevent security risks in SAP systems?',
      answer: 'Our solutions combine automated risk analysis, continuous monitoring, SoD conflict detection, role redesign, and firefighter log reviews to proactively identify and remediate security vulnerabilities before they lead to breaches or compliance issues.'
    },
    {
      question: 'Can your services simplify the management of SAP authorizations?',
      answer: 'Yes. We streamline access governance by automating user provisioning, access reviews, role assignments, and license management—reducing administrative burden while ensuring that each user has the appropriate level of system access.'
    },
    {
      question: 'How do you handle SAP Access challenges during business reorganizations or M&A?',
      answer: 'We provide structured support for process changes, role realignment, and system integrations. Our experts ensure access policies are realigned to reflect new organizational structures while maintaining compliance and minimizing disruption.'
    },
    {
      question: 'Do your services help with SAP licensing challenges?',
      answer: 'Absolutely. We perform license usage analysis, identify unused or underutilized licenses, and recommend optimized license assignments. This helps reduce licensing costs and ensures compliance during audits.'
    },
    {
      question: 'What makes your approach effective in solving access management challenges?',
      answer: 'We combine deep SAP security expertise, proven methodologies, advanced automation tools, and a risk-based approach. This allows us to solve challenges in a systematic, scalable, and business-aligned way, delivering sustainable solutions.'
    },
    {
      question: 'Are your solutions adaptable to industry-specific compliance requirements?',
      answer: 'Yes. We tailor our solutions to meet industry-specific regulations such as SOX, GDPR, HIPAA, and others, providing frameworks and controls designed to help you pass audits and avoid penalties.'
    },
    {
      question: 'How do your services ensure continuous improvement in SAP Access Management?',
      answer: 'Through periodic access reviews, automated log analysis, risk assessments, and regular optimization of roles and licenses, our services help maintain long-term control, reduce complexity, and continuously improve security and compliance postures.'
    }
  ];


  return (



    <div>
      <Header />


      {/* services-page-hero-banner start */}
      <section className="services-page-hero-banner">

        <div className="services-hero-left">
          <p className="big-heading-text-white">
            Services designed to solve <br />
            SAP access management challenges
          </p>
          <p className="text-white">
            We deliver end-to-end solutions tailored to tackle complex SAP access management issues, from risk reduction and compliance to automation and long-term governance.
          </p>

        </div>

        <div className="services-hero-right only-windows">

          {/* <WholeWebsiteIcon color={"red"}  /> */}

        </div>

      </section>


      {/* services-page-hero-banner End */}
















      {/* ServiceSection section start */}
      {/* <ServiceSection /> */}

       <section className="service-page-services-section">

        <ServiceTabs />
      </section>


      {/* ServiceSection section End */}








    




      {/* Partners and alliances section start */}
      <section className="partners-section">
        <div className="partners-container">
          <p className="big-heading-text-black">Partners and alliances</p>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="partners-logos-row">
          <div className="partner-logo-item">
            <WholeWebsiteIcon color="#003366" size={70} />
            <p className="text-black">Logo 1</p>
          </div>
          <div className="partner-logo-item">
            <WholeWebsiteIcon color="#2fffd8" size={70} />
            <p className="text-black">Logo 2</p>
          </div>
          <div className="partner-logo-item">
            <WholeWebsiteIcon color="#333a3d" size={70} />
            <p className="text-black">Logo 3</p>
          </div>
          <div className="partner-logo-item">
            <WholeWebsiteIcon color="#003366" size={70} />
            <p className="text-black">Logo 4</p>
          </div>
          <div className="partner-logo-item">
            <WholeWebsiteIcon color="#003366" size={70} />
            <p className="text-black">Logo 2</p>
          </div>
        </div>

      </section>
      {/* Partners and alliances section end */}

        {/* image-cta start */}
      <section className="image-cta-section">
        <div className="first-container-image-cta">
          <p className="sub-heading-text-white">

            Simplify SAP access management with our expert services. From SoD and automation to license optimisation and outsourced support, we help reduce risks, ensure compliance, and deliver lasting value. Let’s secure your SAP landscape together.

          </p>
        </div>

        <Link to="/about" className="button-green ">
          <span>Learn More </span>
          <span>
            <i className="bi bi-arrow-up"></i>
          </span>
        </Link>
      </section>
      {/* image-cta End */}

      {/* FAQs section start */}
      <FAQTemplate title="FAQs" faqs={faqs} />
      {/* FAQs section end */}

      <Footer />
    </div>
  );
}

export default Services;
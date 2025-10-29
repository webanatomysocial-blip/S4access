// import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "../css/Services.css"
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';
// import ServiceSection from '../components/ServiceSection.jsx';
import FAQTemplate from '../components/FAQTemplate.jsx';
import ServiceTabs from '../components/ServiceTabs.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


function Services() {

  const faqs = [
    {
      question: 'What SAP Access Management challenges do your services address?',
      answer: 'We provide end-to-end services—from design and implementation to ongoing operations—bringing deep, market-scarce expertise to address critical challenges such as designing evergreen SAP access management, preventing segregation of duties (SoD) conflicts, controlling unauthorized access, reducing license costs, ensuring regulatory compliance, and adapting to evolving business processes or organizational changes like mergers.'
    },
    {
      question: 'How do your services help prevent security risks in SAP systems?',
      answer: 'Our solutions combine automated risk analysis, continuous monitoring, SoD conflict detection, role redesign, and firefighter log reviews to proactively identify and remediate security vulnerabilities before they lead to breaches or compliance issues.'
    },
    {
      question: 'Can your services simplify the management of SAP authorizations?',
      answer: 'Yes. By applying best practices across governance, processes, and technology, we simplify authorizations—ensuring each user has the appropriate level of system access while reducing administrative burden.'
    },
    {
      question: 'How do you handle SAP Access challenges during business reorganizations or M&A?',
      answer: 'With extensive experience in handling these critical transitions, we understand that time is of the essence. As a specialist company, we can act quickly and decisively. We provide structured support for process changes, role realignment, and system integrations. Our experts ensure that access policies are swiftly and accurately realigned to reflect new organizational structures—maintaining compliance and minimizing disruption throughout the change.'
    },
    {
      question: 'Do your services help with SAP licensing challenges?',
      answer: 'Absolutely. We perform license usage analysis, identify unused or underutilized licenses, and recommend optimized license assignments. This helps reduce licensing costs and ensures compliance during audits.'
    },
    {
      question: 'What makes your approach effective in solving access management challenges?',
      answer: 'We always begin by analyzing the root causes behind access management challenges—ensuring we don’t just treat symptoms but solve the real issues. Based on this insight, we create realistic, actionable plans and design sustainable, evergreen SAP access management solutions.'
    },
    {
      question: 'Are your solutions adaptable to industry-specific compliance requirements?',
      answer: 'Yes. Our solutions are fully adaptable to industry-specific compliance requirements. With proven experience across key industries, we tailor our approach to address their unique challenges—ensuring access controls and processes meet all relevant standards.'
    },
    {
      question: 'How do your services ensure continuous improvement in SAP Access Management?',
      answer: 'Over the years, we’ve developed efficient householding methods in close cooperation with our customers. Our service ensures continuous improvement in SAP Access Management through root cause analysis, regular reviews, and iterative enhancements—keeping your access design efficient, compliant, and evergreen.'
    }
  ];


  return (



    <div>
       <Helmet>

        <title>SAP Access Services | Governance & Compliance by s4access</title>
        <meta name="title" content="SAP Access Services | Governance & Compliance by s4access" />
        <meta name="description" content="Explore s4access’s SAP access services: access management, security
audits, and compliance support to protect your enterprise and streamline governance." />

      </Helmet>
      <Header />


      {/* services-page-hero-banner start */}
      <section className="services-page-hero-banner">

        <div className="services-hero-left">
          <p className="big-heading-text-white">
            Services designed to solve <br className='only-windows' />
            SAP access management challenges
          </p>
          <p className="text-white">
            We deliver services—from design and implementation to ongoing operations—in true partnership with our clients to achieve lasting results.
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
      {/* <section className="partners-section">
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

      </section> */}
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
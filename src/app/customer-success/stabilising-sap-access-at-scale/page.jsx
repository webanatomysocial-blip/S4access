import Image from "next/image";
import React from 'react';
import Link from "next/link";
import '../../../css/Coustomer.css';
import { FaShieldAlt, FaUsers, FaAward, FaBolt, FaCogs, FaHandshake } from 'react-icons/fa';
import img1 from '../../../assets/images/success-images/1.jpg';
import img2 from '../../../assets/images/success-images/2.jpg';

export const metadata = {
  title: "SAP S/4HANA Access Redesign for Global Manufacturer | s4access",
  description: "How s4access redesigned SAP authorization concept for a global manufacturer — 4,000+ users live across 6 European countries with less than 5% defect rate.",
  openGraph: {
    images: [
      { url: img1.src }
    ]
  }
};


const StabilisingSAPAccessAtScale = () => {
  return (
    <div>
      
      
      <section className="Coustomer-success-page-hero-section" style={{justifyContent:'normal',gap:'225px'}}>
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">Stabilising SAP Access at Scale During an <Link href="/blogs/building-display-roles-the-smart-way-in-sap-s4hana" style={{ color: 'inherit', textDecoration: 'underline' }}>S/4HANA</Link> Transformation</h1>
          <p className="text-white">
            A global health and hygiene products manufacturer was in the middle of an SAP <Link href="/blogs/building-display-roles-the-smart-way-in-sap-s4hana" style={{ color: 'inherit', textDecoration: 'underline' }}>S/4HANA</Link> pilot when significant issues emerged around user authorizations. The existing authorization concept was not scalable, leading to widespread segregation of duties (SoD) conflicts and difficult role maintenance.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <Image src={img1} alt="S/4HANA Transformation" style={{width:'540px'}}/>
        </div>
      </section>
      
      <section className="Coustomer-success-page-stats-section">
        <div className="Coustomer-success-page-stat-item">
          <h2>6</h2>
          <p>European Countries</p>
        </div>
        <div className="Coustomer-success-page-stat-item">
          <h2>14</h2>
          <p>Experts</p>
        </div>
        <div className="Coustomer-success-page-stat-item">
          <h2>4000+</h2>
          <p>Users Live</p>
        </div>
      </section>

      <div className="card-con-heading">

        <div className="solution-intro-card-2">
          <h2 className='big-heading-text-white'>The Challenge</h2>
          <p className='text-white'>
            The internal maintenance team struggled to keep up with frequent changes and user assignments, and the pilot environment no longer met compliance requirements. Without intervention, the authorization model would have become a major risk as the S/4HANA rollout expanded.
          </p>
        </div>
      </div>
      <section className="Coustomer-success-page-scope-of-service-section">
        <div className="Coustomer-success-page-card">

          <h2 className='big-heading-text-black' style={{ marginTop: '0px' }}>Our Approach</h2>
          <p className='text-black'>
            s4access was engaged to redesign the <Link href="/services/authorisation-concept-owner" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP authorization concept</Link> to better support both compliance and operational needs. We designed a customer-specific S/4 authorization and SoD concept, built around simplified and clearly structured SoD roles.
          </p>
          <p className='text-black'>
            Rather than replacing everything at once, the new model was introduced in a phased manner. Existing pilot users were retrofitted step by step, allowing business operations to continue without disruption. Once validated, the new <Link href="/services/authorisation-concept-owner" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP authorization concept</Link> was rolled out in multiple deployment waves across six European countries.
            <br />
            <br />
            The engagement started in 2024 and continues today, with a dedicated team of approximately 14 specialists supporting the customer.
          </p>
        </div>
        <div className="Coustomer-success-page-card-right">
          <Image src={img2} alt="Our Approach" />
        </div>
      </section>

      <section className="Coustomer-success-page-Achievements-section">
        <h2 className="big-heading-text-black">Results and Impact</h2>
        <div className="Coustomer-success-page-achievements-grid">
          <div className="Coustomer-success-page-achievement-card">
            <FaShieldAlt size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Stable and scalable model</h3>
            <p className="small-text-black">A robust authorization model now supports the customer’s complex S/4 landscape.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaUsers size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">4,000+ users live</h3>
            <p className="small-text-black">Over 4,000 users are already successfully operating under the new concept.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaAward size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">High quality delivery</h3>
            <p className="small-text-black">In the most recent go-live, less than 5% of defects were related to authorization issues.</p>
          </div>
        </div>
        <div className="Coustomer-success-page-achievements-grid">
          <div className="Coustomer-success-page-achievement-card">
            <FaBolt size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Faster response times</h3>
            <p className="small-text-black">More controlled change process for role maintenance and quicker support.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaCogs size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Pragmatic solutions</h3>
            <p className="small-text-black">Solutions tailored specifically to the customer's unique environment and needs.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaHandshake size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Strategic advisor</h3>
            <p className="small-text-black">Continued support as a trusted advisor shaping long-term SAP security architecture.</p>
          </div>
        </div>
      </section>

      <section className="CustomerSuccess-service-cta">
        <div className="CustomerSuccess-cta-content">
          <h2 className="big-heading-text-white">
            Customer Feedback
          </h2>
          <p className="text-white">
            The customer has appreciated the structured approach to streamlining their authorization concept, as well as the quality and speed of delivery. s4access continues to support the customer not only operationally, but also as a trusted advisor.
          </p>
        </div>
        <div className="CustomerSuccess-cta-actions">
          <Link href="/Contact" className="button-green">
            Contact Us
          </Link>
          <Link href="/customer-success" className="border-button">
            Case Studies
          </Link>
        </div>
      </section>

          </div>
  );
};

export default StabilisingSAPAccessAtScale;

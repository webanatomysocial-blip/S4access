import Image from "next/image";
import React from 'react';
// import img22 from '../../../assets/images/About-img/Top-banner-img22.jpg';
import Link from "next/link";
import '../../../css/Coustomer.css';
import { FaUserMinus, FaChartPie, FaShieldAlt, FaExchangeAlt, FaUserCog, FaFileAlt } from 'react-icons/fa';
import img10 from '../../../assets/images/success-images/10.jpg';
import img11 from '../../../assets/images/success-images/11.jpg';

export const metadata = {
  alternates: {
    canonical: "/customer-success/sap-authorisation-concept-owner",
  },
  title: "SAP Licence Optimisation for Steel Manufacturer",
  description: "See how s4access restructured SAP authorization ownership, reducing SAP_ALL usage, optimizing licenses, and strengthening compliance.",
  openGraph: {
    images: [
      { url: img10.src }
    ]
  }
};



const SAPAuthorizationConceptOwner = () => {
  return (
    <div>
      
      
      <section className="Coustomer-success-page-hero-section">
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">SAP Authorization Concept Owner Service</h1>
          <p className="text-white">
            We took on SAP Authorization Concept Owner service for a leading steel manufacturer. With their SAP environment stuck in “project mode,” user and authorization management lacked structure. Our task was to bring consistency, security, and efficiency.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <Image src={img11} alt="SAP Success" loading="eager" priority />
        </div>
      </section>


      <section className="Coustomer-success-page-scope-of-service-section">

        <div className="Coustomer-success-page-card">
          <h2 className='big-heading-text-black'>Scope of Service</h2>
          <p className='text-black'>
            Our <Link href="/services/authorisation-concept-owner" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP Authorization Concept Owner service</Link> has delivered comprehensive support, including:
          </p>
          <ul className='text-black'>
            <li>Passive user removals</li>
            <li><Link href="/services/sap-license-optimisation" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP user license optimization</Link> and measurement</li>
            <li>Access reviews for selected users and authorization roles</li>
            <li>Transaction code usage analysis and clean-up</li>
            <li>Evidence gathering for external audits</li>
            <li>Issue resolution based on audit findings</li>
            <li>Maintenance of the authorization concept</li>
            <li>Instruction updates for the third-party authorization team</li>
            <li>Monitoring and support for the third-party authorization team</li>
            <li>Facilitating communication between business units and the authorization team regarding access needs</li>
          </ul>
        </div>


        <div className="Coustomer-success-page-card-right">
          <Image src={img10} alt="SAP Success" />

        </div>



      </section>


      <section className="Coustomer-success-page-Achievements-section">
        <h2 className="big-heading-text-black">Achievements & Benefits</h2>
        <div className="Coustomer-success-page-achievements-grid">
          <div className="Coustomer-success-page-achievement-card">
            <FaUserMinus size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Structured passive user removal</h3>
            <p className="small-text-black">Eliminated ad hoc practices, ensuring consistent and secure deactivation.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaChartPie size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Optimized SAP license usage</h3>
            <p className="small-text-black">Enabled more accurate license measurement and cost allocation across HR divisions.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaShieldAlt size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Reduced SAP_ALL profile usage</h3>
            <p className="small-text-black">Aligned with external audit recommendations to enhance system security.</p>
          </div>
        </div>
        <div className="Coustomer-success-page-achievements-grid">
          <div className="Coustomer-success-page-achievement-card">
            <FaExchangeAlt size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Streamlined role transport processes</h3>
            <p className="small-text-black">Simplified development workflows by consolidating transport requests.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaUserCog size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Improved role management</h3>
            <p className="small-text-black">Segregated critical actions (e.g., debugging) into dedicated roles for better control.</p>
          </div>
          <div className="Coustomer-success-page-achievement-card">
            <FaFileAlt size={40} color="#003377" />
            <h3 className="sub-big-heading-text-black">Enhanced documentation</h3>
            <p className="small-text-black">Provided clearer, more actionable instructions for the third-party authorization team.</p>
          </div>
        </div>
      </section>






      <section className="CustomerSuccess-service-cta">
  
    <div className="CustomerSuccess-cta-content">
      <h2 className="big-heading-text-white" style={{ textTransform: 'none' }} >
        Customer Comments About <br className='only-windows' /> s4access Service
      </h2>
      <p className="text-white">
       Reliable; understands customer needs and tailors the service accordingly; human-centered and straightforward; continuous and patient/long-term effort to improve the customer's Access Management.

      </p>
    </div>
    <div className="CustomerSuccess-cta-actions">
      <Link href="/contact" className="button-green">
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

export default SAPAuthorizationConceptOwner;
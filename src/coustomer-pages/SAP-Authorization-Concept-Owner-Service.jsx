import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "../css/Coustomer.css";
import { FaUserMinus, FaChartPie, FaShieldAlt, FaExchangeAlt, FaUserCog, FaFileAlt } from 'react-icons/fa';
import img10 from "../assets/images/success-images/10.jpg";
import img11 from "../assets/images/success-images/11.jpg";


const SAPAuthorizationConceptOwner = () => {
  return (
    <div>
      <Helmet>
        <title>SAP Licence Optimisation for Steel Manufacturer | s4access</title>
        <meta name="title" content="SAP Licence Optimisation for Steel Manufacturer | s4access" />
        <meta name="description" content="How s4access structured SAP authorization concept ownership for a steel manufacturer reducing SAP_ALL usage, optimising licences and eliminating audit risks." />
        <meta name="keywords" content="sap authorization concept owner, sap licence optimisation, sap_all profile reduction, sap passive user removal, sap audit compliance, sap role management, sap access governance, sap license optimization, sap access management case study, outsourced sap access management" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://s4access.com/customer-success/sap-authorisation-concept-owner",
                "headline": "SAP Licence Optimisation for Steel Manufacturer | s4access",
                "description": "How s4access structured SAP authorization concept ownership for a steel manufacturer — reducing SAP_ALL usage, optimising licences and eliminating audit risks.",
                "url": "https://s4access.com/customer-success/sap-authorisation-concept-owner",
                "publisher": {
                  "@type": "Organization",
                  "name": "s4access",
                  "url": "https://s4access.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://s4access.com/images/black-logo-400.png",
                    "width": 400,
                    "height": 400
                  }
                },
                "author": {
                  "@type": "Organization",
                  "name": "s4access",
                  "url": "https://s4access.com"
                },
                "about": [
                  "SAP Authorization Concept Owner",
                  "SAP Licence Optimisation",
                  "SAP Access Management",
                  "SAP_ALL Profile Reduction",
                  "SAP Audit Compliance"
                ],
                "mentions": {
                  "@type": "Organization",
                  "name": "Steel Manufacturer",
                  "industry": "Steel Manufacturing"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://s4access.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Customer Success",
                    "item": "https://s4access.com/customer-success"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "SAP Licence Optimisation for Steel Manufacturer",
                    "item": "https://s4access.com/customer-success/sap-authorisation-concept-owner"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />

      <section className="Coustomer-success-page-hero-section">
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">SAP Authorization Concept Owner Service</h1>
          <p className="text-white">
            We took on <Link to="/services/authorisation-concept-owner" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP Authorization Concept Owner service</Link> for a leading steel manufacturer. With their SAP environment stuck in “project mode,” user and authorization management lacked structure. Our task was to bring consistency, security, and efficiency.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <img src={img11} alt="SAP Success" />
        </div>
      </section>


      <section className="Coustomer-success-page-scope-of-service-section">

        <div className="Coustomer-success-page-card">
          <h2 className='big-heading-text-black'>Scope of Service</h2>
          <p className='text-black'>
            Our <Link to="/services/authorisation-concept-owner" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP Authorization Concept Owner service</Link> has delivered comprehensive support, including:
          </p>
          <ul className='text-black'>
            <li>Passive user removals</li>
            <li><Link to="/services/sap-license-optimisation" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP user license optimization</Link> and measurement</li>
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
          <img src={img10} alt="SAP Success" />

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
      <h2 className="big-heading-text-white">
        Customer Comments About <br className='only-windows' /> s4access Service
      </h2>
      <p className="text-white">
       Reliable; understands customer needs and tailors the service accordingly; human-centered and straightforward; continuous and patient/long-term effort to improve the customer's Access Management.

      </p>
    </div>
    <div className="CustomerSuccess-cta-actions">
      <Link to="/Contact" className="button-green">
        Contact Us
      </Link>
      <Link to="/customer-success" className="border-button">
        Case Studies
      </Link>
    </div>

</section>



      <Footer />
    </div>
  );
};

export default SAPAuthorizationConceptOwner;
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "../css/Coustomer.css";
import img1 from "../assets/images/success-images/1.jpg"
import img2 from "../assets/images/success-images/2.jpg"
import img3 from "../assets/images/success-images/3.jpg"

const S4HanaFioriTransformation = () => {
    return (
        <div>
            <Helmet>
                <title>From Failed Go-Live to Full Fiori Adoption | s4access</title>
                <meta name="title" content="From Failed Go-Live to Full Fiori Adoption | s4access" />
                <meta name="description" content="How s4access rescued a failed SAP S/4HANA go-live reengineered role design, GRC implementation, SoD checks and full transition from SAP GUI to Fiori." />
                <meta name="keywords" content="sap fiori transformation, sap s/4hana fiori, sap role design, sap grc implementation, sap fiori adoption, sap go-live recovery, sap access management, segregation of duties sap, sap fiori authorisation, sap s4hana implementation" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "@id": "https://s4access.com/customer-success/s4-hana-fiori-transformation",
                                "headline": "From Failed Go-Live to Full Fiori Adoption | s4access",
                                "description": "How s4access rescued a failed SAP S/4HANA go-live — reengineered role design, GRC implementation, SoD checks and full transition from SAP GUI to Fiori.",
                                "url": "https://s4access.com/customer-success/s4-hana-fiori-transformation",
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
                                    "SAP S/4HANA Implementation",
                                    "SAP Fiori Transformation",
                                    "SAP Role Design",
                                    "GRC Implementation",
                                    "Segregation of Duties",
                                    "User Access Management",
                                    "SAP Access Governance"
                                ],
                                "mentions": {
                                    "@type": "Organization",
                                    "name": "Global Home Furnishing Brand",
                                    "description": "Global home furnishing brand undergoing SAP S/4HANA and Fiori transformation"
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
                                        "name": "From Failed Go-Live to Full Fiori Adoption",
                                        "item": "https://s4access.com/customer-success/s4-hana-fiori-transformation"
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
                    <h1 className="big-heading-text-white">S/4 HANA/Fiori Digital Transformation</h1>
                    <p className="text-white">
                        The customer initiated the implementation of SAP S/4 with a large international service integrator. However, the access management component was inadequately planned, which contributed to a failed go-live during Phase 1. Additionally, the SAP Fiori user experience (UX) and acceptance were subpar, leading to dissatisfaction among end users and resistance to transitioning from SAP GUI to Fiori.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <img src={img1} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                        The s4access team, together with the customer's in-house R&A team, conducted an in-depth review of four key areas: Governance, User Management, Process/Compliance, and Roles & Authorizations. Based on this analysis, we reengineered the entire role design and implemented a <Link to="/services/sap-access-management-automation" style={{ color: 'inherit', textDecoration: 'underline' }}>user access management tool</Link>, incorporating GRC capabilities. This approach ensured seamless user access provisioning with SOD (Segregation of Duties) checks. Additionally, we revamped the Fiori UX and ramp-up process to enhance user interaction with the Fiori Launchpad, improving overall usability.
                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <img src={img2} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>




            <section className="Coustomer-success-page-Achievements-section-diff-content">
                <div className="Coustomer-success-inner-achievements-right">
                    <img src={img3} alt="S/4 HANA Fiori Transformation" />
                </div>
                <div className="Coustomer-success-inner-achievements-left">
                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        As a result of these initiatives, the second R&A go-live was successfully achieved, followed by several additional rollouts with fewer defects and reduced challenges. Fiori adoption significantly increased, enabling the successful execution of the project’s "Fiori First" mandate—resulting in a complete transition of all end users from <Link to="/blogs/best-practices-and-pitfalls" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP GUI to Fiori.</Link>
                    </p>
                </div>
            </section>

            <section className="CustomerSuccess-service-cta">
              
                <div className="CustomerSuccess-cta-content">
                  <h2 className="big-heading-text-white">
                    Customer Comments About <br className='only-windows' /> s4access Service
                  </h2>
                  <p className="text-white">
                   “Without the help of the specialist company, we would have been completely stuck.” <br /> – SAP Manager

            
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

export default S4HanaFioriTransformation;
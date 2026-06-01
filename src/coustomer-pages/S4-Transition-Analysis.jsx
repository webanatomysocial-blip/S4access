import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "../css/Coustomer.css";
import img4 from "../assets/images/success-images/4.jpg"
import img5 from "../assets/images/success-images/5.jpg"
import img6 from "../assets/images/success-images/6.jpg"



const S4TransitionAnalysis = () => {
    return (
        <div>
            <Helmet>
                <title>SAP S/4 Transition Analysis Zero Disruptions | s4access</title>
                <meta name="title" content="SAP S/4 Transition Analysis Zero Disruptions | s4access" />
                <meta name="description" content="A multinational material handling company used SAP S/4 transition analysis to plan resources optimally, assess Fiori readiness and prevent project disruptions" />
                <meta name="keywords" content="sap s/4 transition analysis, sap s4hana upgrade, sap fiori authorisation, sap access management review, sap s4hana implementation, sap authorization concept, sap resource planning, sap s4 migration, sap access management consulting, sap access management specialists" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "@id": "https://s4access.com/customer-success/s4-transition-analysis",
                                "headline": "SAP S/4 Transition Analysis Zero Disruptions | s4access",
                                "description": "A multinational material handling company used SAP S/4 transition analysis to plan resources optimally, assess Fiori readiness and prevent project disruptions.",
                                "url": "https://s4access.com/customer-success/s4-transition-analysis",
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
                                    "SAP S/4 Transition Analysis",
                                    "SAP S/4HANA Upgrade",
                                    "SAP Fiori Authorisation",
                                    "SAP Authorization Concept",
                                    "SAP Resource Planning"
                                ],
                                "mentions": {
                                    "@type": "Organization",
                                    "name": "Material Handling Solutions Company",
                                    "description": "Multinational material handling solutions company preparing for SAP S/4 upgrade"
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
                                        "name": "SAP S/4 Transition Analysis Zero Disruptions",
                                        "item": "https://s4access.com/customer-success/s4-transition-analysis"
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
                    <h1 className="big-heading-text-white">Material Handling Solutions Company - S/4 Transition Analysis</h1>
                    <p className="text-white">
                        A multinational material handling solutions company was preparing for their S/4 upgrade project. They needed to plan ahead for the Fiori introduction as well as the authorization work in a setup where the aim was to perform a technical upgrade and only implement some new mandatory features.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <img src={img4} alt="S/4 Transition Analysis" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                       A senior team analysed the authorization setup of the customers SAP system and familiarised themselves with the upgrade project plan, scope, timeline and organization. Also discussions were held with key stakeholders to analyse the customer targets in the best way. The work was carried out in a month by the team and the deliverable was a power point presentation and a resource plan for the transition to S4.

                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <img src={img5} alt="S/4 Transition Analysis" />
                </div>
            </section>

            <section className="Coustomer-success-page-Achievements-section-diff-content">
                <div className="Coustomer-success-inner-achievements-right">
                    <img src={img6} alt="S/4 Transition Analysis" />
                </div>
                <div className="Coustomer-success-inner-achievements-left">
                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        The customer understood the impact of the different decisions they had taken earlier and what work would be involved in the transition project itself. They were able to resource the program in an optimal way and prepare for the work in a timely manner. Without the analysis, there would have been key areas left out that would have caused disruptions in the transition itself, as well as unnecessary work done.
                    </p>
                </div>
            </section>

           <section className="CustomerSuccess-service-cta">
             
               <div className="CustomerSuccess-cta-content">
                 <h2 className="big-heading-text-white" style={{ textTransform: 'none' }}>
                   Customer Comments About <br className='only-windows' /> s4access Service
                 </h2>
                 <p className="text-white">
                 “ We learned so much in this work that resulted in clear savings in the program itself but as well in much higher quality in the implementation. We got a good through analysis of the system and could prepare better hence.” <br /> – SAP Director

           
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

export default S4TransitionAnalysis;
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import "../css/Coustomer.css";

const S4HanaFioriTransformation = () => {
    return (
        <div>
            <Header />

            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <p className="big-heading-text-white">S/4 HANA/Fiori Digital Transformation</p>
                    <p className="text-white">
                        The customer initiated the implementation of SAP S/4 with a large international service integrator. However, the access management component was inadequately planned, which contributed to a failed go-live during Phase 1. Additionally, the SAP Fiori user experience (UX) and acceptance were subpar, leading to dissatisfaction among end users and resistance to transitioning from SAP GUI to Fiori.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <img src={img22} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                        The s4access team, together with the customer's in-house R&A team, conducted an in-depth review of four key areas: Governance, User Management, Process/Compliance, and Roles & Authorizations. Based on this analysis, we reengineered the entire role design and implemented a user access management tool, incorporating GRC capabilities. This approach ensured seamless user access provisioning with SOD (Segregation of Duties) checks. Additionally, we revamped the Fiori UX and ramp-up process to enhance user interaction with the Fiori Launchpad, improving overall usability.
                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <img src={img22} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>

            <section className="Coustomer-success-page-Achievements-section-diff-content">
                <div className="Coustomer-success-inner-achievements-right">
                    <img src={img22} alt="S/4 HANA Fiori Transformation" />
                </div>
                <div className="Coustomer-success-inner-achievements-left">
                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        As a result of these initiatives, the second R&A go-live was successfully achieved, followed by several additional rollouts with fewer defects and reduced challenges. Fiori adoption significantly increased, enabling the successful execution of the project’s "Fiori First" mandate—resulting in a complete transition of all end users from SAP GUI to Fiori.
                    </p>
                </div>
            </section>

            <section className="CustomerSuccess-service-cta">
                <div className="CustomerSuccess-cta-content">
                    <h2 className="big-heading-text-white">
                        Customer Comments About <br /> S4Access Consulting
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

export default S4HanaFioriTransformation;
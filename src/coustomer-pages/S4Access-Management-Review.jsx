import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import "../css/Coustomer.css";

const S4AccessManagementReview = () => {
    return (
        <div>
            <Header />

            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <p className="big-heading-text-white">S/4 Access Management Review</p>
                    <p className="text-white">
                        The customer had initiated an SAP S/4 implementation project in collaboration with a large international service integrator. During the process, an external audit uncovered fundamental issues in SAP access management, raising concerns at the top management level. To address these concerns and gain a clearer understanding of the situation’s severity, the customer engaged s4access, a specialist firm, to conduct a targeted review and identify actionable solutions.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <img src={img22} alt="S/4 Access Management" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                        The s4access team carried out a comprehensive assessment across the three key dimensions of SAP access management: Governance, Processes, and Technical Configuration. The review methodology included stakeholder interviews, system diagnostics, and in-depth data analysis using the proprietary s4access SAP Access Analytics Platform.
                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <img src={img22} alt="S/4 Access Management" />
                </div>
            </section>

            <section className="Coustomer-success-page-Achievements-section-diff-content">


                <div className="Coustomer-success-inner-achievements-right">
                    <img src={img22} alt="S/4 Access Management" />
                </div>


                <div className="Coustomer-success-inner-achievements-left">

                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        The review uncovered multiple issues along with their underlying root causes. Based on these findings, a prioritized improvement roadmap was developed to address the most critical problems and ensure alignment with external audit requirements. This provided the organization with a clear path forward to strengthen its SAP access management framework and reduce risk.
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

export default S4AccessManagementReview;
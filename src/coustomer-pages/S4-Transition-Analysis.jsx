import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// import img22 from '../assets/images/About-img/Top-banner-img22.jpg';
import { Link } from 'react-router-dom';
import "../css/Coustomer.css";
import img4 from "../assets/images/success-images/4.jpg"
import img5 from "../assets/images/success-images/5.jpg"
import img6 from "../assets/images/success-images/6.jpg"



const S4TransitionAnalysis = () => {
    return (
        <div>
            <Header />

            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <p className="big-heading-text-white">Material Handling Solutions Company - S/4 Transition Analysis</p>
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
                        A senior consultant analyzed the authorization setup of the customer’s SAP system and familiarized himself with the upgrade project plan, scope, timeline, and organization. Discussions were held with key stakeholders to analyze the customer’s targets in the best way. The work was carried out in a month by the senior consultant, and the deliverable was a PowerPoint presentation and a resource plan for the transition to S/4.
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
                    <h2 className="big-heading-text-white">
                        Customer Comments About <br /> S4Access Consulting
                    </h2>
                    <p className="text-white">
                        We learned so much in this small work that resulted in clear savings in the program itself but also in much higher quality in the implementation. We got a thorough analysis of the system and could prepare better as a result.
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
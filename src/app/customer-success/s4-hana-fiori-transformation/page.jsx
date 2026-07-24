import Image from "next/image";
import React from 'react';
// import img22 from '../../../assets/images/About-img/Top-banner-img22.jpg';
import Link from "next/link";
import '../../../css/Coustomer.css';
import img1 from '../../../assets/images/success-images/1.jpg'
import img2 from '../../../assets/images/success-images/2.jpg'
import img3 from '../../../assets/images/success-images/3.jpg'

export const metadata = {
  alternates: {
    canonical: "/customer-success/s4-hana-fiori-transformation",
  },
  title: "From Failed Go-Live to Full Fiori Adoption | s4access",
  description: "How s4access rescued a failed SAP S/4HANA go-live reengineered role design, GRC implementation, SoD checks and full transition from SAP GUI to Fiori.",
  openGraph: {
    images: [
      { url: img1.src }
    ]
  }
};


const S4HanaFioriTransformation = () => {
    return (
        <div>
            
            
            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <h1 className="big-heading-text-white">S/4 HANA/Fiori Digital Transformation</h1>
                    <p className="text-white">
                        The customer initiated the implementation of SAP S/4 with a large international service integrator. However, the access management component was inadequately planned, which contributed to a failed go-live during Phase 1. Additionally, the SAP Fiori user experience (UX) and acceptance were subpar, leading to dissatisfaction among end users and resistance to transitioning from SAP GUI to Fiori.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <Image src={img1} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                        The s4access team, together with the customer's in-house R&A team, conducted an in-depth review of four key areas: Governance, User Management, Process/Compliance, and Roles & Authorizations. Based on this analysis, we reengineered the entire role design and implemented a <Link href="/services/sap-access-management-automation" style={{ color: 'inherit', textDecoration: 'underline' }}>user access management tool</Link>, incorporating GRC capabilities. This approach ensured seamless user access provisioning with SOD (Segregation of Duties) checks. Additionally, we revamped the Fiori UX and ramp-up process to enhance user interaction with the Fiori Launchpad, improving overall usability.
                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <Image src={img2} alt="S/4 HANA Fiori Transformation" />
                </div>
            </section>




            <section className="Coustomer-success-page-Achievements-section-diff-content">
                <div className="Coustomer-success-inner-achievements-right">
                    <Image src={img3} alt="S/4 HANA Fiori Transformation" />
                </div>
                <div className="Coustomer-success-inner-achievements-left">
                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        As a result of these initiatives, the second R&A go-live was successfully achieved, followed by several additional rollouts with fewer defects and reduced challenges. Fiori adoption significantly increased, enabling the successful execution of the project’s "Fiori First" mandate—resulting in a complete transition of all end users from <Link href="/blogs/best-practices-and-pitfalls" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP GUI to Fiori.</Link>
                    </p>
                </div>
            </section>

            <section className="CustomerSuccess-service-cta">
              
                <div className="CustomerSuccess-cta-content">
                  <h2 className="big-heading-text-white" style={{ textTransform: 'none' }}>
                    Customer Comments About <br className='only-windows' /> s4access Service
                  </h2>
                  <p className="text-white">
                   “Without the help of the specialist company, we would have been completely stuck.” <br /> – SAP Manager

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

export default S4HanaFioriTransformation;
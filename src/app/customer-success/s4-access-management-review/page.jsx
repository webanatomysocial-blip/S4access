import Image from "next/image";
import React from 'react';
// import img22 from '../../../assets/images/About-img/Top-banner-img22.jpg';
import Link from "next/link";
import '../../../css/Coustomer.css';
import img7 from '../../../assets/images/success-images/7.jpg';
import img8 from '../../../assets/images/success-images/8.jpg';
import img9 from '../../../assets/images/success-images/9.jpg';

export const metadata = {
  title: "Critical SAP Access Issues Found How s4access Fixed Them | s4access",
  description: "External audit uncovered critical SAP S/4 access issues. s4access delivered governance, process and technical review with prioritized improvement roadmap.",
  openGraph: {
    images: [
      { url: img7.src }
    ]
  }
};




const S4AccessManagementReview = () => {
    return (
        <div>
            
            
            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <h1 className="big-heading-text-white">S/4 Access Management Review</h1>
                    <p className="text-white">
                        The customer had initiated an SAP S/4 implementation project in collaboration with a large international service integrator. During the process, an external audit uncovered fundamental issues in SAP access management, raising concerns at the top management level. To address these concerns and gain a clearer understanding of the situation’s severity, the customer engaged s4access, a specialist firm, to conduct a targeted review and identify actionable solutions.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <Image src={img7} alt="S/4 Access Management" />
                </div>
            </section>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Project</h2>
                    <p className='text-black'>
                        The s4access team carried out a comprehensive assessment across the three key dimensions of SAP access management: Governance, Processes, and Technical Configuration. The review methodology included stakeholder interviews, system diagnostics, and in-depth data analysis using the proprietary s4access <Link href="/services/access-risk-sod-management" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP Access Analytics Platform.</Link>
                    </p>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <Image src={img8} alt="S/4 Access Management" />
                </div>
            </section>

            <section className="Coustomer-success-page-Achievements-section-diff-content">


                <div className="Coustomer-success-inner-achievements-right">
                    <Image src={img9} alt="S/4 Access Management" />
                </div>


                <div className="Coustomer-success-inner-achievements-left">

                    <h2 className="big-heading-text-black">Achievements & Benefits</h2>
                    <p className="text-black">
                        The review uncovered multiple issues along with their underlying root causes. Based on these findings, a prioritized improvement roadmap was developed to address the most critical problems and ensure alignment with external audit requirements. This provided the organization with a clear path forward to strengthen its <Link href="/services/outsourced-access-management" style={{ color: 'inherit', textDecoration: 'underline' }}>SAP access management framework</Link> and reduce risk.
                    </p>

                </div>



            </section>

           <section className="CustomerSuccess-service-cta">
             
               <div className="CustomerSuccess-cta-content">
                 <h2 className="big-heading-text-white" style={{ textTransform: 'none' }}>
                   Customer Comments About <br className='only-windows' /> s4access Service
                 </h2>
                 <p className="text-white">
                 “This review was totally something else we get from normal audits”<br /> – SAP Director

           
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

export default S4AccessManagementReview;
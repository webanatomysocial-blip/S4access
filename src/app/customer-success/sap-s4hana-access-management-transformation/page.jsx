import Image from "next/image";
import React from 'react';
import Link from "next/link";
import '../../../css/Coustomer.css';
import img10 from '../../../assets/images/success-images/S4HanaAccessManagementTransformation/1.jpg'
import img12 from '../../../assets/images/success-images/S4HanaAccessManagementTransformation/2.jpg'
import img13 from '../../../assets/images/success-images/S4HanaAccessManagementTransformation/3.jpg'

export const metadata = {
  title: "SAP S/4HANA Access Management Transformation | s4access",
  description: "Read how s4access helped a public sector organization successfully deliver a secure, audit-ready SAP S/4HANA access management transformation.",
  openGraph: {
    images: [
      { url: img10.src }
    ]
  }
};


const S4HanaAccessManagementTransformation = () => {
    return (
        <div>
            
            
            <section className="Coustomer-success-page-hero-section">
                <div className="Coustomer-success-page-hero-container-left">
                    <h1 className="big-heading-text-white">SAP S/4HANA Access Management Transformation</h1>
                    <p className="text-white">
                        The customer, a public sector organization, was preparing for a major SAP ECC to S/4HANA transformation in a complex multi-system landscape. Secure and reliable access management was important for the program’s success because user access permissions needed to be cleaned up and redesigned. s4access proved to be an ideal choice for the customer as a dedicated specialist partner to fully manage access in the S/4 transformation process.
                    </p>
                </div>
                <div className="Coustomer-success-page-hero-container-right">
                    <Image src={img10} alt="SAP S/4HANA Access Management Transformation" />
                </div>
            </section>
            <div className="solution-intro-card-2">
                <h2 className='big-heading-text-white'>The Challenge</h2>
                <p className='text-white'>
                    The organization found itself dealing with complicated and contradictory authorization settings. The customer had years of messy, overlapping access rights in their SAP system and couldn't find skilled experts to fix it internally. They needed to clean up all those authorization issues, migrate to S/4HANA with a fresh governance model, and go live compliant and audit-ready, without disrupting daily operations.

                </p>
            </div>

            <section className="Coustomer-success-page-scope-of-service-section">
                <div className="Coustomer-success-page-card">
                    <h2 className='big-heading-text-black'>Our Approach</h2>
                   
                    <p className='text-black' style={{ marginTop: '15px' }}>
s4access team was tasked with the responsibility of delivering an end-to-end SAP access management solution through the ECC to S/4HANA upgrade initiative. The delivery encompassed governance, process, and technical components of access management in a controlled manner.

                    </p>
                    <div className='text-black' style={{ marginTop: '15px' }}>
                        <strong>Key Activities:</strong>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li><strong>Authorisation concept alignment:</strong> Role and user analysis, redesign and cleanup of authorizations.</li>
                            <li style={{ marginTop: '5px' }}><strong>Access provisioning model setup:</strong> Structured governance and compliant access provisioning processes.</li>
                            <li style={{ marginTop: '5px' }}>The work was executed in parallel with the S/4 upgrade to ensure access management supported both project needs and uninterrupted business operations.
</li>
                        </ul>
                    </div>
                </div>
                <div className="Coustomer-success-page-card-right">
                    <Image src={img12} alt="Challenge and Approach" />
                </div>
            </section>

            <section className="Coustomer-success-page-Achievements-section-diff-content">
                <div className="Coustomer-success-inner-achievements-right">
                    <Image src={img13} alt="Results and Benefits" />
                </div>
                <div className="Coustomer-success-inner-achievements-left">
                    <h2 className="big-heading-text-black">Results & Benefits</h2>
                    <p className="text-black">
                        s4access successfully delivered a fully functioning and sustainable access management setup for the new S/4HANA environment, supporting both go-live readiness and long-term operational stability.
                    </p>
                    <ul className="text-black" style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>A structured and S/4-compliant access management model aligned with governance and audit requirements</li>
                        <li style={{ marginTop: '5px' }}>Cleaned-up and well-defined authorizations supporting business roles</li>
                        <li style={{ marginTop: '5px' }}>Controlled access provisioning during and after the upgrade</li>
                        <li style={{ marginTop: '5px' }}>Reduced access-related risk during a critical transformation phase</li>
                        <li style={{ marginTop: '5px' }}>Audit-ready access management at go-live with no remediation backlog</li>
                        <li style={{ marginTop: '5px' }}>Business-continuous transition, no disruptions to user access or operations</li>
                    </ul>
                </div>
            </section>

            <section className="CustomerSuccess-service-cta">
                <div className="CustomerSuccess-cta-content">
                    <h2 className="big-heading-text-white" style={{ textTransform: 'none' }}>
                        Customer Comments About <br className='only-windows' /> s4access Service
                    </h2>
                    <p className="text-white">
                        "A stable and secure S/4HANA go-live with access management fully under control, enabling the business to operate without disruptions and meeting compliance expectations from day one."
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

export default S4HanaAccessManagementTransformation;

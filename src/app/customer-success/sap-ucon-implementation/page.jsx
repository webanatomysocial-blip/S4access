import Image from "next/image";
import React from "react";
import Link from "next/link";
import '../../../css/Coustomer.css';
import img1 from '../../../assets/images/success-images/15.jpg';
import img2 from '../../../assets/images/success-images/17.jpg';
import img3 from '../../../assets/images/success-images/16.jpg';

export const metadata = {
  alternates: {
    canonical: "/customer-success/sap-ucon-implementation",
  },
  title: "SAP UCON Implementation Case Study | Improve SAP Security",
  description: "See how s4access delivered SAP UCON implementation to enhance security, control access, improve compliance, and reduce system risks.",
  openGraph: {
    images: [{ url: img1.src }]
  }
};


const SapUconImplementation = () => {
  return (
    <div>
      
      <section
        className="Coustomer-success-page-hero-section"
        style={{ justifyContent: "normal", gap: "225px" }}
      >
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">
            SAP UCON Implementation – Reducing the Attack Surface in Production
          </h1>
          <p className="text-white">
            SAP Unified Connectivity (UCON) helps reduce the attack surface by
            controlling access to Remote-Enabled Function Modules (RFMs).
            Recognising the security benefits, the customer decided to
            fast-track the implementation of UCON directly in the production
            environment.
          </p>
          <p className="text-white" style={{ marginTop: "10px" }}>
            s4access was selected as a partner to design and deliver the rollout
            in a controlled, step-by-step manner, fully aligned with SAP best
            practices.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <Image
            src={img1}
            alt="SAP UCON Implementation"
            style={{ width: "540px", height: "auto" }}
          />
        </div>
      </section>

      <div className="card-con-heading">
        <div className="solution-intro-card-2">
          <h2 className="big-heading-text-white">The Situation</h2>
          <p className="text-white">
            The customer recognized the need to reduce their SAP attack surface
            but wanted to ensure that business operations remained unaffected.
            The project required a highly controlled rollout in the production
            environment, following a data-driven approach rather than
            assumptions to ensure business continuity.
          </p>
        </div>
      </div>

      <section className="Coustomer-success-page-scope-of-service-section">
        <div className="Coustomer-success-page-card">
          <h2 className="big-heading-text-black" style={{ marginTop: "0px" }}>
            Our Approach
          </h2>
          <p className="text-black">
            The implementation followed a phased and risk-controlled approach,
            starting with RFC logging, followed by detailed evaluation and
            culminating in controlled activation in production using
            communication assemblies.
          </p>
          <p className="text-black">
            The setup was designed to capture a comprehensive view of all RFMs
            called within the system over an extended monitoring period. Key
            steps included:
          </p>
          <ul
            className="text-black"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              Detailed UCON concept design aligned with SAP best practices
            </li>
            <li>Phased RFC logging to capture real usage data</li>
            <li>Evaluation of all RFMs called within the system</li>
            <li>Selection of business-critical RFMs for whitelisting</li>
            <li>
              Controlled activation in production using communication assemblies
            </li>
            <li>
              Continuous monitoring to ensure zero disruption to integrations
            </li>
          </ul>
        </div>
        <div className="Coustomer-success-page-card-right">
          <Image src={img2} alt="UCON Delivery" />
        </div>
      </section>

      <section className="Coustomer-success-page-Achievements-section-diff-content">
        <div className="Coustomer-success-inner-achievements-right">
          <Image src={img3} alt="Results & Benefits" />
        </div>
        <div className="Coustomer-success-inner-achievements-left">
          <h2 className="big-heading-text-black">Results & Benefits</h2>
          <p className="text-black">
            s4access successfully deployed UCON in the customer's production
            environment, delivering immediate and measurable improvements to the
            security posture of the SAP landscape without disrupting existing
            integrations or business processes.
          </p>
          <ul className="text-black">
            <li>
              Over 47,000 RFC-enabled function modules (RFMs) were identified
              and logged using UCON.
            </li>
            <li>
              Only 1,500 RFMs were confirmed as business-critical and
              whitelisted.
            </li>
            <li>
              Less than 5% of the originally logged RFMs remained enabled for
              operational use.
            </li>
            <li>
              Achieved a significantly reduced attack surface with strict access
              limited to essential RFCs.
            </li>
          </ul>
        </div>
      </section>

      <section className="CustomerSuccess-service-cta">
        <div className="CustomerSuccess-cta-content">
          <h2 className="big-heading-text-white">Customer Feedback</h2>
          <p className="text-white">
            “The customer appreciated that UCON was implemented with zero
            disruptions to ongoing operations. From day one, the solution was
            supported by clear processes and continuous monitoring, ensuring a
            stable and sustainable setup in production.”
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

export default SapUconImplementation;

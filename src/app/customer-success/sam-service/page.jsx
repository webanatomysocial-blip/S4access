import Image from "next/image";
import React from "react";
import Link from "next/link";
import '../../../css/Coustomer.css';

import {
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaBolt,
  FaCogs,
  FaHandshake,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";
import img1 from '../../../assets/images/success-images/14.jpg';
import img2 from '../../../assets/images/success-images/13.jpg';
import img3 from '../../../assets/images/success-images/12.jpg';

export const metadata = {
  alternates: {
    canonical: "/customer-success/sam-service",
  },
  title: "Zero Audit Observations: SAP Access Management | s4access",
  description: "Achieved zero audit observations after outsourcing SAP access management structured governance, SoD automation and GDPR monitoring delivered by s4access.",
  openGraph: {
    images: [
      { url: img1.src }
    ]
  }
};


const HelsinkiSAMService = () => {
  return (
    <div>
      
      
      <section
        className="Coustomer-success-page-hero-section"
        style={{ justifyContent: "normal", gap: "225px" }}
      >
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">
            SAM Service: SAP Access Management for a Large Scandinavian
            City
          </h1>
          <p className="text-white">
            A large Scandinavian city had been running SAP for several years,
            but access rights issues were recurring: skilled SAP authorization
            consultants were difficult to source, training and retaining
            internal staff was challenging, and the overall concept (roles,
            processes, and responsibilities) was not sufficiently clear.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <Image
            src={img1}
            alt="Helsinki SAM Service"
            style={{ width: "540px" }}
          />
        </div>
      </section>

      <div className="card-con-heading">
        <div className="solution-intro-card-2">
          <h2 className="big-heading-text-white">The Challenge</h2>
          <p className="text-white">
            To clarify the situation and find the best possible operating model,
            the city decided to run a separate tender specifically for SAP
            access management. The goal was to overcome recursive access rights
            issues and the difficulty of sourcing skilled SAP authorization
            experts.
          </p>
        </div>
      </div>

      <section className="Coustomer-success-page-scope-of-service-section">
        <div className="Coustomer-success-page-card">
          <h2 className="big-heading-text-black" style={{ marginTop: "0px" }}>
            Our Approach
          </h2>
          <p className="text-black">
            s4access was selected as the supplier based on the tender results,
            combining the highest quality score with the lowest total cost. The
            outsourcing was delivered by adopting s4access’s proven SAP
            authorization management operating model and tailoring it together
            with the city.
          </p>
          <p className="text-black">
            The service provided a single, end-to-end service covering
            day-to-day operations and governance, designed to be transparent,
            controlled, and audit-ready. Key components included:
          </p>
          <ul
            className="text-black"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              Governance model (roles, responsibilities, decision-making, and
              approvals)
            </li>
            <li>Service concept and day-to-day ways of working</li>
            <li>SAP authorization management concept</li>
            <li>SAP Access management support and development services</li>
            <li>
              Automation tools to manage <Link href="/services/access-risk-sod-management" style={{ color: 'inherit', textDecoration: 'underline' }}>segregation of duties (SoD)</Link> conflicts
            </li>
            <li>Monitoring of production super users (privileged users)</li>
            <li>GDPR monitoring for the SAP system</li>
            <li><Link href="/services/sap-license-optimisation" style={{ color: 'inherit', textDecoration: 'underline' }}>License management</Link></li>
          </ul>
        </div>
        <div className="Coustomer-success-page-card-right">
          <Image src={img2} alt="SAP Access Management" />
        </div>
      </section>

      <section className="Coustomer-success-page-Achievements-section-diff-content">
        <div className="Coustomer-success-inner-achievements-right">
          <Image src={img3} alt="Results & Benefits" />
        </div>
        <div className="Coustomer-success-inner-achievements-left">
          <h2 className="big-heading-text-black">Results & Benefits</h2>
          <p className="text-black">
            The new operating model was successfully rolled out, and clear
            improvements were already achieved during the first year. Handling
            of access requests became more structured, service predictability
            improved, and authorization risks could be managed in a more
            systematic way.
            <br />
            <br />
            Internal customer satisfaction with the handling of access requests
            improved, while authorization-related risks were significantly
            reduced. The end-to-end model clarified ownership and controls,
            which improved both day-to-day efficiency and audit readiness.
          </p>
          <ul className="text-black">
            <li>
              During the first year, the operating model was stabilized and
              internal satisfaction with access request handling improved.
            </li>
            <li>
              Authorization risk levels decreased noticeably as governance and
              monitoring became systematic.
            </li>
            <li>
              In the second year, both internal and external audits concluded
              that there were no observations to raise regarding the operation.
            </li>
          </ul>
        </div>
      </section>

      <section className="CustomerSuccess-service-cta">
        <div className="CustomerSuccess-cta-content">
          <h2 className="big-heading-text-white">Customer Feedback</h2>
          <p className="text-white">
            “Working with s4access has shown us that SAP authorization
            management is truly a specialized domain that requires a dedicated
            expert partner. We have continued the collaboration for years, and
            it has been especially valuable for us: requirements have kept
            increasing, yet together we have consistently ensured the right
            level of service without cost increases.”
          </p>
          <p className="text-white" style={{ marginTop: "10px" }}>
            — SAP Service Owner, large Scandinavian city
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

export default HelsinkiSAMService;

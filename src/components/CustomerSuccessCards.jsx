import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

const CustomerSuccessCards = () => (
  <section className="Customer-success-stories-section">
    <div>
      <p className="big-heading-text-black">Customer Success Stories</p>
    </div>
    <div className="coustomer-success-container">
      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">SAP Authorization <br /> Concept Owner</p>
          <p className="small-text-white">
            Since 2019, we’ve managed SAP authorization for a leading steel manufacturer, streamlining user management and ensuring audit compliance. Our service optimized security and license usage effectively.
          </p>
        </div>
        <div>
          <Link to="/sap-authorisation-concept-owner" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>
      </div>

      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">S/4 Access <br /> Management Review</p>
          <p className="small-text-white">
            An external audit revealed critical SAP S/4 access issues for a client. s4access conducted a thorough review, delivering a prioritized roadmap to enhance governance and reduce risks.
          </p>
        </div>
        <div>
          <Link to="/s4-access-management-review" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>
      </div>

      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">S/4 Transition <br /> Analysis</p>
          <p className="small-text-white">
            For a material handling solutions company, we analyzed their SAP S/4 upgrade needs. Our work delivered a clear resource plan, preventing disruptions and optimizing the transition process.
          </p>
        </div>
        <div>
          <Link to="/s4-transition-analysis" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>
      </div>

      <div className="innercoustomer-success-container-left">
        <div className="innercoustomer-heading-cont">
          <p className="sub-heading-text-white">S/4 HANA/Fiori <br /> Transformation</p>
          <p className="small-text-white">
            We transformed SAP S/4 access and Fiori UX for a global home furnishing brand after a failed go-live. Our reengineered role design and GRC tools ensured a successful Fiori-first rollout.
          </p>
        </div>
        <div>
          <Link to="/s4-hana-fiori-transformation" className="read-more-btn">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerSuccessCards;
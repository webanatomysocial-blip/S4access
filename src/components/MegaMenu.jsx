import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaCogs, FaUserShield, FaUsersCog, FaUserTie, FaClipboardCheck, FaIdBadge, FaDraftingCompass, FaBalanceScale, FaUserSecret, FaShieldAlt, FaSyncAlt, FaArrowRight } from "react-icons/fa";
import "../css/Header.css";
import "../css/MegaMenu.css";

const services = [
  { category: "SAP Access Design", items: [
    { name: "SAP Access Management Review", icon: <FaClipboardCheck />, link: "/sap-access-management-review" },
    { name: "SOD Stratergy Approach", icon: <FaBalanceScale />, link: "/sod-stratergy-approach" },
    { name: "SAP Access Management Automation", icon: <FaSyncAlt />, link: "/sap-access-management-automation" }
  ]},
  { category: "SAP Access Projects", items: [
    { name: "SAP S/4 Access Implementation", icon: <FaCogs />, link: "/sap-s4-access-implementation" },
    { name: "SoD / Role redesign", icon: <FaDraftingCompass />, link: "/sod-role-redesign" },
    { name: "Reorganisation / M&A projects", icon: <FaProjectDiagram />, link: "/reorganisation-ma-projects" }
  ]},
  { category: "SAP Access Services", items: [
    { name: "Outsourced Access Management", icon: <FaUsersCog />, link: "/outsourced-access-management" },
    { name: "Authorisation Concept Owner", icon: <FaUserTie />, link: "/authorisation-concept-owner" },
    { name: "Security Architect", icon: <FaUserShield />, link: "/security-architect" }
  ]},
  { category: "SAP Access Solutions", items: [
    { name: "Access Risk SoD Management", icon: <FaBalanceScale />, link: "/access-risk-sod-management" },
    { name: "FF Log Review Automation", icon: <FaUserSecret />, link: "/ff-log-review-automation" },
    { name: "SAP Licence Optimisation", icon: <FaIdBadge />, link: "/sap-license-optimisation" }
  ]}
];

const MegaMenu = ({ show, setShow }) => {
  const hideTimeout = useRef();
  const [hoveredCategory, setHoveredCategory] = useState(0); 
  const handleMouseEnter = (index) => {
    clearTimeout(hideTimeout.current);
    setShow(true);
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => setShow(false), 200);
    setHoveredCategory(null);
  };

  React.useEffect(() => {
    if (show) {
      setHoveredCategory(0);
    }
  }, [show]);

  return (
    <div
      className={`megamenu${show ? " show" : ""}`}
      onMouseEnter={() => clearTimeout(hideTimeout.current)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="megamenu-content">
        {/* Left: Categories */}
        <div className="megamenu-categories-container">
          <p className="megamenu-title">categories</p>
          {services.map((category, idx) => (
            <div
              key={idx}
              className={`megamenu-category-item ${hoveredCategory === idx ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(idx)}
            >
              <span className="megamenu-category-icon">{category.category === "SAP Access Design" ? "" : category.category === "SAP Access Projects" ? "" : category.category === "SAP Access Services" ? "" : ""}</span>
              <span className="megamenu-category-text">{category.category}</span>
              <span className="megamenu-category-arrow">›</span>
            </div>
          ))}
        </div>
        {/* Right: Services grid */}
        <div className="megamenu-services-container">
          <p className="megamenu-title">Services</p>
          {services.map((category, idx) => (
            <div
              key={idx}
              className="megamenu-services-content"
              style={{ display: hoveredCategory === idx ? 'block' : 'none' }}
            >
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="megamenu-service-item">
                  <span className="megamenu-service-icon">{item.icon}</span>
                  <Link to={item.link} className="megamenu-service-text">{item.name}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
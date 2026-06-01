import React, { useState } from "react";
import "../css/LinkTree.css";
import logo from "../assets/images/Mainlogo.png";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight } from "react-icons/fi";

const LinkTree = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  const blogLinks = [
    {
      title: "Your Partner for Efficient SAP Access",
      url: "https://s4access.com/blogs/your-partner-for-efficient-sap-access",
      date: "2024-03-15",
    },
    {
      title: "Is The SAP Certification Still Valid For Your Career In 2025?",
      url: "https://s4access.com/blogs/sap-certification-2025",
      date: "2025-08-26",
    },
  ];

  const otherLinks = [
    {
      title: "Services",
      url: "https://s4access.com/services",
    },
    {
      title: "About Us",
      url: "https://s4access.com/about",
    },
    {
      title: "Customer Success",
      url: "https://s4access.com/customer-success",
    },
    {
      title: "Contact Us",
      url: "https://s4access.com/contact",
    },
  ];

  const currentLinks = activeTab === "blogs" ? blogLinks : otherLinks;

  return (
    <div className="linktree-container">
      <Helmet>
        <title>Links | s4access</title>
        <meta
          name="description"
          content="All your s4access links in one place."
        />
      </Helmet>

      <header className="linktree-header">
        <img
          src={logo}
          alt="s4access Logo"
          className="linktree-logo"
          width="210"
          height="40"
        />
        <p className="linktree-subtitle">Latest articles & insights</p>
      </header>

      <div className="linktree-tabs">
        <button
          className={`linktree-tab ${activeTab === "blogs" ? "active" : ""}`}
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </button>
        <button
          className={`linktree-tab ${activeTab === "other" ? "active" : ""}`}
          onClick={() => setActiveTab("other")}
        >
          Other Links
        </button>
      </div>

      <main className="linktree-main">
        {currentLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-card"
          >
            <span className="linktree-card-text">{link.title}</span>
            <div className="linktree-icon-wrapper">
              <FiArrowUpRight className="linktree-arrow-icon" />
            </div>
          </a>
        ))}
      </main>

      <footer className="linktree-footer">
        <p>
          Go to Home Page
          <a
            href="https://s4access.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            s4access
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LinkTree;

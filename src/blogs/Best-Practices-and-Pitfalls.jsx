import React from "react";
import "./Internal-Blog.css";
// import img24 from './blogs-images/3.jpg'
import Blogs from "../components/Blog";
import cta from "./blogs-images/Group.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FAQTemplate from "../components/FAQTemplate.jsx";

export default function Blog4() {
  const faqs = [
    {
      question: "What are public views in SAP S/4HANA Fiori apps?",
      answer:
        "Public views are user-defined views that tailor how data is displayed in Fiori apps. Access to these views is controlled through roles assigned to users.",
    },
    {
      question: "Where should SAP Fiori public views be created?",
      answer:
        "Public views should be created in the Development system by the AMS team. This allows proper testing, naming control, and safe transport across the system landscape.",
    },
    {
      question: "What risks come from creating public views directly in Production?",
      answer:
        "Direct creation in Production can lead to untested changes, ignored naming standards, excessive views per app, slower performance, and user confusion.",
    },



  ];
  return (
    <>
      <Helmet>
        <title>
          Managing Fiori S/4HANA Public Views Best Practices | S4Access
        </title>
        <meta
          name="title"
          content="Managing Fiori S/4HANA Public Views Best Practices | S4Access"
        />
        <meta
          name="description"
          content="Discover best practices for managing Fiori S/4HANA Public Views, avoid performance issues, maintain consistency, and enhance user experience across SAP systems."
        />

        {/* ======================= ARTICLE SCHEMA ======================= */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Managing Fiori S/4HANA Public Views Best Practices | s4access",
      "description": "Discover best practices for managing Fiori S/4HANA Public Views, avoid performance issues, maintain consistency, and enhance user experience across SAP systems.",
      "author": {
        "@type": "Organization",
        "name": "s4access"
      },
      "publisher": {
        "@type": "Organization",
        "name": "s4access",
        "logo": {
          "@type": "ImageObject",
          "url": "https://s4access.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://s4access.com/blogs/Best-Practices-and-Pitfalls"
      },
      "keywords": [
        "Fiori S/4HANA Public Views",
        "SAP Fiori Best Practices",
        "SAP S/4HANA Fiori Views",
        "Fiori Performance Optimization",
        "SAP Fiori Governance",
        "SAP Fiori Role Management",
        "Fiori View Consistency",
        "SAP Landscape Performance"
      ]
    }
    `}
        </script>

        {/* Faq Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are public views in SAP S/4HANA Fiori apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Public views are user-defined views that tailor how data is displayed in SAP S/4HANA Fiori apps. Access to these views is controlled through roles assigned to users."
                }
              },
              {
                "@type": "Question",
                "name": "Where should SAP Fiori public views be created?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP Fiori public views should be created in the Development system by the AMS team. This enables proper testing, consistent naming, and safe transport across the system landscape."
                }
              },
              {
                "@type": "Question",
                "name": "What risks come from creating public views directly in Production?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Creating public views directly in Production can result in untested changes, ignored naming standards, excessive views per app, performance degradation, and user confusion."
                }
              }
            ]
          }
          )}
        </script>
      </Helmet>

      <div className="breach-article-wrapper">
        {/* Hero Section */}
        {/* <div className="breach-hero-banner">
        <img src={img24} alt="" />

        <div className="hero-overlay-section">
          <h1>Managing Public Views in Fiori S/4HANA: Best Practices and Pitfalls</h1>
        </div>
      </div> */}

        {/* Blog Content */}
        <div className="breach-article-content">
          <section>
            <p>
              In{" "}
              <a href="https://s4access.com/blogs/Best-Practices-and-Pitfalls">
                SAP S/4HANA Fiori
              </a>{" "}
              apps—whether standard or extended—public views play a key role in
              tailoring user experiences. These views can be created with a
              transport request (TR) and mapped to user-specific roles, ensuring
              that only authorized users with the appropriate roles can access
              them.
            </p>
          </section>

          <section>
            <h2>Controlled Creation via Development System</h2>
            <p>
              To maintain governance and consistency, public views should be
              created in the Development system by the AMS team, based on a
              Ticket raised by the business key user. This ensures:
              <ul>
                <li>Proper testing and validation</li>
                <li>Adherence to naming conventions</li>
                <li>Controlled deployment through the landscape</li>
              </ul>
            </p>
          </section>

          <section>
            <h2>Direct Creation in Production: Proceed with Caution</h2>
            <p>
              While SAP allows business users -including key users -to create
              public views directly in the Production environment, this
              flexibility comes with limitations and risks:
              <ul>
                <li>Role-specific views cannot be created in Production</li>
                <li>Untested changes may be introduced without oversight</li>
                <li>Naming conventions are often ignored</li>
                <li>Hundreds of views per app can accumulate rapidly</li>
                <li>App loading times may suffer due to excessive views</li>
                <li>
                  User confusion grows as more views clutter the interface
                </li>
                <li>Monitoring overhead increases significantly</li>
              </ul>
            </p>
          </section>

          <section>
            <h2>Recommendation</h2>
            <p>
              To avoid these pitfalls, organizations should:
              <ul>
                <li>
                  Centralize public view creation in the Development system
                </li>
                <li>Use structured service requests to initiate changes</li>
                <li>
                  Limit direct creation in Production to specific, well-trained
                  users
                </li>
                <li>Regularly audit and clean up unused or redundant views</li>
              </ul>
            </p>
            <p>
              By following these practices, you can ensure a clean, performant,
              and user-friendly Fiori experience across your{" "}
              <a href="https://s4access.com/blogs/Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA">
                S/4HANA landscape
              </a>
              . Stay tuned to learn the Approach for S/4 Custom Fiori
              Apps/Reports deployed on BTP.
            </p>
          </section>
        </div>

        {/* <section className="news-blogs-section-inner-blog-page">
        <div className=" heading-news-blog">
          <h1 className="big-heading-text-black">Recent Blogs</h1>

        </div>

        <div className="news-blogs-container">

          <Blogs />


        </div>


      </section> */}
      </div>
      <div className="faq-pad-section" style={{ paddingLeft: "10px" }}>
        <FAQTemplate title="FAQs" faqs={faqs} />
      </div>
      <section className="blog-container">
        <div className="blog-contact-us-section">
          {/* Left Image */}
          <div className="blog-left-image only-windows">
            <img src={cta} />
          </div>

          {/* Right Content */}
          <div className="blog-right-content">
            <div className="blog-right-text">
              {/* <p className="small-text-white">
                We’ll help you build
              </p> */}
              <p className="text-white" style={{ fontWeight: 600 }}>
                Keep Your Fiori Views Clean, Secure, and Compliant.
              </p>
            </div>
            <div className="blog-right-button">
              <Link to="/contact" className="button-green">
                <span>Get Started</span>
                <span>
                  <i className="bi bi-arrow-up"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

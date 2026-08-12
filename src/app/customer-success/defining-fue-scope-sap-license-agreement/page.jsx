import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../../css/Coustomer.css";
import img10 from "../../../assets/images/success-images/sapLicen/2149595842.jpg";
import img12 from "../../../assets/images/success-images/sapLicen/2694.jpg";
import img13 from "../../../assets/images/success-images/sapLicen/6536.jpg";

export const metadata = {
  alternates: {
    canonical: "/customer-success/defining-fue-scope-sap-license-agreement",
  },
  title: "Defining FUE scope for SAP license agreement",
  description:
    "How s4access supported a Scandinavian stock-listed company in defining the scope of Full Use Equivalent (FUE) licensing for a new SAP license agreement.",
  openGraph: {
    images: [{ url: img10.src }],
  },
};

const DefiningFUEScope = () => {
  return (
    <div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://s4access.com/customer-success/defining-fue-scope-sap-license-agreement#article",
      "url": "https://s4access.com/customer-success/defining-fue-scope-sap-license-agreement",
      "headline": "Defining FUE Scope for SAP License Agreement",
      "description": "Learn how s4access helped define the right FUE scope for an SAP license agreement and provided specialist guidance to support accurate licensing decisions.",
      "image": {
        "@type": "ImageObject",
        "url": "https://s4access.com/_next/static/media/2149595842.0d_4-4w4k0udb.jpg"
      },
      "articleSection": "Customer Success",
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "@id": "https://s4access.com/#organization",
        "name": "s4access",
        "url": "https://s4access.com/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://s4access.com/#organization",
        "name": "s4access",
        "url": "https://s4access.com/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://s4access.com/customer-success/defining-fue-scope-sap-license-agreement"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://s4access.com/customer-success/defining-fue-scope-sap-license-agreement#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://s4access.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Customer Success",
          "item": "https://s4access.com/customer-success/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Defining FUE Scope for SAP License Agreement",
          "item": "https://s4access.com/customer-success/defining-fue-scope-sap-license-agreement"
        }
      ]
    }
  ]
}
    `,
  }}
/>


      <section className="Coustomer-success-page-hero-section">
        <div className="Coustomer-success-page-hero-container-left">
          <h1 className="big-heading-text-white">
            Defining FUE scope for SAP license agreement
          </h1>
          <p className="text-white">
            A Scandinavian stock-listed company was preparing a new SAP license
            agreement and needed to define the scope of Full Use Equivalent
            (FUE) licensing.
          </p>
        </div>
        <div className="Coustomer-success-page-hero-container-right">
          <Image
            src={img10}
            alt="Defining FUE scope for SAP license agreement"
          />
        </div>
      </section>

      <div className="solution-intro-card-2">
        <h2 className="big-heading-text-white">The challenge</h2>
        <p className="text-white">
          The customer understood that the number of FUE users would have a
          direct impact on license cost. At the same time, it was not fully
          clear how different user types, roles, and ways of working should be
          interpreted within{" "}
          <Link
            href="/services/sap-license-optimisation"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            SAP’s licensing model
          </Link>
          , or how the FUE concept would work in practice.
        </p>
      </div>

      <section className="Coustomer-success-page-scope-of-service-section">
        <div className="Coustomer-success-page-card">
          <h2 className="big-heading-text-black">Our approach</h2>
          <div
            className="text-black"
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <p>
              s4access supported the customer in defining the FUE scope as part
              of the license negotiation process.
            </p>
            <p>
              The work focused on reviewing the customer's SAP user base, roles,
              and usage logic, and mapping these to SAP's FUE model. A key part
              of the work was analysing and interpreting the underlying data,
              supported by the use of dedicated tools to ensure that the
              analysis was consistent and based on actual system usage.
            </p>
            <p>
              In addition to defining the scope, a significant part of the work
              was helping the customer understand how the FUE-based model
              actually works in practice — what is being measured, how users are
              interpreted over time, and what this means from a business
              perspective.
            </p>
            <p>
              Together with the customer, a clear and well-justified FUE
              definition was established that reflects the real situation. In
              parallel, a practical approach was defined for how the FUE model
              would be managed after the agreement — including how the situation
              is monitored and how changes in the user landscape are handled.
            </p>
          </div>
        </div>
        <div className="Coustomer-success-page-card-right">
          <Image src={img12} alt="Our approach" />
        </div>
      </section>

      <section className="Coustomer-success-page-Achievements-section-diff-content">
        <div className="Coustomer-success-inner-achievements-right">
          <Image src={img13} alt="Achievements & Benefits" />
        </div>
        <div className="Coustomer-success-inner-achievements-left">
          <h2 className="big-heading-text-black">Achievements & Benefits</h2>
          <div
            className="text-black"
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <p>
              The customer gained a clear understanding of their FUE scope and
              the logic behind the new licensing model.
            </p>
            <p>
              This enabled them to define a realistic scope, avoid unnecessary
              license costs, and establish a practical way to manage FUE after
              contract signature — reducing the risk of unexpected impacts over
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="CustomerSuccess-service-cta">
        <div className="CustomerSuccess-cta-content">
          <h2
            className="big-heading-text-white"
            style={{ textTransform: "none" }}
          >
            Customer Comments About <br className="only-windows" /> s4access
            Service
          </h2>
          <p className="text-white">
            "Without the specialist support from s4access, we would not have
            been able to complete this work with the required level of
            confidence. Their expertise helped us not only to define the right
            scope, but also to understand how the model works and how to manage
            it going forward."
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

export default DefiningFUEScope;

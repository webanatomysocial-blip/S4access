import Image from "next/image";
import React from "react";
import "./Internal-Blog.css";
// import img22 from './blogs-images/2.jpg';
import Blogs from "../components/Blog";
import cta from "../blogs/blogs-images/Group.png";
import Link from "next/link";
import FAQTemplate from "../components/FAQTemplate.jsx";

export const metadata = {
  title: "Building Display Roles The Smart Way In SAP S/4HANA | s4access",
  description: "Build SAP S/4HANA display roles the smart way with best practices that improve security, simplify access management, and support compliance.",
};


export default function Blog10() {
  const faqs = [
    {
      question: "What is a display role in SAP S/4HANA?",
      answer:
        "A display role allows users to view data and reports without the ability to create, change, or delete information. It helps prevent accidental changes and supports audit and compliance requirements.",
    },
    {
      question: " How do you create a display-only role in SAP S/4HANA?",
      answer:
        "In on-premise systems, a standard role is copied in PFCG and change activities like ACTVT 01, 02, and 06 are removed, leaving only ACTVT 03 (Display). The role is then tested to confirm read-only access.",
    },
    {
      question: "Are SAP Fiori apps always read-only for display roles?",
      answer:
        "No. Some Fiori apps marked as “display” can still allow changes. Negative testing in the Fiori Launchpad is required to confirm that no modifications are possible.",
    },


  ];
  return (
    <>
      

      <div className="breach-article-wrapper">
        {/* Hero Section */}
        {/* <div className="breach-hero-banner">
        <Image src={img22} alt="" />
        <div className="hero-overlay-section">
          <h1>Autumn 2025 Outlook: Navigating SAP Security and Access Management in a New Market Reality – Is There a Way Forward?</h1>
        </div>
      </div> */}

        {/* Blog Content */}
        <div className="breach-article-content">
          <section>
            <h2>Why display roles matter</h2>
            <p>
              In many SAP S/4HANA implementations, one of the under-appreciated
              tasks is defining roles that only allow viewing of data and
              functions, the so-called “display” roles. Why does this matter?
              Because letting users see without the risk of accidental change or
              authorization excess is key for audit and compliance purposes as
              well as for smooth operations. In this post I’ll walk through why
              display roles are important, what you should watch out for, how to
              build them, and some real-life tips to avoid{" "}
              <a href="https://s4access.com/blogs/Best-Practices-and-Pitfalls">
                common pitfalls
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Understanding users needs</h2>
            <p>
              The first step is to understand exactly what the user needs to see
              - which reports, apps, and organizational levels. Once that’s
              clear, you can start designing the role. In an on-premise{" "}
              <a href="https://s4access.com/blogs/Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA">
                S/4HANA
              </a>
              system, transaction PFCG allows you to copy a standard role,
              remove change activities (e.g., ACTVT 01/Create, 02/Change,
              06/Delete), and leave only 03 – Display. These are just examples,
              always review which activities are relevant for your specific use
              case.
            </p>
          </section>
          <section>
            <h2>Fiori considerations</h2>
            <p>
              For Fiori, check catalogs and apps carefully - some “read-only”
              apps can still allow edits. Negative testing is crucial: assign
              the role to a test user, navigate through the Fiori Launchpad, and
              verify that nothing can be modified accidentally.
            </p>
          </section>

          <section>
            <h2>Real-Life example</h2>
            <p>
              A real-life example makes this clearer: in one project, the
              Quality Assurance team needed access to inspection data but no
              ability to change batches or goods movements. By copying the
              standard Quality Manager role, removing all change transactions,
              and restricting access to relevant plants, the team created a safe
              and effective Z_QA_DISPLAY role. Post go-live, no accidental
              changes occurred - a small effort with a big impact, showing how
              careful design and testing can pay off.
            </p>
          </section>

          <section>
            <h2>Documentation & useful tools</h2>
            <p>
              Following this kind of example, naming and documentation become
              even more important. A clear name such as Z_DISPLAY_FINANCE_ALL
              instantly tells everyone that it’s a view-only role. Keeping
              documentation tidy reduces mistakes, simplifies audits, and makes
              future maintenance easier.
            </p>

            <ul>
              <li>
                SUIM - analyze user assignments, transactions, and
                authorizations.
              </li>
              <li>
                Fiori Apps Library - see which apps are delivered, with their
                catalogs and roles.
              </li>
              <li>
                Role Comparison in PFCG - compare standard vs custom roles to
                track changes.
              </li>
              <li>
                <a href="https://s4access.com/authorisation-concept-owner">
                  SAP Authorization
                </a>{" "}
                Logging - monitor any attempted changes to ensure read-only
                roles are effective.
              </li>
            </ul>
          </section>

          <section>
            <h2>Final checks</h2>
            <p>
              Display roles are about trust and control. Done right, they let
              users see what they need, keep your system secure, and make audits
              easier. Take a moment to review your display roles: when was the
              last time you checked them?
            </p>
          </section>
          <section>
            <p>
              Also, don’t forget to review access on the user level, sometimes a
              user can still get 01, 02, or other change activities through
              another role. Catching such cross-pollination early helps maintain
              true “display-only” access.
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

      {/* Faq Section */}
      <div className="faq-pad-section" style={{ paddingLeft: "10px" }}>
        <FAQTemplate title="FAQs" faqs={faqs} />
      </div>
      <section className="blog-container">
        <div className="blog-contact-us-section">
          {/* Left Image */}
          <div className="blog-left-image only-windows">
            <Image src={cta} alt="Contact s4access" />
          </div>

          {/* Right Content */}
          <div className="blog-right-content">
            <div className="blog-right-text">
              {/* <p className="small-text-white">
                We’ll help you build
              </p> */}
              <p className="text-white" style={{ fontWeight: 600 }}>
                Start building display roles the smart way and make compliance
                effortless
              </p>
            </div>
            <div className="blog-right-button">
              <Link href="/contact" className="button-green">
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

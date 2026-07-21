import Image from "next/image";
import React from "react";
import "./Internal-Blog.css";
// import img24 from './blogs-images/3.jpg'
import Blogs from "../components/Blog";
import cta from "./blogs-images/Group.png";
import Link from "next/link";
import FAQTemplate from "../components/FAQTemplate.jsx";

export const metadata = {
  title: "Managing Public Views In Fiori S/4HANA: Best Practices And Pitfalls | s4access",
  description: "In SAP S/4HANA Fiori apps—whether standard or extended—public views play a key role in tailoring user experiences. These views can be created with a transport request (TR) and mapped to user-specific roles, ensuring that only authorized users with the appropriate roles can access them.",
};


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
      

      <div className="breach-article-wrapper">
        {/* Hero Section */}
        {/* <div className="breach-hero-banner">
        <Image src={img24} alt="" />

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
            <Image src={cta} alt="Contact s4access" />
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

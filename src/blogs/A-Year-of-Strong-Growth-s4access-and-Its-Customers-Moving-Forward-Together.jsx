import React from "react";
import "./Internal-Blog.css";
import Blogs from "../components/Blog";
import cta from "../blogs/blogs-images/Group.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Blog13() {
  return (
    <>
      <Helmet>
        <title>
          A Year of Strong Growth: s4access & Customers Moving Forward Together
        </title>
        <meta
          name="title"
          content="A Year of Strong Growth: s4access & Customers Moving Forward Together"
        />
        <meta
          name="description"
          content="2025 has been a year of growth, innovation, and collaboration at s4access. Discover key SAP Access Management trends and what lies ahead in 2026."
        />
      </Helmet>

      <div className="breach-article-wrapper">
        {/* Blog Content */}
        <div className="breach-article-content">
          <section>
            <h2>
              A Year of Strong Growth: s4access and Its Customers Moving Forward
              Together
            </h2>
            <p>
              <strong>2025</strong> has been a year of strong growth,
              innovation, and close collaboration with our customers and
              partners.
            </p>
            <p>
              At s4access, growth isn’t just about numbers – it’s about the
              difference we make for our customers. This year, that has meant
              helping organisations strengthen their SAP Access Management in
              services and S/4 transformations, while giving our team the chance
              to explore new SAP technologies and work with an increasing number
              of new customers.
            </p>
          </section>

          <section>
            <h2>Key Focus Areas in 2025</h2>
            <p>
              We’ve spent much of 2025 focused on key areas shaping the SAP
              world. As SAP technology evolves and security requirements
              tighten, access management has become more important than ever.
            </p>
            <p>
              At the same time, businesses are looking for ways to keep costs
              under control and improve efficiency. Another major topic has been
              SAP’s new licensing model,{" "}
              <strong>FUE (Full User Equivalent)</strong>, which requires
              careful planning and a deep understanding to ensure SAP licence
              compliance and effective cost management.
            </p>
          </section>

          <section>
            <h2>Looking Ahead to an Exciting 2026</h2>
            <p>
              If 2025 felt like progress, we believe 2026 will take us a step
              further. The year ahead will bring an even more challenging
              environment—one that pushes us to discover smarter ways to improve
              processes and deepen our understanding of the future of SAP Access
              Management.
            </p>
            <p>
              Could 2026 be the year we begin to see how AI can transform SAP
              Access Management? Time will tell, but we are on our way to find
              out.
            </p>
          </section>

          <section>
            <p>
              Thank you to all our customers and partners for your trust and
              collaboration. We wish everyone a successful and exciting{" "}
              <strong>2026</strong>.
            </p>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="blog-container">
        <div className="blog-contact-us-section">
          {/* Left Image */}
          <div className="blog-left-image only-windows">
            <img src={cta} alt="Contact s4access" />
          </div>

          {/* Right Content */}
          <div className="blog-right-content">
            <div className="blog-right-text">
              <p className="text-white" style={{ fontWeight: 600 }}>
                Let’s build a stronger, smarter SAP Access Management
                strategy—together
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

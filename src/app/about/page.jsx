import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import '../../css/About.css';
import star from '../../assets/images/home-img/star-black.png';
import Topbanner from '../../assets/images/About-img/Top-banner-img.jpg';
import whoweare from '../../assets/images/About-img/Who-We-Are.jpg';
import TeamSection from '../../components/TeamSection';

export const metadata = {
  title: "About Us – s4access SAP Access Management",
  description: "Learn about s4access, our core principles, and the team redefining SAP access management with deep expertise and innovative solutions.",
};

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matti Halonen",
    jobTitle: "Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "s4access",
      url: "https://s4access.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christa Coulter",
    jobTitle: "Director, SAP Security Architect",
    worksFor: {
      "@type": "Organization",
      name: "s4access",
      url: "https://s4access.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Heli Kokkala",
    jobTitle: "Director, Head of Services",
    worksFor: {
      "@type": "Organization",
      name: "s4access",
      url: "https://s4access.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sameer Hawaldar",
    jobTitle: "Director, Head of Projects",
    worksFor: {
      "@type": "Organization",
      name: "s4access",
      url: "https://s4access.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tiina Hartikainen",
    jobTitle: "Director, People and Development",
    worksFor: {
      "@type": "Organization",
      name: "s4access",
      url: "https://s4access.com/"
    }
  }
];

export default function About() {
  return (
    <main>
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* banner section start */}
      <section className="about-banner-section">
        <div className="about-banner-content-left">
          <h1 className="extra-big-heading-text-white">
            Redefining SAP <br /> Access Management
          </h1><br />
          <p className="text-white">
            Modern SAP environments demand more than traditional access controls. Redefining access management means reducing complexity, gaining a clear view of the big picture, and managing costs—while keeping security and efficiency at the core. It's about smarter, faster, and more secure access—built for today’s enterprise needs.
          </p>
        </div>
        <div className="about-banner-content-right">
          <Image src={Topbanner} alt="" />
        </div>
      </section>
      {/* banner section End */}

      {/* about-image-section start */}
      <section className="about-image-section"></section>
      {/* about-image-section End */}

      {/* about-who-we-are-section start */}
      <section className="about-who-we-are-section">
        <div className="who-we-are-left-container">
          <span>
            <Image src={star} alt="" />
            <h2 className="text-black">Who We Are</h2>
          </span>
          <div className='img-who-we-are-left-container'>
            <Image src={whoweare} alt="Who-We-Are" />
          </div>
        </div>

        <div className="who-we-are-right-container">
          <h2 className="big-heading-text-black">About Us</h2>
          <p className="text-black">
            We are a specialist company focused exclusively on SAP access management. With deep expertise in what drives complexity, security requirements, and cost in SAP environments, we go beyond traditional approaches. We've invested in advanced technologies and refined methodologies to develop innovative services that meet the demands of modern enterprises. Backed by one of the largest expert teams in EMEA, we help organizations simplify access, strengthen control, and manage risk—efficiently and intelligently.
          </p>
          <br />
          <h2 className="big-heading-text-black">Our Core Principles</h2>
          <p className="text-black">
            We focus on our current customers—building long-term partnerships based on trust, results, and continuous improvement. Our approach to SAP access management is to get it right from the start: designed with precision, built to last, and optimized for cost. We understand that solid access management is never built in a day—it requires thoughtful planning, ongoing maintenance, and the ability to adapt to change. That’s why we continuously invest in improving our technology and methods, ensuring our services stay ahead of modern requirements.
          </p>
        </div>
      </section>
      {/* about-who-we-are-section End  */}

      <section className="our-hightlights-section" style={{ marginTop: "0px", display: "none" }}>
        {/* Our Highlights section is hidden */}
      </section>

      {/* Our Team section start */}
      <TeamSection />
      {/* Our Team section End */}

      {/* about-contact-us-dark-section start */}
      <section className='about-contact-us-dark-section'>
        <div className="about-contact-us-dark-container">
          <div className="about-contact-us-dark-inner-container" style={{ borderLeft: 'none' }}>
            <div className="about-contact-us-dark-inner-top-container">
              <h2 className="big-heading-text-white-overflow">Partnerships & Services</h2>
            </div>
            <div className="about-contact-us-dark-inner-bottom-containr">
              <p className="small-text-white ">
                Interested in our services & partnership ?
                <br /><br />
                Reach out to <strong>Matti Halonen</strong> at
                <br /><br />
                <a href="mailto:matti.halonen@s4access.com">matti (dot) halonen (at) s4access (dot) com</a>
              </p>
            </div>
          </div>

          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <h2 className="big-heading-text-white-overflow">Careers<br /><br /></h2>
            </div>
            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">
                Want to join the leading community of SAP security professionals?
                <br /><br />
                Reach out to <strong>Tiina Hartikainen</strong> at <br /><br />
                <a href="mailto:tiina.hartikainen@4access.com">tiina (dot) hartikainen (at) s4access (dot) com</a>
              </p>
            </div>
          </div>

          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <h2 className="big-heading-text-white-overflow">Administration<br /><br /></h2>
            </div>
            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">
                For general administrative inquiries
                Reach out to us at <strong><a href='mailto:contact@s4access.com'>contact (at) s4access (dot) com</a></strong>
              </p>
            </div>
          </div>

          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <h2 className="big-heading-text-white-overflow">Vendors <br /><br /></h2>
            </div>
            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">
                Please note: We do not accept unsolicited calls from vendors.
                All inquiries must be submitted via email: <strong><a href='mailto:contact@s4access.com'>contact (at) s4access (dot) com</a></strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about-contact-us-dark-section End */}

      {/* about-contact-us-section light color start */}
      <section className="about-contact-us-section">
        <div>
          <h2 className="big-heading-text-white">
            Contact us and reset your<br className='only-windows'></br> password to SAP security !
          </h2>
          <p className="text-white" style={{ paddingBottom: 25 }}>
            We’re here to help with all your SAP security needs. Whether you're a client, partner,<br /> vendor, or potential team member, here's how to reach the right person
          </p>
        </div>
        <div>
          <Link href="/contact" className="button-green ">
            <span>Contact </span>
            <span>
              <i className="bi bi-arrow-up"></i>
            </span>
          </Link>
        </div>
      </section>
      {/* about-contact-us-section light color End */}
    </main>
  );
}

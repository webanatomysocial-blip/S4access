import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../css/App.css";
import CustomerSuccessonebyone from "../components/CustomerSuccessonebyone.jsx";
import bannerBg from "../assets/images/coustomer-success-page/banner.png";
import banner2 from "../assets/images/home-img/Success-top-img-2.jpg";
import { Helmet } from "react-helmet-async";

function CustomerSuccess() {
  return (
    <div>
      <Helmet>
        <title>SAP Access Management Customer Success Stories | s4access</title>
        <meta
          name="title"
          content="SAP Access Management Customer Success Stories | s4access"
        />
        <meta
          name="description"
          content="See how Nordic companies achieve long-term SAP access management success with s4access. Real customer results, easy onboarding and partnerships built to last."
        />
        <meta
          name="keywords"
          content="sap access management success, sap customer success stories, sap access management specialists, sap access management consulting, sap access management services, outsourced sap access management, sap security outsourcing, nordic sap consulting, sap access management partners, sap access management solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://s4access.com/customer-success/#webpage",
                "url": "https://s4access.com/customer-success",
                "name": "SAP Access Management Customer Success Stories | s4access",
                "description": "See how Nordic companies achieve long-term SAP access management success with s4access. Real customer results, easy onboarding and partnerships built to last.",
                "inLanguage": "en",
                "breadcrumb": {
                  "@id": "https://s4access.com/customer-success/#breadcrumb"
                }
              },
              {
                "@type": "Service",
                "@id": "https://s4access.com/customer-success/#service",
                "name": "SAP Access Management Services",
                "serviceType": "SAP Access Management Consulting",
                "url": "https://s4access.com/customer-success",
                "description": "SAP access management consulting and customer success services for Nordic enterprises.",
                "provider": {
                  "@id": "https://s4access.com/#organization"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Nordic Region"
                },
                "keywords": [
                  "sap access management success",
                  "sap customer success stories",
                  "sap access management specialists",
                  "sap access management consulting",
                  "sap access management services",
                  "outsourced sap access management",
                  "sap security outsourcing",
                  "nordic sap consulting",
                  "sap access management partners",
                  "sap access management solutions"
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://s4access.com/#organization",
                "name": "s4access",
                "url": "https://s4access.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://s4access.com/wp-content/uploads/2024/09/cropped-s4access-logo.png"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://s4access.com/customer-success/#breadcrumb",
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
                    "item": "https://s4access.com/customer-success"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <section
        className="customer-success-top-hero"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="customer-success-top-hero-content">
          <h1 className="big-heading-text-white">
            Expert Care For SAP
            <br />
            Access Management
          </h1>
          <p className="customer-success-top-hero-text">
            Our approach to daily work is built on two core principles: We focus
            on our current customers, and we do this in true long-term
            partnership. SAP security is never fixed overnight. It requires deep
            expertise, consistency, and trust. From day one, we bring together
            the collective knowledge of our company to ensure your <Link style={{color : "white"}} to="/">SAP Access
            Management</Link> is handled with more care than even you might expect.
          </p>
        </div>
      </section>

      <section className="customer-hero-section-reverse">
        <div className="customer-hero-left-content-reverse">
          <h2 className="big-heading-text-black">
            Join Easily,
            <br />
            Stay For Success
            <br />
          </h2>
          <br />
          <p className="text-black customer-hero-text">
            We’re proud to say our customers stay with us. Our commitment to
            long-term success means we don’t chase quick wins—we build lasting
            value. And becoming our customer? It’s easy. No complicated
            onboarding, no endless paperwork—just a straightforward start to a
            partnership that’s built to last. We understand our approach might
            differ from other vendors in the market. But that’s exactly why it
            works. In case you are not already our customer, kindly <Link to="/contact">contact us</Link> {" "}
             and we are happy to discuss a partnership with you!
          </p>

          <div className="customer-quote-block">
            "Our commitment to long-term success means we don’t chase quick
            wins—we build lasting value."
          </div>
        </div>

        <div className="careers-hero-right-content-reverse customer-hero-image-container">
          <img
            src={banner2}
            alt="Join Easily"
            className="customer-hero-image-new"
          />
        </div>
      </section>

      <CustomerSuccessonebyone />
      <Footer />
    </div>
  );
}

export default CustomerSuccess;

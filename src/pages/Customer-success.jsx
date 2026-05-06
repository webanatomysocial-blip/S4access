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
        <title>Customer Success Stories – s4access SAP Access Projects</title>
        <meta
          name="title"
          content="Customer Success Stories – s4access SAP Access Projects"
        />
        <meta
          name="description"
          content="Discover s4access customer success stories in SAP access governance
and compliance—real-world case studies showcasing risk mitigation and enterprise security."
        />
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
            the collective knowledge of our company to ensure your SAP Access
            Management is handled with more care than even you might expect.
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
            works. In case you are not already our customer, kindly contact us
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

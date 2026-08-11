import CustomerSuccessCards from "../components/CustomerSuccessCards";
import '../css/Home.css';
import HomeSlider from '../components/HomeSlider';
import HomeSlidersMobile from '../components/HomeSlidersMobile';
import Link from "next/link";
import ServiceTabs from "../components/ServiceTabs";
import Blogs from "../components/Blog";
import HomeQuizPopup from "../components/HomeQuizPopup";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "SAP Access Management & SoD Specialists | Nordic",
  description: "Finland-based SAP access management specialists for Nordic enterprises. SoD strategy, S/4HANA design, licence optimisation and firefighter log automation.",
  keywords: "sap access management, sap access management automation, sap license optimisation, sap s/4hana security, sod management, sap sod, firefighter access sap, sap access risk management, sap consulting finland, sap security architect"
};

export default function Home() {
  return (
    <main>
      <HomeQuizPopup />
      {/* carousel section start */}
      <HomeSlider />
      <HomeSlidersMobile />
      {/* carousel section End */}

      {/* Our Highlights section start*/}
      <section className="our-hightlights-section" id="go-down-section">
        <div className="hightlight-tittle-container">
          <h2 className="big-heading-text-black">
            Our <br className="only-windows" /> Highlights
          </h2>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">SAP Access risk values analyzed annually</p>
            <p className="big-number-text-black">+100,000,000</p>
          </div>
          <div>
            <p className="text-black">
              We perform hundreds of risk evaluations annually, proactively addressing security vulnerabilities.
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">SAP Access management professionals</p>
            <p className="big-number-text-black">+140</p>
          </div>
          <div>
            <p className="text-black">
              Representing 5 nationalities and 13+ years of average experience.<br /> *s4access & partners
            </p>
          </div>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">SAP Access projects delivered</p>
            <p className="big-number-text-black">+300</p>
          </div>
          <div>
            <p className="text-black">
              Proven expertise across all <br /> types of SAP Access Management <br />projects.
            </p>
          </div>
        </div>
      </section>
      {/* Our Highlights section End */}

      <section className="services-section">
        <div>
          <h2 className="big-heading-text-white">Services</h2>
        </div>
        <ServiceTabs />
      </section>
      {/* services section End */}

      {/* Customer success stories section start */}
      <CustomerSuccessCards />
      {/* Customer success stories section End */}

      {/* news and blogs section start  */}
      <section className="news-blogs-section">
        <div className="heading-news-blog">
          <h2 className="big-heading-text-black">News & Blogs</h2>
          <Link href="/insights" className="read-more-btn-blue">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>
        <div className="news-blogs-container">
          <Blogs limit={3} />
        </div>
      </section>
      {/* news and blogs section End */}
    </main>
  );
}

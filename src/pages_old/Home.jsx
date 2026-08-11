
import { LenisContext } from "../components/LenisContext";
import Popup from '../components/popup/Popup.jsx';
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
import '../css/Home.css';
import HomeSlider from '../components/HomeSlider.jsx';
import HomeSlidersMobile from '../components/HomeSlidersMobile.jsx';
import Link from "next/link";
import ServiceTabs from "../components/ServiceTabs.jsx";
import Blogs from "../components/Blog.jsx";
import { Helmet } from 'react-helmet-async'; // Or from 'react-helmet-async'

function Home() {






  return (
    <div>

      <Helmet>
        <title>SAP Access Management & SoD Specialists | Nordic </title>
        <meta name="title" content="SAP Access Management & SoD Specialists | Nordic " />
        <meta name="description" content="Finland-based SAP access management specialists for Nordic enterprises. SoD strategy, S/4HANA design, licence optimisation and firefighter log automation." />
        <meta name="keywords" content="sap access management, sap access management automation, sap license optimisation, sap s/4hana security, sod management, sap sod, firefighter access sap, sap access risk management, sap consulting finland, sap security architect" />


        {/* ✅ ENHANCED OG TAGS FOR ALL PLATFORMS */}
        <meta property="og:title" content="s4access - Home" />
        <meta property="og:description" content="Welcome to s4access, your go-to solution for SAP access management!" />
        <meta property="og:image" content="https://s4access.com/images/black-logo-400.png" />
        <meta property="og:image:secure_url" content="https://s4access.com/images/black-logo-400.png" /> {/* ✅ HTTPS */}
        <meta property="og:image:type" content="image/png" /> {/* ✅ File type */}
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="s4access logo" />
        <meta property="og:url" content="https://s4access.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="s4access" />

        {/* ✅ LINKEDIN-SPECIFIC */}
        <meta name="linkedin:title" content="s4access - Home" />
        <meta name="linkedin:description" content="Welcome to s4access, your go-to solution for SAP access management!" />
        <meta name="linkedin:image" content="https://s4access.com/images/black-logo-400.png" />

        {/* ✅ TWITTER (WHATSAPP FALLBACK) */}
        <meta name="twitter:card" content="summary" /> {/* Square image */}
        <meta name="twitter:title" content="s4access - Home" />
        <meta name="twitter:description" content="Welcome to s4access, your go-to solution for SAP access management!" />
        <meta name="twitter:image" content="https://s4access.com/images/black-logo-400.png" />
        <meta name="twitter:image:alt" content="s4access logo" />

        {/* ✅ SCHEMA.ORG JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "LocalBusiness"],
                "@id": "https://s4access.com/#organization",
                "name": "s4access",
                "url": "https://s4access.com/",
                "logo": "https://s4access.com/assets/Mainlogo-9IvBezmq.png",
                "image": "https://s4access.com/assets/Mainlogo-9IvBezmq.png",
                "description": "Nordic SAP Access Management and GRC specialist delivering SAP S/4HANA security, SoD remediation, SAP GRC implementation, access automation, role redesign, outsourced access management, and SAP security consulting services across Finland, Sweden, Norway, and Denmark.",
                "foundingDate": "2021",
                "telephone": "+358207191010",
                "email": "contact@s4access.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+358207191010",
                  "contactType": "customer support",
                  "email": "contact@s4access.com",
                  "url": "https://s4access.com/contact",
                  "availableLanguage": ["English"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Helsinki",
                  "addressCountry": "FI"
                },
                "areaServed": [
                  { "@type": "Country", "name": "Finland" },
                  { "@type": "Country", "name": "Sweden" },
                  { "@type": "Country", "name": "Norway" },
                  { "@type": "Country", "name": "Denmark" }
                ],
                "sameAs": [
                  "https://fi.linkedin.com/company/s4access",
                  "https://www.crunchbase.com/organization/s4access"
                ],
                "serviceType": [
                  "SAP Access Design",
                  "SAP Access Management Review",
                  "SoD Strategy Approach",
                  "SAP Access Management Automation",
                  "SAP Access Projects",
                  "SAP S/4 Access Implementation",
                  "SoD / Role Redesign",
                  "Reorganisation / M&A Projects",
                  "SAP Access Services",
                  "Outsourced Access Management",
                  "Authorisation Concept Owner",
                  "Security Architect",
                  "SAP Access Solutions",
                  "Access Risk SoD Management",
                  "FF Log Review Automation",
                  "SAP License Optimisation"
                ],
                "knowsAbout": [
                  "SAP Security",
                  "SAP GRC",
                  "SAP S/4HANA",
                  "Segregation of Duties",
                  "SAP Access Management",
                  "SAP Authorization",
                  "SAP Role Design",
                  "SAP License Optimization"
                ]
              },
              {
                "@type": "Service",
                "@id": "https://s4access.com/#service",
                "name": "SAP Access Management Services",
                "provider": { "@id": "https://s4access.com/#organization" },
                "areaServed": [
                  { "@type": "Country", "name": "Finland" },
                  { "@type": "Country", "name": "Sweden" },
                  { "@type": "Country", "name": "Norway" },
                  { "@type": "Country", "name": "Denmark" }
                ],
                "serviceType": [
                  "SAP Access Management Review",
                  "SoD Strategy Approach",
                  "SAP Access Management Automation",
                  "SAP S/4 Access Implementation",
                  "SoD / Role Redesign",
                  "Reorganisation / M&A Projects",
                  "Outsourced Access Management",
                  "Authorisation Concept Owner",
                  "Security Architect",
                  "Access Risk SoD Management",
                  "FF Log Review Automation",
                  "SAP License Optimisation"
                ],
                "url": "https://s4access.com/services"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://s4access.com/#breadcrumb",
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
                    "name": "Services",
                    "item": "https://s4access.com/services"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>




      
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
            <p className="big-number-text-black">+100,000,000
            </p>
          </div>

          <div>
            <p className="text-black">
              We perform hundreds of risk evaluations
              annually, proactively addressing
              security vulnerabilities.

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
              Representing 5 nationalities and 13+ years of average experience.<br></br> *s4access & partners


            </p>
          </div>


        </div>





        <div className="hightlight-number-containers">


          <div className="inner-number-container">
            <p className="small-text-black">SAP Access projects delivered
            </p>
            <p className="big-number-text-black">+300</p>
          </div>

          <div>
            <p className="text-black">
              Proven expertise across all <br /> types of SAP Access  Management <br />projects.

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
        <div className=" heading-news-blog">
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







      
    </div>
  );
}

export default Home;

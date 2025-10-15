
import { LenisContext } from "../components/LenisContext";
import Popup from '../components/popup/Popup.jsx';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
import '../css/Home.css';
import HomeSlider from '../components/HomeSlider.jsx';
import HomeSlidersMobile from '../components/HomeSlidersMobile.jsx';
import { Link } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs.jsx";
import Blogs from "../components/Blog.jsx";
import { Helmet } from 'react-helmet'; // Or from 'react-helmet-async'

function Home() {






  return (
    <div>

<Helmet>
  <title>s4access - Home</title>
  <meta name="description" content="Welcome to s4access, your go-to solution for SAP access management!" />
  
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
</Helmet>




      <Header />

      {/* carousel section start */}

      <HomeSlider />
      <HomeSlidersMobile />
      {/* carousel section End */}



      {/* Our Highlights section start*/}
      <section className="our-hightlights-section" id="go-down-section">
        <div className="hightlight-tittle-container">
          <p className="big-heading-text-black">
            Our <br className="only-windows" /> Highlights
          </p>
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
          <p className="big-heading-text-white">Services</p>
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
          <p className="big-heading-text-black">News & Blogs</p>

          <Link to="/insights" className="read-more-btn-blue">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </Link>
        </div>

        <div className="news-blogs-container">

          <Blogs limit={3} />


        </div>


      </section>
      {/* news and blogs section End */}







      <Footer />

    </div>
  );
}

export default Home;

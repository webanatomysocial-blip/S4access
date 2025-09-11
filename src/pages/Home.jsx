// import { useState } from "react";
// import { useContext } from "react";
import { LenisContext } from "../components/LenisContext";
import Popup from '../components/popup/Popup.jsx';
// import SmoothLink from '../components/SmoothLink';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
import '../css/Home.css';
// import banner1 from '../assets/images/home-img/home-bgimg.jpg';

import HomeSlider from '../components/HomeSlider.jsx';
import { Link } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs.jsx";
import Blogs from "../components/Blog.jsx";

function Home() {






  return (
    <div>
      <Header />

      {/* carousel section start */}

      <HomeSlider />
      {/* carousel section End */}



      {/* Our Highlights section start*/}
      <section className="our-hightlights-section" id="go-down-section">
        <div className="hightlight-tittle-container">
          <p className="big-heading-text-black">
            Our <br /> Highlights
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
              Representing 5 nationalities and 13+ years of average experience, our team tackles security challenges effectively.
*s4access & partners

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
             We support S/4 transitions, SoD reviews and project reorganisations to strengthen SAP Access control. 
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
       
<Blogs />

          
        </div>

       
      </section>
      {/* news and blogs section End */}




   

    
      <Footer />
      
    </div>
  );
}

export default Home;

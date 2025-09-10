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





      {/* services section start */}

      {/* <section className="services-section">
        <div>
          <p className="big-heading-text-white">Services</p>
        </div>

        <div className="sevice-container">
          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP Access Management review</p>
              <p className="small-text-white">
                Enhance SAP access management by identifying risks, optimizing processes, and improving efficiency. Gain clear insights into governance, technical setup, and SoD risks. Receive actionable guidance for secure operations.
              </p>
            </div>

            <div>
              <a href="/sap-access-management-review" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>




          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SoD strategy and approach</p>

              <p className="small-text-white">
                Adopt a proactive SoD strategy to reduce risks, optimize resources, and ensure SAP compliance. Gain structured guidance on governance, processes, tools, and continuous improvement for sustainable access management.
              </p>
            </div>

            <div>
              <a href="/sod-stratergy-approach" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>

          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP Access Management Automation</p>
              <p className="small-text-white">
                Align SAP access technology with a clear strategy to avoid wasted costs and weak results. Our consulting ensures the right tools enhance compliance, security, and efficiency.
              </p>
            </div>

            <div>
              <a href="/sap-access-management-automation" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>



          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SAP S/4 access implementation</p>
              <p className="small-text-white">
                Modernize SAP access during S/4 transformation with expert planning, tailored tools, and deep expertise. Ensure secure, efficient, and cost-effective implementation while avoiding rework and ongoing maintenance challenges.
              </p>
            </div>

            <div>
              <a href="/sap-s4-access-implementation" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>

          <div className="inner-service-container">
            <div>
              <img src="./src/assets/images/home-img/s45.png" alt="" />
              <p className="sub-heading-text-white">SoD/Role redesign</p>
              <p className="small-text-white">
                Break the recurring SAP role redesign cycle with a sustainable, well-governed access approach. Our tailored projects address governance, processes, and technology to ensure lasting, adaptable role structures.
              </p>
            </div>

            <div>
              <a href="/sod-role-redesign" className="read-more-btn">
                Read More <i className="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="inner-services-btn">
          <a href="/services" className="button-green">
            <span>View All</span>
            <span>
              <i className="bi bi-arrow-up"></i>
            </span>
          </a>
        </div>
      </section> */}






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

          <a href="#" className="read-more-btn-blue">
            Read More <i className="bi bi-arrow-right arrow-icon"></i>
          </a>
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

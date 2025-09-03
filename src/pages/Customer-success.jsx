import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/App.css';
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
import React, { useState } from "react";
import banner1 from '../assets/images/home-img/home-bgimg.png';


function CustomerSuccess() {
    // Popup handlers
    const handleReadMoreClick = (e) => {
      e.preventDefault();
      setPopupContent({
        image: banner1,
        // category: 'SAP S/4',
        title: 'S4 Transition analysis',
        description: 'A senior consultant analysed the authorization setup of the customers SAP system and familiarised himself with the upgrade project plan, scope, timeline and organization. Also discussions were held with key stakeholders to analyse the customer targets in the best way. The work was carried out in a month by the senior consultant and the deliverable was a power point presentation and a resource plan for the transition to S4.',
        image2: banner1,
        title2: 'Achievements/benefits',
        description2: 'The customer understood the impact of the different decisions they had taken earlier and what work would be involved in the transition project itself. They were able to resource the program in an optimal way and prepare for the work in a timely manner. Without the analysis there would have been key areas left out that would have caused disruptions in the transition itself as well there would have been unnecessary work done.',
        image3: banner1,
        title3: 'Customer comment',
        description3: 'We learned so much in this small work that resulted in clear savings in the program itself but as well in much higher quality in the implementation. We got a good thorough analysis of the system and could prepare better hence.'
      });
      // Open the popup
      setPopupOpen(true);
      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop();
      }
    };
    const handleReadMoreClickTwo = (e) => {
      e.preventDefault();
      setPopupContent({
        image: banner1,
        title: 'Scandinavian Forest & Paper company',
        description: 'S4access team performed a comprehensive review on all three main levels of SAP access management: Governance, Processes and Technical review. Working methods consisted of interviews, system analysis and data analysis using S4access proprietary SAP Access analytics platform.',
        image2: banner1,
        title2: 'Achievements and Benefits',
        description2: 'A broad review revealed several issues and their root causes. A prioritized improvement plan was created to fix the key problems and take external audit findings into account.',
        image3: banner1,
        title3: 'Customer comment',
        description3: 'The customer appreciated the thoroughness and clarity of the review, which helped them address audit findings and improve their SAP access management processes.'
      });
      // Open the popup
      setPopupOpen(true);
      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop();
      }
    }; 
  
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({});
  
  return (
    <div>
      <Header />
      <section className="customer-hero-section">
        <div className="customer-hero-left-content">
          <p className="extra-big-heading-text-white">
            Welcome message
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </p>


          <a href="/" className="main-button-blue">
            <span>EXPLORE ALL ROLES CTA </span>
            <span>
              <i className="bi bi-arrow-up"></i>
            </span>
          </a>
        </div>



        <div className="careers-hero-right-content only-windows">

        </div>

      </section>
      <CustomerSuccessCards onReadMore={handleReadMoreClick} onReadMoretwo={handleReadMoreClickTwo} />
      <Footer />
    </div>
  );
}

export default CustomerSuccess;
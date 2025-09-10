import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/App.css';
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
// import React, { useState } from "react";
// import banner1 from '../assets/images/home-img/home-bgimg.jpg';


function CustomerSuccess() {
    // Popup handlers
  
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
      <CustomerSuccessCards />
      <Footer />
    </div>
  );
}

export default CustomerSuccess;
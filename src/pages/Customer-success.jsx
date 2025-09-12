import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/App.css';
// import 
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
// import React, { useState } from "react";
import banner1 from '../assets/images/home-img/Success-top-img.jpg';


function CustomerSuccess() {
  // Popup handlers

  return (
    <div>
      <Header />
      <section className="customer-hero-section">
        <div className="customer-hero-left-content">
          <p className="extra-big-heading-text-white">
            Our Approach

          </p>
          <p className="text-white">
            We focus on long-term partnerships with our customers, ensuring SAP security through expertise, consistency, and trust. From the start, we make onboarding simple and build lasting value—not quick wins. That’s why our customers stay with us. If you’re not yet a customer, we’d be glad to discuss a partnership with you.
          </p>


        </div>



        <div className="careers-hero-right-content">
          <img src={banner1} alt="" srcset="" />

        </div>

      </section>

      
      <CustomerSuccessCards />
      <Footer />
    </div>
  );
}

export default CustomerSuccess;
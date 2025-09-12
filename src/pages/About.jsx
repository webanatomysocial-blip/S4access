import Header from '../components/Header.jsx';
import React from 'react';
import Footer from '../components/Footer.jsx';
import '../css/About.css';
import star from '../assets/images/home-img/star-black.png'
import Topbanner from '../assets/images/About-img/Top-banner-img.jpg';
import whoweare from '../assets/images/About-img/Who-We-Are.jpg';
import TeamSection from '../components/TeamSection.jsx';
import { Link } from 'react-router-dom';

function About() {


 

  return (
    <div>
      <Header />

      {/* banner section start */}
      <section className="about-banner-section">

        <div className="about-banner-content-left">
          <p className="extra-big-heading-text-white">
            Redefining SAP <br /> Access Management

          </p><br />
          <p className="text-white">
            Modern SAP environments demand more than traditional access controls. Redefining access management means reducing complexity, gaining a clear view of the big picture, and managing costs—while keeping security and efficiency at the core. It's about smarter, faster, and more secure access—built for today’s enterprise needs.

          </p>

        </div>

        <div className="about-banner-content-right">
          <img src={Topbanner} alt="" srcset="" />
        </div>

      </section>

      {/* banner section End */}





      {/* about-image-section start */}

      <section className="about-image-section">

      </section>

      {/* about-image-section End */}






      {/* about-who-we-are-section start */}


      <section className="about-who-we-are-section">

        <div className="who-we-are-left-container">
          <span>
            <img src={star} alt="" />
            <p className="text-black">
              Who We Are
            </p>

          </span>
          <div className='img-who-we-are-left-container'>
            <img src={whoweare} alt="Who-We-Are" />
          </div>
        </div>




        <div className="who-we-are-right-container">

          <p className="big-heading-text-black">
            About Us

          </p>
          <p className="text-black">
            We are a specialist company focused exclusively on SAP access management. With deep expertise in what drives complexity, security requirements, and cost in SAP environments, we go beyond traditional approaches. We've invested in advanced technologies and refined methodologies to develop innovative services that meet the demands of modern enterprises. Backed by one of the largest expert teams in EMEA, we help organizations simplify access, strengthen control, and manage risk—efficiently and intelligently.

          </p>


          <br />
          <p className="big-heading-text-black">
            Our Core Principles


          </p>
          <p className="text-black">
            We focus on our current customers—building long-term partnerships based on trust, results, and continuous improvement. Our approach to SAP access management is to get it right from the start: designed with precision, built to last, and optimized for cost. We understand that solid access management is never built in a day—it requires thoughtful planning, ongoing maintenance, and the ability to adapt to change. That’s why we continuously invest in improving our technology and methods, ensuring our services stay ahead of modern requirements.

          </p>



        </div>


      </section>





      {/* about-who-we-are-section End  */}





      {/* Our Highlights section start*/}
      <section className="our-hightlights-section" style={{ marginTop: "0px", display: "none" }} >
        <div className="hightlight-tittle-container">
          <p className="big-heading-text-black">
            Our <br /> Highlights
          </p>
        </div>

        <div className="hightlight-number-containers">
          <div className="inner-number-container">
            <p className="small-text-black">SAP Access risk values analyzed annually</p>
            {/* <p className="big-number-text-black">+100,000,000
            </p> */}
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
            {/* <p className="big-number-text-black">+140</p> */}
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
            {/* <p className="big-number-text-black">+300</p> */}
          </div>

          <div>
            <p className="text-black">
              We support S/4 transitions, SoD reviews and project reorganisations to strengthen SAP Access control.
            </p>
          </div>



        </div>
      </section>
      {/* Our Highlights section End */}






      {/* Our Team section start */}


      <TeamSection />

      {/* Our Team section End */}






      {/* about-contact-us-dark-section start */}

      <section className='about-contact-us-dark-section'>

        <div className="about-contact-us-dark-container">

          <div className="about-contact-us-dark-inner-container" style={{ borderLeft: 'none' }}>
            <div className="about-contact-us-dark-inner-top-container">
              <p className="big-heading-text-white">
                Partnerships & Services

              </p>

            </div>


            <div className="about-contact-us-dark-inner-bottom-containr">
              <p className="small-text-white ">

                Interested in our services or our partnership with GRC Nordic?

                <br />
                <br />

                Reach out to <strong>Matti Halonen</strong> at <br /><br />

                <a href="tel:+358405589069"> +358 40 558 9069</a><br />
                <a href="mailto:matti.halonen@s4access.com">matti.halonen@s4access.com</a>

              </p>

            </div>



          </div>


          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <p className="big-heading-text-white">
                Careers<br /><br />

              </p>

            </div>


            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">

                Want to join the leading community of SAP security professionals?
                <br /><br />

                Reach out to <strong>Christa Coulter</strong>  at <br /><br />

                <a href="tel:+358405532204">+358 40 553 2204</a><br />
                <a href="mailto:christa.coulter@s4access.com">christa.coulter@s4access.com</a>
              </p>

            </div>



          </div>







          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <p className="big-heading-text-white">
                Administration<br /><br />

              </p>

            </div>


            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">

                For general administrative inquiries

                Reach out to us at <strong><a href='mailto:contact@s4access.com'>contact@s4access.com</a> </strong>


              </p>

            </div>



          </div>





          <div className="about-contact-us-dark-inner-container">
            <div className="about-contact-us-dark-inner-top-container">
              <p className="big-heading-text-white">
                Vendors <br /><br />

              </p>

            </div>


            <div className="about-contact-us-dark-inner-bottom-container">
              <p className="small-text-white ">

                Please note: We do not accept unsolicited calls from vendors.

                All inquiries must be submitted via email: <strong><a href='mailto:contact@s4access.com'>contact@s4access.com</a> </strong>

              </p>

            </div>



          </div>


        </div>

      </section>
      {/* about-contact-us-dark-section End */}




















      {/* about-contact-us-section  light color start */}
      <section className="about-contact-us-section">
        <div>
          <p className="big-heading-text-white">
          Contact us and reset your<br className='only-windows'></br> password to SAP security !
        </p>
        <p className="text-white">
          We’re here to help with all your SAP security needs. Whether you're a client, partner,<br /> vendor, or potential team member, here's how to reach the right person
        </p>

        </div>

        <div>
            <Link to="/contact" className="button-green ">
                    <span>Contact </span>
                    <span>
                      <i className="bi bi-arrow-up"></i>
                    </span>
                  </Link>

        </div>
        

      </section>

      {/* about-contact-us-section light color End */}















      {/* about-map-section-start */}
      {/* <section className="about-map-section">

        <div className="about-map-centainer-left">

          <p className="big-heading-text-black">
            Office located in Helsinki.

          </p>
          <a href='https://www.google.com/maps/place/K%C3%A4sity%C3%B6l%C3%A4iskatu+23,+06100+Porvoo,+Finland/@60.3665,25.6632,17z/data=!3m1!4b1!4m6!3m5!1s0x4691a5c5c5c5c5c5:0x5c5c5c5c5c5c5c5!8m2!3d60.3665!4d25.6632!16s%2Fg%2F11c1t1t1t1' className="text-black">

            <span>Käsityöläiskatu 23</span>
            <span>06100 Porvoo </span>

            <span>Finland</span>

          </a>
        </div>
     
      </section> */}
      {/* about-map-section-End */}






      <Footer />
    </div>
  );
}

export default About;
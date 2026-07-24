import Image from "next/image";
import React from "react";
import careersBanner from '../../assets/images/Careeres-img/carees-banner-1.jpg';
import TestimonialCarousel from '../../components/TestimonialCarousel.jsx';
import '../../css/Careers.css';
import CareersGallerySection from '../../components/CareersGallerySection.jsx';
import { FaUsers, FaTrophy, FaDove, FaHeartbeat } from 'react-icons/fa';
// import Blogs from '../../components/Blog.jsx';

export const metadata = {
  alternates: {
    canonical: "/careers",
  },
  title: "SAP Access Management Careers | s4access\n        ",
  description: "Join S4Access and build your career in SAP consulting. Explore exciting opportunities, grow your skills, and make an impact with our team.",
};



const Careers = () => {
  return (
    <>

      




      
      <section className="careers-hero-section">
        <div className="careers-hero-left-content">
          <h1 className="big-heading-text-white">
            Your Next Chapter <br /> Starts Here
          </h1>
          <p className="text-white">
            We believe that great people build great companies. Whether you're just starting your career or looking to take the next big step, we offer opportunities to grow, innovate, and make a real impact. Explore our open roles and discover how you can be part of something meaningful.
          </p>



        </div>



        <div className="careers-hero-right-content">
          <Image src={careersBanner} alt="Careers" priority={true} />
        </div>

      </section>





      {/* careers-management-section start */}
      <section className="careers-management-section">
        <div className="careers-management-content">
          <h2 className="big-heading-text-black">Why is SAP access management
            an attractive career choice?</h2>
          <p className="text-black">
            SAP is one of the most widely used ERP systems in the world, and access management is a critical part of its operation. There is strong and global demand.
            <br /><br />

            As organizations increasingly prioritize data protection and regulatory compliance, the growing importance of security and compliance has made SAP Access Management a critical area of focus. It plays a central role in managing user access, safeguarding sensitive information, and ensuring that only the right individuals have access to the right data. This makes the role of an SAP Access Management not only technically vital but also strategically important for modern businesses.
            <br /><br />
            The role offers opportunities to grow technically, in business understanding, in project work and client interaction. SAP Access Management has been a significant business for nearly 30 years and can be a long-term career in the future.
          </p>

        </div>

      </section>
      {/* careers-management-section End */}




      {/* why s4access section start */}
      <section className="careers-why-s4access-section only-windows">
        <div className="careers-why-s4access-content">
          <h2 className="big-heading-text-white" style={{ textTransform: "none" }}>Why <br />
            s4access?</h2>
          <p className="text-white">
            <strong style={{ fontSize: "30px" }}>We are different</strong> <br /><br />

            At s4access, 'We are different' isn't just a slogan—it's a promise. Here, you might work remote but never alone with a challenge. Whether you're leading a major project or navigating a new role, there's always a colleague ready to support you. We believe in collaboration over competition, and we foster a culture where asking for help is a strength, not a weakness. This is how we grow together—and why our people stay and thrive.
            <br /><br /><br />
            <strong style={{ fontSize: "30px" }}>We grow</strong>
            <br /><br />
            Growth brings opportunities for the staff to grow and develop.
          </p>
        </div>
      </section>
      {/* why s4access section End */}





      {/* why s4access section start */}

      <section className="careers-why-s4access-section only-mobile">
        <div className="careers-why-s4access-content">
          <h2 className="big-heading-text-white" style={{ textTransform: "none" }}>Why s4access?</h2> <br />
          <h3 className="sub-big-heading-text-white">
            We are different </h3>
 <br />
          <p className="text-white">
            At s4access, 'We are different' isn't just a slogan—it's a promise. Here, you might work remote but never alone with a challenge. Whether you're leading a major project or navigating a new role, there's always a colleague ready to support you. We believe in collaboration over competition, and we foster a culture where asking for help is a strength, not a weakness. This is how we grow together—and why our people stay and thrive.
          </p>
          <br />
          <h3 className="sub-big-heading-text-white">We grow</h3>
          <br />
          <p className="text-white">
            Growth brings opportunities for the staff to grow and develop.
          </p>
        </div>
      </section>
      {/* why s4access section End */}






      {/* careers Our promise to you section start */}




      <section className="careers-our-promise-section">
        <div className="careers-our-promise-content-left">
          <h2 className="big-heading-text-black">Our promise to you</h2>
        </div>
        <div className="careers-our-promise-content-right">
          <div className="careers-our-promise-content-right-inner">
            <FaUsers className="text-black" size={24} />
            <h3 className="sub-big-heading-text-black-lite">
              Community and teamwork
            </h3>
          </div>
          <div className="careers-our-promise-content-right-inner">
            <FaTrophy className="text-black" size={24} />
            <h3 className="sub-big-heading-text-black-lite">
              Professional excellence
            </h3>
          </div>
        </div>
        <div className="careers-our-promise-content-right">
          <div className="careers-our-promise-content-right-inner">
            <FaDove className="text-black" size={24} />
            <h3 className="sub-big-heading-text-black-lite">
              Freedom and responsibility
            </h3>
          </div>
          <div className="careers-our-promise-content-right-inner">
            <FaHeartbeat className="text-black" size={24} />
            <h3 className="sub-big-heading-text-black-lite">
              Modern benefits with health care
            </h3>
          </div>
        </div>
      </section>



      {/* careers Our promise to you section end */}

      {/* Testimonial section start */}

      <TestimonialCarousel />

      {/* Testimonial section End */}



      {/* <Blogs /> */}







      {/* careers Open roles start */}
      <section className="careers-open-roles-section">
        <div className="careers-open-roles-header">
          <h2 className="big-heading-text-black">Open roles</h2>
        </div>
        <div className="careers-open-roles-content">






          {/* <div className="open-role-card">
            <div className="open-role-info">
              <h3 className="sub-big-heading-text-black">Junior SAP Consultant</h3>
              <div className="sub-heading-text-black  open-role-details">
                <span>Build your next chapter bold and belong here!</span>
                <p className="open-role-divider"></p>
                <span>Helsinki </span>
                <p className="open-role-divider"></p>
                <span>Remote</span>
                <p className="open-role-divider"></p>
                <span>Finnish Speaking</span>
              </div>
            </div><br />
            <a href="https://s4access.careers.haileyhr.app/" className="main-button-blue ">
              Apply Now<span><i className="bi bi-arrow-up-right"></i></span>
            </a>
          </div> */}


          <div className="open-role-card"> 

          <h3 className="sub-big-heading-text-black">No Open Positions</h3>

          </div>







        </div>
      </section>
      {/* careers Open roles End */}





      {/* Careers Gallery Section Start */}
      <section className="careers-gallery-section ">

        <h2 className="big-heading-text-black" style={{ textTransform: "none" }}>Life at s4access</h2>


        <CareersGallerySection />


      </section>
      {/* Careers Gallery Section End */}







          </>
  );
};

export default Careers;



{/* why s4access section End */ }










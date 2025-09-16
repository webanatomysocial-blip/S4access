import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/App.css';
import CustomerSuccessCards from "../components/CustomerSuccessCards.jsx";
import banner1 from '../assets/images/home-img/Success-top-img.jpg';
import banner2 from '../assets/images/home-img/Success-top-img-2.jpg';


function CustomerSuccess() {


  return (
    <div>
      <Header />
      <section className="customer-hero-section">
        <div className="customer-hero-left-content">
          <p className="extra-big-heading-text-white">
            Expert Care for SAP Security

          </p>
          <p className="text-white">
            Our approach to daily work is built on two core principles:
            We focus on our current customers, and we do this in true long-term partnership.
            SAP security is never fixed overnight. It requires deep expertise, consistency, and trust. From day one, we bring together the collective knowledge of our company to ensure your SAP Access Management is handled with more care than even you might expect.          </p>


        </div>



        <div className="careers-hero-right-content">
          <img src={banner1} alt="" srcset="" />

        </div>

      </section>



      <section className="customer-hero-section-reverse">
        <div className="customer-hero-left-content-reverse">
          <p className="extra-big-heading-text-black">
            Join Easily, Stay for Success

          </p>
          <p className="text-black">
            We’re proud to say our customers stay with us. Our commitment to long-term success means we don’t chase quick wins—we build lasting value. And becoming our customer? It’s easy. No complicated onboarding, no endless paperwork—just a straightforward start to a partnership that’s built to last.
            We understand our approach might differ from other vendors in the market. But that’s exactly why it works. In case you are not already our customer, kindly contact us and we are happy to discuss a partnership with you!        </p>


        </div>

        <div className="careers-hero-right-content-reverse">
          <img src={banner2} alt="" srcset="" />

        </div>

      </section>


















      <CustomerSuccessCards />
      <Footer />
    </div>
  );
}

export default CustomerSuccess;
import Link from "next/link";
import Image from "next/image";
import '../../css/App.css';
import '../../css/Coustomer.css';
import CustomerSuccessonebyone from '../../components/CustomerSuccessonebyone.jsx';
import bannerBg from '../../assets/images/coustomer-success-page/banner.png';
import banner2 from '../../assets/images/home-img/Success-top-img-2.jpg';

export const metadata = {
  title: "SAP Access Management Customer Success Stories | s4access",
  description: "See how Nordic companies achieve long-term SAP access management success with s4access. Real customer results, easy onboarding and partnerships built to last.",
};


function CustomerSuccess() {
  return (
    <>
      
            <section
        className="customer-success-top-hero"
        style={{ backgroundImage: `url(${bannerBg.src || bannerBg})` }}
      >
        <div className="customer-success-top-hero-content"> 
          <h1 className="big-heading-text-white">
            Expert Care For SAP
            <br />
            Access Management
          </h1>
          <p className="customer-success-top-hero-text">
            Our approach to daily work is built on two core principles: We focus
            on our current customers, and we do this in true long-term
            partnership. SAP security is never fixed overnight. It requires deep
            expertise, consistency, and trust. From day one, we bring together
            the collective knowledge of our company to ensure yourSAP Access
            Management is handled with more care than even you might expect.
          </p>
        </div>
      </section>

      <section className="customer-hero-section-reverse">
        <div className="customer-hero-left-content-reverse">
          <h2 className="big-heading-text-black">
            Join Easily,
            <br />
            Stay For Success
            <br />
          </h2>
          <br />
          <p className="text-black customer-hero-text">
            We’re proud to say our customers stay with us. Our commitment to
            long-term success means we don’t chase quick wins—we build lasting
            value. And becoming our customer? It’s easy. No complicated
            onboarding, no endless paperwork—just a straightforward start to a
            partnership that’s built to last. We understand our approach might
            differ from other vendors in the market. But that’s exactly why it
            works. In case you are not already our customer, kindly <Link href="/contact">contact us</Link> {" "}
             and we are happy to discuss a partnership with you!
          </p>

          <div className="customer-quote-block">
            "Our commitment to long-term success means we don’t chase quick
            wins—we build lasting value."
          </div>
        </div>

        <div className="careers-hero-right-content-reverse customer-hero-image-container">
          <Image
            src={banner2}
            alt="Join Easily"
            className="customer-hero-image-new"
          />
        </div>
      </section>

      <CustomerSuccessonebyone />
          </>
  );
}

export default CustomerSuccess;

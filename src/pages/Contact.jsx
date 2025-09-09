import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';


function Contact() {
  return (
    <div>
      <Header />

      <section className="contact-hero-section">
             
                <p className="extra-big-heading-text-white">
                  Contact Us
      
                </p>
                <p className="text-white">
                 Curious to learn more about what we do? <br />

Let’s talk—just fill out the form and we’ll be in touch soon.

      
                </p>
      
      
        
          
      

      
            </section>
      
      
      <div className="contact-container">
      <div className="contact-content">
       
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
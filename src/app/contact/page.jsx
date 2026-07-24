import ContactForm from '../../components/ContactForm.jsx';

export const metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact us SAP Access Management Specialist | s4access",
  description: "Get in touch with s4access – SAP access governance & compliance\nspecialists. Fill out our contact form or call us to secure your enterprise access management",
};



function Contact() {
  return (
    <div>
       
      
      <section className="contact-hero-section">
             
                <h1 className="extra-big-heading-text-white">
                  Contact Us
                </h1>
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
      
          </div>
  );
}

export default Contact;
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { Helmet } from 'react-helmet-async';


function Contact() {
  return (
    <div>
       <Helmet>

        <title>Contact us SAP Access Management Specialist | s4access</title>
        <meta name="title" content="Contact us SAP Access Management Specialist | s4access" />
        <meta
          name="description"
          content="Get in touch with s4access – SAP access governance & compliance
specialists. Fill out our contact form or call us to secure your enterprise access management"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://s4access.com/contact#contactpage",
            "url": "https://s4access.com/contact",
            "name": "Contact s4access",
            "description":
              "Contact s4access for SAP Access Management, SAP Security, SoD remediation, SAP GRC implementation, and SAP access consulting services across the Nordic region.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://s4access.com/#organization",
              "name": "s4access",
              "url": "https://s4access.com/",
              "logo": "https://s4access.com/assets/Mainlogo-9IvBezmq.png",
              "telephone": "+358207191010",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+358207191010",
                "url": "https://s4access.com/contact",
                "availableLanguage": ["English"],
              },
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Helsinki",
                  "addressCountry": "FI",
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Porvoo",
                  "addressCountry": "FI",
                },
              ],
            },
          })}
        </script>

      </Helmet>
      <Header />

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
      
      <Footer />
    </div>
  );
}

export default Contact;
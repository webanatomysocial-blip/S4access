import React, { useState, useRef } from 'react';
import SmoothLink from '../components/SmoothLink';

const services = [
  {
    category: "SAP Access Design",
    items: [
      { title: 'SAP Access Management Review', desc: 'Enhance SAP access management by identifying risks, optimizing processes, and improving efficiency. Gain clear insights into governance, technical setup, and SoD risks. Receive actionable guidance for secure operations.' },
      { title: 'SoD Stratergy Approach', desc: ' Adopt a proactive SoD strategy to reduce risks, optimize resources, and ensure SAP compliance. Gain structured guidance on governance, processes, tools, and continuous improvement for sustainable access management.' },
      { title: 'SAP Access Management Automation', desc: 'Align SAP access technology with a clear strategy to avoid wasted costs and weak results. Our consulting ensures the right tools enhance compliance, security, and efficiency.' }
    ]
  },
  {
    category: "SAP Access Projects",
    items: [
      { title: 'SAP S/4 access implementation', desc: 'Modernize SAP access during S/4 transformation with expert planning, tailored tools, and deep expertise. Ensure secure, efficient, and cost-effective implementation while avoiding rework and ongoing maintenance challenges.' },
      { title: 'SoD / Role redesign', desc: 'Break the recurring SAP role redesign cycle with a sustainable, well-governed access approach. Our tailored projects address governance, processes, and technology to ensure lasting, adaptable role structures.z' },
      { title: 'Reorganisation / M&A projects', desc: 'Manage SAP access smoothly during business changes with rapid planning, risk mitigation, and scalable expertise. Our specialist support reduces compliance risks, controls costs, and ensures continuity under pressure.' }
    ]
  },
  {
    category: "SAP Access Services",
    items: [
      { title: 'Outsourced Access Management', desc: 'Simplify modern SAP access management with SAM, our proven outsourcing service. Combining expertise, best practices, and cloud analytics, SAM ensures compliance, reduces risks, and delivers scalable, cost-efficient solutions.' },
      { title: 'Authorisation Concept Owner', desc: 'Address the SAP Authorization Concept Owner gap with our scalable outsourcing service. Gain rare expertise, enhanced stability, and cost savings through experienced consultants, proven methods, and sustainable continuity.' },
      { title: 'Security Architect', desc: 'Strengthen SAP security with our ongoing architecture and design consulting service. Delivered by experienced professionals, it ensures compliance, stability, and long-term alignment with business and IT goals.' }
    ]
  },
  {
    category: "SAP Access Solutions",
    items: [
      { title: 'Access Risk SoD Management', desc: 'Simplify SAP SoD management with the s4access platform—fast to implement, low-cost, and fully managed. Gain ready-to-use risk insights, improved compliance, and scalable governance without specialized expertise.' },
      { title: 'FF Log review automation', desc: 'Streamline SAP emergency access with s4access automated log review service. Quickly deployed and fully managed, it simplifies reviews, ensures compliance, and delivers trusted, audit-validated results.' },
      { title: 'SAP Licence optimisation', desc: 'Optimize SAP licensing in the S/4 era with s4access compliance and optimization service. Gain visibility, simulate cost impacts, and ensure control to avoid compliance risks and unexpected expenses.' }
    ]
  }
];

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(0);
  const sectionRefs = useRef([]);

  const handleMouseEnter = (categoryIndex, itemIndex) => {
    setHoveredService(categoryIndex * 10 + itemIndex); // Unique index for each service
  };

  return (
    <div className='our-Service-Section'>
      <div className='our-Service-Section-left-container-sticky'>
        <p className='big-heading-text-black'>Our Services</p>
        <div className='our-Service-left-container-green'>
          {services.map((category, categoryIdx) => (
            <React.Fragment key={categoryIdx}>
              <p className='sub-heading-text-white' style={{ backgroundColor: '#000', color: '#fff', padding: '10px', margin: '10px 0' }}>
                {category.category}
              </p>
              {category.items.map((service, itemIdx) => (
                <SmoothLink
                  key={`${categoryIdx}-${itemIdx}`}
                  to={`#id-${categoryIdx}-${itemIdx}`}
                  className={`text-black ${hoveredService === (categoryIdx * 10 + itemIdx) ? 'active-link' : ''} scrolling-link-our-services`}
                  onMouseEnter={() => handleMouseEnter(categoryIdx, itemIdx)}
                  style={{
                    transition: 'color 0.5s',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                >
                  {service.title}
                </SmoothLink>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='our-Service-Section-right-container'>
        {services.map((category, categoryIdx) =>
          category.items.map((service, itemIdx) => (
            <div
              key={`${categoryIdx}-${itemIdx}`}
              ref={(el) => (sectionRefs.current[categoryIdx * 10 + itemIdx] = el)}
              id={`id-${categoryIdx}-${itemIdx}`}
              className='scrolling-container-our-services'
              style={{ display: hoveredService === (categoryIdx * 10 + itemIdx) ? 'block' : 'none' }}
            >
				<div className='scrolling-link-our-services-container'>
              <p className='sub-big-heading-text-black'>{service.title}</p>
              <p className='text-black'>{service.desc}</p>
              <a href='/' className='main-button-blue'>
                <span>Learn More </span>
                <span>
                  <i className='bi bi-arrow-up'></i>
                </span>
              </a>
			  </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
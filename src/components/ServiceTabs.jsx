import React, { useState } from 'react';
import '../css/ServiceTabs.css'

const services = [
    {
        category: "SAP Access Design",
        items: [
            {
                title: 'SAP Access Management Review',
                desc: 'Enhance SAP access management by identifying risks, optimizing processes, and improving efficiency. Gain clear insights into governance, technical setup, and SoD risks. Receive actionable guidance for secure operations.',
                link: '/sap-access-management-review'
            },
            {
                title: 'SoD Strategy Approach',
                desc: 'Adopt a proactive SoD strategy to reduce risks, optimize resources, and ensure SAP compliance. Gain structured guidance on governance, processes, tools, and continuous improvement for sustainable access management.',
                link: '/sod-strategy-approach'
            },
            {
                title: 'SAP Access Management Automation',
                desc: 'Align SAP access technology with a clear strategy to avoid wasted costs and weak results. Our consulting ensures the right tools enhance compliance, security, and efficiency.',
                link: '/sap-access-management-automation'
            }
        ]
    },
    {
        category: "SAP Access Projects",
        items: [
            {
                title: 'SAP S/4 access implementation',
                desc: 'Modernize SAP access during S/4 transformation with expert planning, tailored tools, and deep expertise. Ensure secure, efficient, and cost-effective implementation while avoiding rework and ongoing maintenance challenges.',
                link: '/sap-s4-access-implementation'
            },
            {
                title: 'SoD / Role redesign',
                desc: 'Break the recurring SAP role redesign cycle with a sustainable, well-governed access approach. Our tailored projects address governance, processes, and technology to ensure lasting, adaptable role structures.',
                link: '/sod-role-redesign'
            },
            {
                title: 'Reorganisation / M&A projects',
                desc: 'Manage SAP access smoothly during business changes with rapid planning, risk mitigation, and scalable expertise. Our specialist support reduces compliance risks, controls costs, and ensures continuity under pressure.',
                link: '/reorganisation-ma-projects'
            }
        ]
    },
    {
        category: "SAP Access Services",
        items: [
            {
                title: 'Outsourced Access Management',
                desc: 'Simplify modern SAP access management with SAM, our proven outsourcing service. Combining expertise, best practices, and cloud analytics, SAM ensures compliance, reduces risks, and delivers scalable, cost-efficient solutions.',
                link: '/outsourced-access-management'
            },
            {
                title: 'Authorisation Concept Owner',
                desc: 'Address the SAP Authorization Concept Owner gap with our scalable outsourcing service. Gain rare expertise, enhanced stability, and cost savings through experienced consultants, proven methods, and sustainable continuity.',
                link: '/authorisation-concept-owner'
            },
            {
                title: 'Security Architect',
                desc: 'Strengthen SAP security with our ongoing architecture and design consulting service. Delivered by experienced professionals, it ensures compliance, stability, and long-term alignment with business and IT goals.',
                link: '/security-architect'
            }
        ]
    },
    {
        category: "SAP Access Solutions",
        items: [
            {
                title: 'Access Risk SoD Management',
                desc: 'Simplify SAP SoD management with the s4access platform—fast to implement, low-cost, and fully managed. Gain ready-to-use risk insights, improved compliance, and scalable governance without specialized expertise.',
                link: '/access-risk-sod-management'
            },
            {
                title: 'FF Log review automation',
                desc: 'Streamline SAP emergency access with s4access automated log review service. Quickly deployed and fully managed, it simplifies reviews, ensures compliance, and delivers trusted, audit-validated results.',
                link: '/ff-log-review-automation'
            },
            {
                title: 'SAP Licence optimisation',
                desc: 'Optimize SAP licensing in the S/4 era with s4access compliance and optimization service. Gain visibility, simulate cost impacts, and ensure control to avoid compliance risks and unexpected expenses.',
                link: '/sap-license-optimisation'
            }
        ]
    }
];

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="main-tab-container">
                <div>
                <div className="main-tab-left-container">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <p className='sub-heading-text'>{index + 1}. {service.category}</p>
                        </div>
                    ))}
                </div>
                </div>

                <div className="main-tab-right-container">
                    <div className="tab-content">
                        {services[activeTab].items.map((item, idx) => (
                            <div key={idx} className="service-item" style={{ marginBottom: '20px' }}>
                                <p className='sub-big-heading-text-black '>{item.title}</p>
                                <p className='text-black'>{item.desc}</p>
                                <a className='read-more-btn-blue' href={item.link}>Read More <i className="bi bi-arrow-right arrow-icon"></i></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceTabs;
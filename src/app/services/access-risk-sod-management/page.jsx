import Image from "next/image";
import React from "react";
import Link from "next/link";
import '../../../css/InnerServices.css';
import FAQTemplate from '../../../components/FAQTemplate.jsx';
import { FaCogs, FaChartLine, FaShieldAlt, FaUserTie, FaUsersCog } from "react-icons/fa";
import case1img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case1.jpg';
import case2img from '../../../assets/images/inner-services-images/SAP-Access-managment-review-case2.jpg';
import image from '../../../assets/images/inner-services-images/access-risk-sod-management-banner.jpg';

export const metadata = {
  title: "SAP Access Risk & SoD Management Solutions | s4access",
  description: "Identify and prevent SAP SoD conflicts with a fully managed access risk service. Operational within weeks, no specialist skills needed and fixed monthly fee.",
};


export default function SAPSoDApproach() {



    const faqs = [
        {
            question: 'When should we use this service?',
            answer: 'There’s virtually no situation where this service isn’t valuable. Whether you\'re designing new roles, implementing SAP systems, or optimizing existing SoD controls, continuous access risk management helps ensure compliance, reduce audit findings, and improve security.'
        },
        {
            question: 'Is it fast to implement?',
            answer: 'Yes. Once the initial paperwork and technical enablement are complete, the first access risk results are typically available within 1–2 days, allowing for a quick start to analysis and decision-making.'
        },
        {
            question: 'Is the service audit-proven?',
            answer: 'Absolutely. Our customers have been using this service for years and have successfully passed audits by all major auditing firms—without comments. It consistently meets audit standards and supports transparent, well-documented access risk management.'
        },
        {
            question: 'What is expected from us as the customer?',
            answer: 'Very little to get started. The service is up and running with minimal effort on your side. Once enabled, we’ll guide you through setting up the necessary governance and processes to ensure you get full value from the access risk results.'
        },
        {
            question: 'How does the cost compare to other alternatives in the market?',
            answer: 'The service is based on a reasonable fixed monthly fee, which keeps budgeting simple and predictable. Compared to several software-based solutions, the total cost of ownership is significantly lower, especially when factoring in implementation, maintenance, and complexity.'
        },
        {
            question: 'Does it cover ECC and S/4 environments?',
            answer: 'Yes. The service fully supports both SAP ECC and SAP S/4HANA environments, ensuring consistent access risk management across legacy and modern SAP landscapes.'
        }
    ];





    return (
        <>
            
            
            <section className="service-container-1">
                <div className="service-left">
                    <h1 className="extra-big-heading-text-white">
                        Access Risk SoD Management
                    </h1>
                    <p className="text-white">
                        We identify, monitor, and prevent access risks and Segregation of Duties (SoD) conflicts, ensuring stronger compliance, smoother audits, and secure SAP operations.
                    </p>
                </div>
                <div className="service-right only-windows">
                    <div className="service-image">
                        <Image src={image} alt="cloud compliance" priority={true} />
                    </div>
                </div>
            </section>

            <section className="service-solution-container-not ">
                <div className="service-solution-content ">
                    <div className="solution-grid ">

                        <div className="solution-intro-card only-windows ">
                            <h2 className="big-heading-text-white">Choosing and Implementing an SAP SoD Tool: Common Challenges</h2>
                            <div className="card-sub-content">
                                <p className="text-white">
                                    Every SAP organization requires a clear Segregation of Duties (SoD) approach, supported by the right tool.
                                    However, selecting and implementing such a solution is often challenging. Many organizations lack deep <Link href="/services/security-architect">SAP security expertise</Link>,
                                    making it difficult to evaluate options and define the necessary risk and control frameworks.
                                </p>
                                <p className="text-white">
                                    Implementation projects can be lengthy and resource-intensive, and the license costs for SoD tools can be significant.
                                    Moreover, operating the solution effectively requires specialized skills and dedicated headcount—resources that are often scarce.
                                </p>
                                <p className="text-white">
                                    Without the right foundation and ongoing support, these projects can result in high long-term costs with limited improvement
                                    in compliance or operational efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="solution-intro-card only-windows ">
                            <h2 className="big-heading-text-white">SAM Platform – Streamlined SAP Access Risk & SoD Management</h2>
                            <div className="card-sub-content">
                                <p className="text-white">
                                    s4access offers a proven solution for SAP Access Risk Management and Segregation of Duties (SoD), designed to overcome the common challenges organizations face.
                                    As part of the proprietary s4access platform, the service is fast to implement, typically operational within just a few weeks,
                                    and requires no specialized skills or resources from the customer.
                                </p>
                                <p className="text-white">
                                    The solution includes a comprehensive set of ready-to-use <Link href="/blogs/sap-access-governance-sod-risk">SAP SoD risk</Link> definitions, enabling organizations to gain meaningful insights into access risks
                                    without needing deep technical expertise. Delivered as a fully managed service with a fixed monthly fee, it offers a low-risk, high-value approach to access governance.
                                </p>
                            </div>
                        </div>

                        <div className="solution-intro-card-2      only-mobile ">
                            <h2 className="big-heading-text-white">Choosing and Implementing an SAP SoD Tool: Common Challenges</h2>
                            <div className="card-sub-content-2">
                                <p className="text-white">
                                    Every SAP organization requires a clear Segregation of Duties (SoD) approach, supported by the right tool.
                                    However, selecting and implementing such a solution is often challenging. Many organizations lack deep <Link href="/services/security-architect">SAP security expertise</Link>,
                                    making it difficult to evaluate options and define the necessary risk and control frameworks.
                                </p>
                                <p className="text-white">
                                    Implementation projects can be lengthy and resource-intensive, and the license costs for SoD tools can be significant.
                                    Moreover, operating the solution effectively requires specialized skills and dedicated headcount—resources that are often scarce.
                                </p>
                                <p className="text-white">
                                    Without the right foundation and ongoing support, these projects can result in high long-term costs with limited improvement
                                    in compliance or operational efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="solution-intro-card-not only-mobile">
                            <h2 className="big-heading-text-black">SAM Platform – Streamlined SAP Access Risk & SoD Management</h2>
                            <div className="card-sub-content">
                                <p className="text-black">
                                    s4access offers a proven solution for SAP Access Risk Management and Segregation of Duties (SoD), designed to overcome the common challenges organizations face.
                                    As part of the proprietary s4access platform, the service is fast to implement, typically operational within just a few weeks,
                                    and requires no specialized skills or resources from the customer.
                                </p>
                                <p className="text-black">
                                    The solution includes a comprehensive set of ready-to-use <Link href="/blogs/sap-access-governance-sod-risk">SAP SoD risk</Link> definitions, enabling organizations to gain meaningful insights into access risks
                                    without needing deep technical expertise. Delivered as a fully managed service with a fixed monthly fee, it offers a low-risk, high-value approach to access governance.
                                </p>
                            </div>
                        </div>

                        <div className="solution-cards sod-deliverables-cards">
                            <div className="solution-card">
                                <div className="card-icon"><FaCogs className="icon" /></div>
                                <p className="text-white">Fast implementation – typically operational within a few weeks</p>
                            </div>

                            <div className="solution-card">
                                <div className="card-icon"><FaChartLine className="icon" /></div>
                                <p className="small-text-white">No specialized skills or resources required from the customer</p>
                            </div>

                            <div className="solution-card">
                                <div className="card-icon"><FaShieldAlt className="icon" /></div>
                                <p className="small-text-white">Ready-to-use SAP SoD risk definitions for meaningful insights</p>
                            </div>

                            <div className="solution-card">
                                <div className="card-icon"><FaUserTie className="icon" /></div>
                                <p className="small-text-white">Fully managed service with a fixed monthly fee</p>
                            </div>

                            <div className="solution-card">
                                <div className="card-icon"><FaUsersCog className="icon" /></div>
                                <p className="small-text-white">Proven scalability – hundreds of access risk reports generated annually</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>







            <section className="strength-showcase" style={{ display: 'none' }}>
                <div className="strength-left">
                    <h2 className="big-heading-text-white">Case Studies</h2>
                    <p className="text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fugit magnam velit eum aliquam eos, cumque cum corrupti rem facilis soluta quae nisi, in atque repellat eius ipsa assumenda! Alias!
                    </p>
                </div>

                {/* Case Study 1 - Project Detail */}
                <div className="strength-right">
                    <div className="stats-card">
                        <h3 className="sub-heading-text-black">Lorem, ipsum dolor.</h3>
                        <h4 className="text-black">Lorem, ipsum dolor.</h4>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque fugit quam quidem eius corporis consequatur distinctio
                        </p>
                        <div className="image-container-showcase">
                            <Image src={case1img} alt="case study" />
                        </div>
                    </div>
                </div>

                {/* Case Study 2 - Business Outcome */}
                <div className="strength-right">
                    <div className="stats-card">
                        <h3 className="sub-heading-text-black">Lorem, ipsum dolor.</h3>
                        <h4 className="text-black">Lorem, ipsum dolor.</h4>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque fugit quam quidem eius corporis consequatur distinctio
                        </p>
                        <div className="image-container-showcase">
                            <Image src={case2img} alt="case study" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="strength-bottom">
                <div className="stat-card">
                    <div className="stat-box">
                        <div className="stat-topline">
                            <span className="dot"></span>
                            <h3 className="big-heading-text-black">30,000+</h3>
                        </div>
                        <ul className="stat-sub">
                            <li className="text-black">Access risk checks performed</li>
                        </ul>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-box">
                        <div className="stat-topline">
                            <span className="dot"></span>
                            <h3 className="big-heading-text-black">200M+</h3>
                        </div>
                        <ul className="stat-sub">
                            <li className="text-black">User access transactions secured</li>
                        </ul>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-box">
                        <div className="stat-topline">
                            <span className="dot"></span>
                            <h3 className="big-heading-text-black">4.8</h3>
                        </div>
                        <ul className="stat-sub">
                            <li className="text-black">Average client satisfaction rating</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* FAQs section start */}
            <FAQTemplate title="FAQs" faqs={faqs} />
            {/* FAQs section end */}

            <section className="service-cta-section">
                <div className="service-cta-content">
                    <div className="cta-flex-container">
                        <div className="cta-text">
                            <h2 className="big-heading-text-white">Ready to Transform Your SAP Access Management?</h2>
                            <p className="text-white">
                                Get expert guidance and solutions tailored to your organization's needs
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link href="/Contact" className="button-green">
                                Contact Us
                            </Link>
                            <Link href="/customer-success" className="border-button">
                                Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

                    </>
    );
}
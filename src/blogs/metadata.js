// Import the local image
import img22 from './blogs-images/blog1-img.jpg';
import img21 from './blogs-images/2.jpg';
import img23 from './blogs-images/1.jpg';
import img24 from './blogs-images/3.jpg';
import Blog5 from './blogs-images/Blog-5.jpg';
import Blog6 from './blogs-images/Blog-6.jpg';
import Blog7 from './blogs-images/Blog-7.jpg';
import Blog8 from './blogs-images/Blog8.jpg';
export const blogMetadata = [
  {
    id: "Is-SAP-Certification-Still-Valid-for-Your-Career-in-2025", // Matches file name without .jsx
    title: "Is the SAP Certification Still Valid for Your Career in 2025?",
    slug: "sap-certification-2025",
    metaDescription: "Discover if SAP certification is still worth it in 2025. Explore industry demand, SAP’s evolution, career benefits, and why continuous learning is key.",
    excerpt: "In 2025, SAP certification continues to hold value for professionals aiming to grow within the SAP ecosystem. With SAP’s shift toward cloud and intelligent enterprise, modern certifications matter more than ever. Continuous learning and complementary digital skills enhance career growth and relevance in a competitive job market.",
    image: img22,
    date: "2025-08-26",
  },
  {
    id: "Autumn-2025-Outlook", 
    title: "Autumn 2025 Outlook: Navigating SAP Security and Access Management in a New Market Reality – Is There a Way Forward ?",
    slug: "Autumn-2025-Outlook", 
    metaDescription: "Explore SAP security and access management in Autumn 2025’s cost-conscious market. Learn key challenges, solutions, and a proactive approach to optimize SAP systems.",
    excerpt: "In Autumn 2025, economic pressures demand smarter SAP security and access management. Discover common pitfalls and a clear, actionable plan to strengthen your SAP systems while aligning with business needs in a transforming market.",
    image: img21,
    date: "2025-08-30",
  },
  {
    id: "Turning-Frustration-into-Value",
    title: "Understanding SAP Access Management Audits: Turning Frustration into Value ",
    slug: "Turning-Frustration-into-Value",
    metaDescription: "Explore SAP security and access management in Autumn 2025’s cost-conscious market. Learn key challenges, solutions, and a proactive approach to optimize SAP systems.",
    excerpt: "When speaking with SAP customers, one sentiment comes up again and again: audits are frustrating. Many teams feel that audit processes are disconnected from the realities of day-to-day SAP operations. Findings often focus on technical details that seem minor or irrelevant, while overlooking business context and practical constraints.",
    image: img23,
    date: "2025-09-16",
  },
  {
    id: "Best-Practices-and-Pitfalls",
    title: "Managing Public Views in Fiori S/4HANA: Best Practices and Pitfalls",
    slug: "Best-Practices-and-Pitfalls",
    metaDescription: "In SAP S/4HANA Fiori apps—whether standard or extended—public views play a key role in tailoring user experiences. These views can be created with a transport request (TR) and mapped to user-specific roles, ensuring that only authorized users with the appropriate roles can access them.",
    excerpt: "In SAP S/4HANA Fiori apps—whether standard or extended—public views play a key role in tailoring user experiences. These views can be created with a transport request (TR) and mapped to user-specific roles, ensuring that only authorized users with the appropriate roles can access them.",
    image: img24,
    date: "2025-09-20",
  },
  {
    id: "Typical-Challenges-in-Approving-SAP-Access-Requests",
    title: "Typical Challenges in Approving SAP Access Requests",
    slug: "Typical-Challenges-in-Approving-SAP-Access-Requests",
    metaDescription: "Explore the common challenges organizations face when approving SAP access requests. Learn best practices to streamline the process and enhance security.",
    excerpt: "Approving SAP access requests is not just a formality—it requires careful judgment and can directly impact the amount of access risks. Governance mandate means the permission to say no just as well as yes: approvers must actively review each request, not just rubber-stamp them.",
    image: Blog5,
    date: "2025-10-06",
  },
  {
    id: "RICEFW-Security-Guidelines",
    title: "RICEFW Security Guidelines: Building Security into Custom Developments – Part I",
    slug: "RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-I",
    metaDescription: "Explore the common challenges organizations face when approving SAP access requests. Learn best practices to streamline the process and enhance security.",
    excerpt: "When talking about SAP security, most conversations revolve around roles, authorizations, and segregation of duties. But there’s another critical piece that often slips under the radar: RICEFW objects.",
    image: Blog6,
    date: "2025-10-09",
  },
  {
    id: "RICEFW-Security-Guidelines-Part-2",
    title: "RICEFW Security Guidelines: Building Security into Custom Developments – Part II",
    slug: "RICEFW-Security-Guidelines-Building-Security-into-Custom-Developments-Part-II",
    metaDescription: "Explore the common challenges organizations face when approving SAP access requests. Learn best practices to streamline the process and enhance security.",
    excerpt: "When discussing SAP security, the focus often stays on roles, authorizations, and segregation of duties. However, an equally critical aspect tends to go unnoticed, RICEFW objects. In Part II of our blog series, we’ll dive deeper into other key RICEFW artifacts, namely Enhancements, Forms, and Workflows. ",
    image: Blog7,
    date: "2025-10-15",
  },
  {
    id: "How-Firefighter-IDs-Help-You-Stay-Compliant",
    title: "When Access Becomes a Risk: How Firefighter IDs Help You Stay Compliant",
    slug: "When-Access-Becomes-a-Risk-How-Firefighter-IDs-Help-You-Stay-Compliant",
    metaDescription: "How SAP Firefighter IDs provide controlled emergency access, prevent security risks, and keep systems audit-compliant with logging and timely review processes.",
    excerpt: "In SAP, teams may sometimes need quick access to fix urgent issues. But giving high-level access without proper control can lead to serious compliance and security risks. Firefighter IDs help by allowing temporary access only when needed, with approvals, time limits, and detailed activity logs. This keeps emergency work fully monitored and controlled, ensuring security while the business continues without interruption",
    image: Blog8,
    date: "2025-10-31",
  },
];

// Preload images with error handling
blogMetadata.forEach(blog => {
  const img = new Image();
  img.src = blog.image;
  img.onload = () => console.log(`Successfully preloaded image: ${blog.image}`);
  img.onerror = () => {
    console.error(`Failed to preload image: ${blog.image}`);
    blog.image = "/images/placeholder.jpg";
  };
});
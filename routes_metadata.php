<?php
// routes_metadata.php - Centralized route and metadata for Sitemap and SSR

$staticRoutes = [
    ['url' => '/', 'file' => 'src/pages/Home.jsx', 'changefreq' => 'daily', 'priority' => 1.0],
    ['url' => '/about', 'file' => 'src/pages/About.jsx', 'changefreq' => 'monthly', 'priority' => 0.8],
    ['url' => '/contact', 'file' => 'src/pages/Contact.jsx', 'changefreq' => 'monthly', 'priority' => 0.8],
    ['url' => '/customer-success', 'file' => 'src/pages/Customer-success.jsx', 'changefreq' => 'monthly', 'priority' => 0.8],
    ['url' => '/insights', 'file' => 'src/pages/Insights.jsx', 'changefreq' => 'weekly', 'priority' => 0.9],
    ['url' => '/services', 'file' => 'src/pages/Services.jsx', 'changefreq' => 'monthly', 'priority' => 0.8],
    ['url' => '/careers', 'file' => 'src/pages/Careers.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/s4-access-architecture-design', 'file' => 'src/pages/S4AccessArchitectureDesign.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sap-access-management-review', 'file' => 'src/pages/SAPAccessReview.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sod-strategy-approach', 'file' => 'src/pages/SAPSoDApproach.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sap-access-management-automation', 'file' => 'src/pages/SAPaccess.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sap-s4-access-implementation', 'file' => 'src/pages/SAPAuthorisationRedesign.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sod-role-redesign', 'file' => 'src/pages/SAPAuthorisationConceptDesign.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/reorganisation-ma-projects', 'file' => 'src/pages/SAPAccessSecurityConsulting.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/outsourced-access-management', 'file' => 'src/pages/SAPAccessManagementService.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/authorisation-concept-owner', 'file' => 'src/pages/SAPAuthorisationConceptOwnerService.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/security-architect', 'file' => 'src/pages/SAPGRCAccessControlServices.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/access-risk-sod-management', 'file' => 'src/pages/SAPSoDManagement.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/ff-log-review-automation', 'file' => 'src/pages/S4FFEmergencyUserAutomation.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/services/sap-license-optimisation', 'file' => 'src/pages/SAPLicenseCompliance.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/sap-authorisation-concept-owner', 'file' => 'src/coustomer-pages/SAP-Authorization-Concept-Owner-Service.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/s4-access-management-review', 'file' => 'src/coustomer-pages/S4Access-Management-Review.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/s4-transition-analysis', 'file' => 'src/coustomer-pages/S4-Transition-Analysis.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/s4-hana-fiori-transformation', 'file' => 'src/coustomer-pages/S4-Hana-Fiori-Transformation.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/stabilising-sap-access-at-scale', 'file' => 'src/coustomer-pages/Stabilising-SAP-Access-at-Scale.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/sam-service', 'file' => 'src/coustomer-pages/Helsinki-SAM-Service.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
    ['url' => '/customer-success/sap-ucon-implementation', 'file' => 'src/coustomer-pages/SAP-UCON-Implementation.jsx', 'changefreq' => 'monthly', 'priority' => 0.7],
];

// Blog Metadata (Mirrored from index.php)
$blogMetadata = [
    [
        "id" => "Is-SAP-Certification-Still-Valid-for-Your-Career-in-2025",
        "title" => "Is the SAP Certification Still Valid for Your Career in 2025?",
        "slug" => "sap-certification-2025",
        "metaDescription" => "Discover if SAP certification is still worth it in 2025. Explore industry demand, SAP's evolution, career benefits, and why continuous learning is key.",
        "image" => "/blogs-images/blog1-img.jpg",
        "date" => "2025-08-26"
    ],
    [
        "id" => "Autumn-2025-Outlook",
        "title" => "Autumn 2025 Outlook: Navigating SAP Security and Access Management in a New Market Reality – Is There a Way Forward ?",
        "slug" => "autumn-2025-outlook",
        "metaDescription" => "Explore SAP security and access management in Autumn 2025's cost-conscious market. Learn key challenges, solutions, and a proactive approach to optimize SAP systems.",
        "image" => "/blogs-images/2.jpg",
        "date" => "2025-08-30"
    ],
    [
        "id" => "Turning-Frustration-into-Value",
        "title" => "Understanding SAP Access Management Audits: Turning Frustration into Value ",
        "slug" => "turning-frustration-into-value",
        "metaDescription" => "When speaking with SAP customers, one sentiment comes up again and again: audits are frustrating. Many teams feel that audit processes are disconnected from the realities of day-to-day SAP operations.",
        "image" => "/blogs-images/1.jpg",
        "date" => "2025-09-16"
    ],
    [
        "id" => "Best-Practices-and-Pitfalls",
        "title" => "Managing Public Views in Fiori S/4HANA: Best Practices and Pitfalls",
        "slug" => "best-practices-and-pitfalls",
        "metaDescription" => "In SAP S/4HANA Fiori apps—whether standard or extended—public views play a key role in tailoring user experiences.",
        "image" => "/blogs-images/3.jpg",
        "date" => "2025-09-20"
    ],
    [
        "id" => "Typical-Challenges-in-Approving-SAP-Access-Requests",
        "title" => "Typical Challenges in Approving SAP Access Requests",
        "slug" => "typical-challenges-in-approving-sap-access-requests",
        "metaDescription" => "Explore the common challenges organizations face when approving SAP access requests. Learn best practices to streamline the process and enhance security.",
        "image" => "/blogs-images/Blog-5.jpg",
        "date" => "2025-10-06"
    ],
    [
        "id" => "RICEFW-Security-Guidelines",
        "title" => "RICEFW Security Guidelines: Building Security into Custom Developments – Part I",
        "slug" => "ricefw-security-guidelines-building-security-into-custom-developments-part-i",
        "metaDescription" => "When talking about SAP security, most conversations revolve around roles, authorizations, and segregation of duties. But there's another critical piece that often slips under the radar: RICEFW objects.",
        "image" => "/blogs-images/Blog-6.jpg",
        "date" => "2025-10-09"
    ],
    [
        "id" => "RICEFW-Security-Guidelines-Part-2",
        "title" => "RICEFW Security Guidelines: Building Security into Custom Developments – Part II",
        "slug" => "ricefw-security-guidelines-building-security-into-custom-developments-part-ii",
        "metaDescription" => "In Part II of our blog series, we'll dive deeper into other key RICEFW artifacts, namely Enhancements, Forms, and Workflows.",
        "image" => "/blogs-images/Blog-7.jpg",
        "date" => "2025-10-15"
    ],
    [
        "id" => "How-Firefighter-IDs-Help-You-Stay-Compliant",
        "title" => "When Access Becomes a Risk: How Firefighter IDs Help You Stay Compliant",
        "slug" => "when-access-becomes-a-risk-how-firefighter-ids-help-you-stay-compliant",
        "metaDescription" => "How SAP Firefighter IDs provide controlled emergency access, prevent security risks, and keep systems audit-compliant with logging and timely review processes.",
        "image" => "/blogs-images/Blog8.jpg",
        "date" => "2025-10-31"
    ],
    [
        "id" => "Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA",
        "title" => "Building Display Roles the Smart Way in SAP S/4HANA",
        "slug" => "building-display-roles-the-smart-way-in-sap-s4hana",
        "metaDescription" => "How to build display roles in SAP S/4HANA correctly to avoid common pitfalls and ensure compliance.",
        "image" => "/blogs-images/Blog10.jpg",
        "date" => "2025-11-11"
    ],
    [
        "id" => "why-feedback-from-it-auditors-matters",
        "title" => "Feedback Is a Gift – Even When It Comes from an External IT Auditor",
        "slug" => "why-feedback-from-it-auditors-matters",
        "metaDescription" => "Engaging external auditors is a strategic decision. Learn how to use auditor feedback to improve security and operations.",
        "image" => "/blogs-images/Blog-img011.jpg",
        "date" => "2025-11-28"
    ],
    [
        "id" => "A-Year-of-Strong-Growth-s4access-and-Its-Customers-Moving-Forward-Together",
        "title" => "A Year of Strong Growth: s4access and Its Customers Moving Forward Together",
        "slug" => "a-year-of-strong-growth-s4access-and-its-customers-moving-forward-together",
        "metaDescription" => "Explore how s4access and its customers achieved growth in 2025 through SAP Access Management, compliance, and innovation—while looking ahead to 2026.",
        "image" => "/blogs-images/9298.jpg",
        "date" => "2025-12-31"
    ],
    [
        "id" => "Your-Partner-for-Efficient-SAP-Access",
        "title" => "Your Partner for Efficient SAP Access",
        "slug" => "your-partner-for-efficient-sap-access",
        "metaDescription" => "Learn how clear SAP access tickets improve service levels, reduce delays, and help support teams resolve issues faster.",
        "image" => "/blogs-images/1165.webp",
        "date" => "2026-01-08"
    ],
    [
        "id" => "Native-HANA-database-authorizations",
        "title" => "Native HANA Database Authorizations",
        "slug" => "native-hana-database-authorizations",
        "metaDescription" => "When creating HANA database users and authorizations for custom-made schema structures",
        "image" => "/blogs-images/Blog-img012.jpg",
        "date" => "2025-12-15"
    ],
    [
        "id" => "SoD-Management-Concepts",
        "title" => "SoD Management Concepts: Keeping Access Risks Under Control",
        "slug" => "sod-management-concepts",
        "metaDescription" => "Segregation of Duties (SoD) is a foundational internal control designed to reduce the risk of errors, fraud, and misuse of authority.",
        "image" => "/blogs-images/Blog16.jpg",
        "date" => "2026-02-10"
    ],
    [
        "id" => "sap-access-management-consultant-guide",
        "title" => "How to Choose the Right SAP Access Consultant: When to Bring in External SAP Security & GRC Experts",
        "slug" => "sap-access-management-consultant-guide",
        "metaDescription" => "Learn when to bring in external SAP Access, Security, and GRC experts. Discover how to choose the right SAP consultant.",
        "image" => "/blogs-images/blog15.jpg",
        "date" => "2026-01-28"
    ],
    [
        "id" => "How-Leading-CISOs-Are-Approaching-SAP-Access-Management-in-2026",
        "title" => "How Leading CISOs Are Approaching SAP Access Management in 2026",
        "slug" => "sap-access-management-ciso-2026",
        "metaDescription" => "Learn how leading CISOs are transforming SAP access management from a technical IT issue into a strategic enterprise risk priority in 2026.",
        "image" => "/blogs-images/ciso-sap-access-2026.jpg",
        "date" => "2026-03-24"
    ],
    [
        "id" => "sap-access-governance-sod-risk",
        "title" => "SAP Access Governance SoD Risk in Controls",
        "slug" => "sap-access-governance-sod-risk",
        "metaDescription" => "SAP Access Governance SoD Risk exposes control gaps where users can create and approve transactions.",
        "image" => "/blogs-images/own.jpeg",
        "date" => "2026-04-29"
    ],
];

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogMetadata } from "../../../blogs/metadata.js";
import Blogs from "../../../components/Blog";
import "../../../blogs/Internal-Blog.css";

// We need to map the slug or id to the exact component file
// Since Next.js App router doesn't support dynamic variables in import easily without warnings,
// we can statically define the map or use a switch statement.

import Autumn2025Outlook from "../../../blogs/Autumn-2025-Outlook.jsx";
import TurningFrustrationIntoValue from "../../../blogs/Turning-Frustration-into-Value.jsx";
import BestPracticesAndPitfalls from "../../../blogs/Best-Practices-and-Pitfalls.jsx";
import TypicalChallengesInApprovingSAPAccessRequests from "../../../blogs/Typical-Challenges-in-Approving-SAP-Access-Requests.jsx";
import RICEFWGuidelines from "../../../blogs/RICEFW-Security-Guidelines.jsx";
import RICEFWGuidelinesPart2 from "../../../blogs/RICEFW-Security-Guidelines-Part-2.jsx";
import FirefighterIDs from "../../../blogs/How-Firefighter-IDs-Help-You-Stay-Compliant.jsx";
import BuildingDisplayRoles from "../../../blogs/Building-Display-Roles-the-Smart-Way-in-SAP-S4HANA.jsx";
import FeedbackFromITAuditors from "../../../blogs/why-feedback-from-it-auditors-matters.jsx";
import NativeHANADatabaseAuthorizations from "../../../blogs/Native-HANA-database-authorizations.jsx";
import StrongGrowth from "../../../blogs/A-Year-of-Strong-Growth-s4access.jsx";
import YourPartner from "../../../blogs/Your-Partner-for-Efficient-SAP-Access.jsx";
import SAPAccessManagementConsultantGuide from "../../../blogs/sap-access-management-consultant-guide.jsx";
import SoDManagementConcepts from "../../../blogs/SoD-Management-Concepts.jsx";
import LeadingCISOs from "../../../blogs/How-Leading-CISOs-Are-Approaching-SAP-Access-Management-in-2026.jsx";
import ApproveOwnPurchaseOrders from "../../../blogs/One-of-your-employees-can-probably-approve-their-own-purchase-orders-are-you-aware-of-it.jsx";
import SAPAccessManagementAutomation from "../../../blogs/SAP-Access-Management-Automation.jsx";
import SAPCertification2025 from "../../../blogs/Is-SAP-Certification-Still-Valid-for-Your-Career-in-2025.jsx";
import WhenACompanyGrows from "../../../blogs/When-a-company-grows-what-opportunities-can-it-create-for-its-people.jsx";
import SAPRoleBloat from "../../../blogs/SAP-Role-Bloat-FUE-Licensing-Costs.jsx";
import SAPUserAccessLifecycle from "../../../blogs/SAP-User-Access-Lifecycle.jsx";

const blogComponentMap = {
  "sap-certification-2025": SAPCertification2025,
  "autumn-2025-outlook": Autumn2025Outlook,
  "turning-frustration-into-value": TurningFrustrationIntoValue,
  "best-practices-and-pitfalls": BestPracticesAndPitfalls,
  "typical-challenges-in-approving-sap-access-requests": TypicalChallengesInApprovingSAPAccessRequests,
  "ricefw-security-guidelines-building-security-into-custom-developments-part-i": RICEFWGuidelines,
  "ricefw-security-guidelines-building-security-into-custom-developments-part-ii": RICEFWGuidelinesPart2,
  "when-access-becomes-a-risk-how-firefighter-ids-help-you-stay-compliant": FirefighterIDs,
  "building-display-roles-the-smart-way-in-sap-s4hana": BuildingDisplayRoles,
  "why-feedback-from-it-auditors-matters": FeedbackFromITAuditors,
  "native-hana-database-authorizations": NativeHANADatabaseAuthorizations,
  "a-year-of-strong-growth-s4access-and-its-customers-moving-forward-together": StrongGrowth,
  "a-year-of-strong-growth-s4access": StrongGrowth,
  "your-partner-for-efficient-sap-access": YourPartner,
  "sap-access-management-consultant-guide": SAPAccessManagementConsultantGuide,
  "sod-management-concepts": SoDManagementConcepts,
  "sap-access-management-ciso-2026": LeadingCISOs,
  "sap-access-governance-sod-risk": ApproveOwnPurchaseOrders,
  "sap-access-management-automation": SAPAccessManagementAutomation,
  "when-a-company-grows-what-opportunities-can-it-create-for-its-people": WhenACompanyGrows,
  "sap-role-bloat-fue-licensing-costs": SAPRoleBloat,
  "sap-user-access-lifecycle": SAPUserAccessLifecycle
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = blogMetadata.find((b) => b.slug === slug || b.id === slug);

  if (!metadata) {
    return { title: "Blog Not Found" };
  }

  const description = metadata.metaDescription || metadata.excerpt;
  const imageUrl = typeof metadata.image === 'string' ? metadata.image : (metadata.image?.src || "/images/black-logo-400.png");

  return {
    title: `${metadata.metaTitle || metadata.title} | s4access`,
    description,
    keywords: metadata.keywords || "",
    openGraph: {
      title: `${metadata.metaTitle || metadata.title} | s4access`,
      description,
      url: `https://s4access.com/blogs/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 627,
          alt: metadata.title,
        },
      ],
      type: "article",
      siteName: "s4access",
      publishedTime: metadata.date,
    },
  };
}

export default async function DynamicBlogPage({ params }) {
  const { slug } = await params;

  const metadata = blogMetadata.find((b) => b.slug === slug || b.id === slug);
  const BlogComponent = blogComponentMap[slug] || blogComponentMap[metadata?.slug] || blogComponentMap[metadata?.id];

  if (!metadata && !BlogComponent) {
    return (
      <div className="breach-article-wrapper">
        <h1>Blog Not Found</h1>
        <p>No blog found with the ID: {slug}</p>
        <Link href="/insights" className="back-btn">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const imageUrl = typeof metadata?.image === 'string' ? metadata.image : (metadata?.image?.src || "/images/black-logo-400.png");

  return (
    <>
      <div className="breach-article-wrapper">
        <div className="breach-hero-banner">
          <Image
            src={imageUrl}
            alt={metadata?.title ?? "s4access blog"}
            width={1200}
            height={627}
            priority
          />
          <div className="hero-overlay-section">
            <h1>{metadata?.title ?? "s4access"}</h1>
          </div>
        </div>

        <div className="breach-article-content">
          {BlogComponent ? <BlogComponent /> : <p>Blog content unavailable.</p>}
        </div>

        <section className="news-blogs-section-inner-blog-page">
          <div className="heading-news-blog">
            <h2 className="big-heading-text-black">Recent Blogs</h2>
          </div>
          <div className="news-blogs-container">
            <Blogs />
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return blogMetadata.map((blog) => ({
    slug: blog.slug,
  }));
}

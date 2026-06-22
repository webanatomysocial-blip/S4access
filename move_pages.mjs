import fs from 'fs';
import path from 'path';

const mapping = {
  "src/pages/Contact.jsx": "src/app/contact/page.jsx",
  "src/pages/Customer-success.jsx": "src/app/customer-success/page.jsx",
  "src/pages/Insights.jsx": "src/app/insights/page.jsx",
  "src/pages/Services.jsx": "src/app/services/page.jsx",
  "src/pages/Careers.jsx": "src/app/careers/page.jsx",
  "src/pages/LinkTree.jsx": "src/app/links/page.jsx",
  "src/pages/S4AccessProjects.jsx": "src/app/s4accessprojects/page.jsx",
  "src/pages/S4AccessArchitectureDesign.jsx": "src/app/services/s4-access-architecture-design/page.jsx",
  "src/pages/SAPAccessReview.jsx": "src/app/services/sap-access-management-review/page.jsx",
  "src/pages/SAPSoDApproach.jsx": "src/app/services/sod-strategy-approach/page.jsx",
  "src/pages/SAPaccess.jsx": "src/app/services/sap-access-management-automation/page.jsx",
  "src/pages/SAPAuthorisationRedesign.jsx": "src/app/services/sap-s4-access-implementation/page.jsx",
  "src/pages/SAPAuthorisationConceptDesign.jsx": "src/app/services/sod-role-redesign/page.jsx",
  "src/pages/SAPAccessSecurityConsulting.jsx": "src/app/services/reorganisation-ma-projects/page.jsx",
  "src/pages/SAPAccessManagementService.jsx": "src/app/services/outsourced-access-management/page.jsx",
  "src/pages/SAPAuthorisationConceptOwnerService.jsx": "src/app/services/authorisation-concept-owner/page.jsx",
  "src/pages/SAPGRCAccessControlServices.jsx": "src/app/services/security-architect/page.jsx",
  "src/pages/SAPSoDManagement.jsx": "src/app/services/access-risk-sod-management/page.jsx",
  "src/pages/S4FFEmergencyUserAutomation.jsx": "src/app/services/ff-log-review-automation/page.jsx",
  "src/pages/SAPLicenseCompliance.jsx": "src/app/services/sap-license-optimisation/page.jsx",

  "src/coustomer-pages/SAP-Authorization-Concept-Owner-Service.jsx": "src/app/customer-success/sap-authorisation-concept-owner/page.jsx",
  "src/coustomer-pages/S4Access-Management-Review.jsx": "src/app/customer-success/s4-access-management-review/page.jsx",
  "src/coustomer-pages/S4-Transition-Analysis.jsx": "src/app/customer-success/s4-transition-analysis/page.jsx",
  "src/coustomer-pages/S4-Hana-Fiori-Transformation.jsx": "src/app/customer-success/s4-hana-fiori-transformation/page.jsx",
  "src/coustomer-pages/Stabilising-SAP-Access-at-Scale.jsx": "src/app/customer-success/stabilising-sap-access-at-scale/page.jsx",
  "src/coustomer-pages/Helsinki-SAM-Service.jsx": "src/app/customer-success/sam-service/page.jsx",
  "src/coustomer-pages/SAP-UCON-Implementation.jsx": "src/app/customer-success/sap-ucon-implementation/page.jsx",
  "src/coustomer-pages/S4-Hana-Access-Management-Transformation.jsx": "src/app/customer-success/sap-s4hana-access-management-transformation/page.jsx"
};

for (const [source, dest] of Object.entries(mapping)) {
  if (fs.existsSync(source)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.renameSync(source, dest);
    console.log(`Moved ${source} to ${dest}`);
  } else {
    console.warn(`Source not found: ${source}`);
  }
}

import { StrictMode } from 'react';
import LenisProvider from './components/LenisProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CustomerSuccess from './pages/Customer-success.jsx';
import Insights from './pages/Insights.jsx';
import Services from './pages/Services.jsx';
import Careers from './pages/Careers.jsx';
import Lenis from '@studio-freight/lenis';
import S4AccessArchitectureDesign from './pages/S4AccessArchitectureDesign.jsx';
import S4AccessProjects from './pages/S4AccessProjects.jsx';
import SAPAccessSecurityConsulting from './pages/SAPAccessSecurityConsulting.jsx';
import SAPAccessManagementService from './pages/SAPAccessManagementService.jsx';
import SAPAuthorisationConceptOwnerService from './pages/SAPAuthorisationConceptOwnerService.jsx';
import SAPAccessReview from './pages/SAPAccessReview.jsx';
import SAPLicenseCompliance from './pages/SAPLicenseCompliance.jsx';
import SAPAuthorisationConceptDesign from './pages/SAPAuthorisationConceptDesign.jsx';
import SAPSoDManagement from './pages/SAPSoDManagement.jsx';
import S4FFEmergencyUserAutomation from './pages/S4FFEmergencyUserAutomation.jsx';
import SAPGRCAccessControlServices from './pages/SAPGRCAccessControlServices.jsx';
import SAPAuthorisationRedesign from './pages/SAPAuthorisationRedesign.jsx';
import SAPSoDApproach from './pages/SAPSoDApproach.jsx';
import SAPaccess from './pages/SAPaccess.jsx';
import ScrollToTop from '../src/components/ScrollToTop.jsx';
import BlogPage from '../src/pages/BlogPage.jsx'; // Import BlogPage
import SAPAuthorizationConceptOwner from './coustomer-pages/SAP-Authorization-Concept-Owner-Service.jsx';
import S4AccessManagementReview from './coustomer-pages/S4Access-Management-Review.jsx';
import S4TransitionAnalysis from './coustomer-pages/S4-Transition-Analysis.jsx';
import S4HanaFioriTransformation from './coustomer-pages/S4-Hana-Fiori-Transformation.jsx';

console.log('Main.jsx loaded');

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
window.lenis = lenis;
console.log('Lenis initialized:', lenis);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer-success" element={<CustomerSuccess />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/s4-access-architecture-design" element={<S4AccessArchitectureDesign />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sap-access-management-review" element={<SAPAccessReview />} />
          <Route path="/sod-stratergy-approach" element={<SAPSoDApproach />} />
          <Route path="/sap-access-management-automation" element={<SAPaccess />} />
          <Route path="/sap-s4-access-implementation" element={<SAPAuthorisationRedesign />} />
          <Route path="/sod-role-redesign" element={<SAPAuthorisationConceptDesign />} />
          <Route path="/reorganisation-ma-projects" element={<SAPAccessSecurityConsulting />} />
          <Route path="/outsourced-access-management" element={<SAPAccessManagementService />} />
          <Route path="/authorisation-concept-owner" element={<SAPAuthorisationConceptOwnerService />} />
          <Route path="/security-architect" element={<SAPGRCAccessControlServices />} />
          <Route path="/access-risk-sod-management" element={<SAPSoDManagement />} />
          <Route path="/ff-log-review-automation" element={<S4FFEmergencyUserAutomation />} />
          <Route path="/sap-license-optimisation" element={<SAPLicenseCompliance />} />
          <Route path="/s4accessprojects" element={<S4AccessProjects />} />
          <Route path="/blogs/:blogName" element={<BlogPage />} /> {/* Add BlogPage route */}
          <Route path="/sap-authorisation-concept-owner" element={<SAPAuthorizationConceptOwner />} />
          <Route path="/s4-access-management-review" element={<S4AccessManagementReview />} />
          <Route path="/s4-transition-analysis" element={<S4TransitionAnalysis />} />
          <Route path="/s4-hana-fiori-transformation" element={<S4HanaFioriTransformation />} />
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>
);

// Define a simple NotFound component

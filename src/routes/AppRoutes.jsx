import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LightLayout from "../layouts/LightLayout.jsx";
import DarkLayout from "../layouts/DarkLayout.jsx";

// Pages
import LandingPage from "../pages/LandingPage.jsx";
import IntelligencePage from "../pages/IntelligencePage.jsx";
import SignalPage from "../pages/SignalPage.jsx";
import PhilosophyPage from "../pages/PhilosophyPage.jsx";
import MediaPage from "../pages/MediaPage.jsx";
import StrategyPage from "../pages/StrategyPage.jsx";
import CompanyPage from "../pages/CompanyPage.jsx";
import ResearchPage from "../pages/ResearchPage.jsx";
import CareersPage from "../pages/CareersPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ResourcesPage from "../pages/ResourcesPage.jsx";
import TrustCenterPage from "../pages/TrustCenterPage.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.jsx";
import TermsPage from "../pages/TermsPage.jsx";
import StatusPage from "../pages/StatusPage.jsx";
import PressPage from "../pages/PressPage.jsx";
import PressArticle1Page from "../pages/PressArticle1Page.jsx";
import PressArticle2Page from "../pages/PressArticle2Page.jsx";
import PressArticle3Page from "../pages/PressArticle3Page.jsx";
import VisibilityIntelligencePage from "../pages/VisibilityIntelligencePage.jsx";
import SourceMappingPage from "../pages/SourceMappingPage.jsx";
import EntityMonitoringPage from "../pages/EntityMonitoringPage.jsx";
import CompetitiveAnalysisPage from "../pages/CompetitiveAnalysisPage.jsx";
import EnterpriseAIPage from "../pages/EnterpriseAIPage.jsx";
import BrandVisibilityPage from "../pages/BrandVisibilityPage.jsx";
import StrategicIntelligencePage from "../pages/StrategicIntelligencePage.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Light theme layouts */}
        <Route element={<LightLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/intelligence" element={<IntelligencePage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/trust" element={<TrustCenterPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/press-article-1" element={<PressArticle1Page />} />
          <Route path="/press-article-2" element={<PressArticle2Page />} />
          <Route path="/press-article-3" element={<PressArticle3Page />} />
          <Route path="/visibility_intelligence" element={<VisibilityIntelligencePage />} />
          <Route path="/source_mapping" element={<SourceMappingPage />} />
          <Route path="/entity_monitoring" element={<EntityMonitoringPage />} />
          <Route path="/competitive_analysis" element={<CompetitiveAnalysisPage />} />
          <Route path="/enterprise_ai" element={<EnterpriseAIPage />} />
          <Route path="/brand_visibility" element={<BrandVisibilityPage />} />
          <Route path="/strategic_intelligence" element={<StrategicIntelligencePage />} />
        </Route>

        {/* Dark theme layouts */}
        <Route element={<DarkLayout />}>
          <Route path="/signal" element={<SignalPage />} />
        </Route>

        {/* Fallback to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

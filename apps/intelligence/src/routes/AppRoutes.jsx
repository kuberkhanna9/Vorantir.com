import { Routes, Route } from "react-router-dom";
import LightLayout from "@shared/layouts/LightLayout.jsx";
import IntelligencePage from "../pages/IntelligencePage.jsx";
import VisibilityIntelligencePage from "../pages/VisibilityIntelligencePage.jsx";
import SourceMappingPage from "../pages/SourceMappingPage.jsx";
import EntityMonitoringPage from "../pages/EntityMonitoringPage.jsx";
import CompetitiveAnalysisPage from "../pages/CompetitiveAnalysisPage.jsx";
import EnterpriseAIPage from "../pages/EnterpriseAIPage.jsx";
import BrandVisibilityPage from "../pages/BrandVisibilityPage.jsx";
import StrategicIntelligencePage from "../pages/StrategicIntelligencePage.jsx";
import ResourcesPage from "../pages/ResourcesPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LightLayout />}>
        <Route path="/" element={<IntelligencePage />} />
        <Route path="/visibility_intelligence" element={<VisibilityIntelligencePage />} />
        <Route path="/source_mapping" element={<SourceMappingPage />} />
        <Route path="/entity_monitoring" element={<EntityMonitoringPage />} />
        <Route path="/competitive_analysis" element={<CompetitiveAnalysisPage />} />
        <Route path="/enterprise_ai" element={<EnterpriseAIPage />} />
        <Route path="/brand_visibility" element={<BrandVisibilityPage />} />
        <Route path="/strategic_intelligence" element={<StrategicIntelligencePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Route>
    </Routes>
  );
}

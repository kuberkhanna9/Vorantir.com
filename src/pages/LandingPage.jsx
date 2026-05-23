import { useNavigate } from "react-router-dom";
import VorantirLandingPage from "../../vorantir_enterprise_landing_page_react.jsx";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
  };

  return <VorantirLandingPage onNavigate={handleNavigate} />;
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VorantirLandingPage from "./vorantir_enterprise_landing_page_react.jsx";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Vorantir — Intelligence, Strategy & Digital Influence";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Vorantir is a privately held group operating across artificial intelligence, strategic implementation, and emerging research initiatives built for the next generation of enterprise systems.");
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", "Vorantir is a privately held group operating across artificial intelligence, strategic implementation, and emerging research initiatives built for the next generation of enterprise systems.");
    }
    
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute("content", "Vorantir is a privately held group operating across artificial intelligence, strategic implementation, and emerging research initiatives built for the next generation of enterprise systems.");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://vorantir.com/");
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://vorantir.com/");
    }
  }, []);
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


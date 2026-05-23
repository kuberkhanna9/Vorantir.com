import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function LightLayout() {
  const location = useLocation();
  
  // Under subdomain deployment, "/" will refer to either LandingPage or IntelligencePage
  const isIntelligencePage = 
    location.pathname === "/intelligence" || 
    location.pathname === "/";

  return (
    <div className={`overflow-x-hidden min-h-screen transition-colors duration-700 ${isIntelligencePage ? "bg-[#f7f3ec] text-[#11110f]" : "bg-[#f3efe8] text-[#11110f]"}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function DarkLayout() {
  return (
    <div className="overflow-x-hidden min-h-screen transition-colors duration-700 bg-[#0c0c0b] text-[#f7f3ec]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

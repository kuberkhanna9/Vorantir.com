import { Routes, Route } from "react-router-dom";
import DarkLayout from "@shared/layouts/DarkLayout.jsx";
import SignalPage from "../pages/SignalPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DarkLayout />}>
        <Route path="/" element={<SignalPage />} />
      </Route>
    </Routes>
  );
}

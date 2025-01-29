import { Routes, Route } from "react-router";
import Welcome from "@/pages/Welcome";
import Dashboard from "@/pages/Dashboard";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
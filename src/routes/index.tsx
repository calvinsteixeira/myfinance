import { Routes, Route } from "react-router";
import Welcome from "@/pages/Welcome";
import Dashboard from "@/pages/Dashboard";
import { DashboardProvider } from "@/pages/Dashboard/context";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/dashboard"
        element={
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
        }
      />
    </Routes>
  );
};

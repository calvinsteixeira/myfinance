import { Routes, Route } from "react-router";
import Welcome from "@/pages/Welcome";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
import Logo from "@/assets/Logo";
import SpendCard from "./components/SpendCard";
import { DashboardProvider } from "./context";

export default function PageComponent() {
  return (
    <div className="w-screen h-screen p-10">
      <div className="mb-6">
        <Logo size="md"/>
      </div>
      <div>
        <SpendCard/>
      </div>
    </div>
  );
}

export const Dashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <PageComponent />
    </DashboardProvider>
  );
};
import Logo from "@/assets/Logo";
import SpendCard from "./components/SpendCard";
import { DashboardProvider } from "./context";
import { Button } from "@/components/ui/button";

export default function PageComponent() {
  return (
    <div className="w-screen h-screen p-10">
      <div className="mb-6">
        <Logo size="md" />
      </div>
      <SpendCard />
      <div aria-labelledby="btn-transactions" className="mt-4">
        <Button id="btn-transactions" size={"sm"} aria-label="acessar histórico de transações">
          Acessar transações
        </Button>
      </div>
      <div className="mt-10">
        <h2>Últimas de transações</h2>
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

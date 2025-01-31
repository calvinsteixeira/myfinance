import Logo from "@/assets/Logo";
import SpendCard from "./components/SpendCard";
import { DashboardProvider } from "./context";
import { Button } from "@/components/ui/button";
import * as Icons from "@/components/icons/index";

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
      <div className="flex mt-10 items-center">
        <h2>Últimas transações</h2>
        <Button aria-label="adicionar nova transação" variant={"link"} size={"icon"}>
          <Icons.PlusCircle className="text-primary" />
        </Button>
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

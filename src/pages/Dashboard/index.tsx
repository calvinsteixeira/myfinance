import Logo from "@/assets/Logo";
import SpendCard from "./components/SpendCard";
import Transaction from "./components/Transaction";
import { DashboardProvider, useDashboard } from "./context";
import { Button } from "@/components/ui/button";
import * as Icons from "@/components/icons/index";
import { DashboardContextData } from "./types";

export default function PageComponent() {
  const { transactions } = useDashboard();

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
      <div className="flex flex-col space-y-4">
        <div className="flex mt-10 items-center">
          <h2>Últimas transações</h2>
          <Button aria-label="adicionar nova transação" variant={"link"} size={"icon"}>
            <Icons.PlusCircle className="text-primary" />
          </Button>
        </div>
        <div className="space-y-3">
          {transactions.map((transaction: DashboardContextData["transactions"][number]) => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              title={transaction.title}
              type={transaction.type}
              value={transaction.value}
            />
          ))}
        </div>
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

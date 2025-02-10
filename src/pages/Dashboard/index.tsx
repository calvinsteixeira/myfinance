import Logo from "@/assets/Logo";
import SpendCard from "./components/SpendCard";
import Transaction from "./components/Transaction";
import { TransactionsProvider, useTransactions } from "@/providers/TransactionsProvider";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import * as Icons from "@/components/icons/index";
import { TransactionsContextData } from "@/types";
import React from "react";

export default function PageComponent() {
  const { transactions, transactionsRequestLoading, transactionsRequestError } = useTransactions();

  const sanitizedTransactions = React.useMemo(() => {
    if (!transactions) return [];

    if (transactions) {
      const data = transactions
        .slice()
        .sort((a, b) => {
          const dateA = new Date(a.date.split("/").reverse().join("-")).getTime();
          const dateB = new Date(b.date.split("/").reverse().join("-")).getTime();

          return dateB - dateA;
        })
        .slice(0, 5);

      return data;
    }
  }, [transactions]);

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
        <div className="space-y-3 pb-10">
          {transactionsRequestLoading && (
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          )}
          {transactionsRequestError && (
            <div className="h-72 flex flex-col items-center justify-center gap-2 text-foreground/40">
              <Icons.CloudAlert />
              <p className="text-sm text-center">
                Falha ao carregar os dados, tente novamente mais tarde
              </p>
            </div>
          )}
          {sanitizedTransactions && sanitizedTransactions.length > 0 ? (
            sanitizedTransactions.map(
              (transaction: TransactionsContextData["transactions"][number]) => (
                <Transaction
                  key={transaction.id}
                  id={transaction.id}
                  title={transaction.title}
                  type={transaction.type}
                  date={transaction.date}
                  value={transaction.value}
                />
              )
            )
          ) : (
            <div className="h-72 flex flex-col items-center justify-center gap-2 text-foreground/40">
              <Icons.CloudAlert />
              <p className="text-sm text-center">
                Você não possui nenhuma transação registrada, adicione transações para começar a ver
                elas aqui
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const Dashboard: React.FC = () => {
  return (
    <TransactionsProvider>
      <PageComponent />
    </TransactionsProvider>
  );
};

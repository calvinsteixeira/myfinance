import React from "react";
import { TransactionsContextData } from "@/types";

type Props = {
  children: React.ReactNode;
};

const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

const TransactionsProvider: React.FC<Props> = ({ children }) => {
  const [spendCard, setSpendCard] = React.useState<TransactionsContextData["spendCard"]>({
    total: 1458.22,
    goal: 1200.0,
  });
  const [transactions, setTransactions] = React.useState<TransactionsContextData["transactions"]>([
    {
      id: "1",
      title: "Churrasco em casa",
      type: 1,
      date: "01/02/2025",
      value: 78.82,
    },
    {
      id: "2",
      title: "Venda do monitor",
      type: 2,
      date: "27/01/2025",
      value: 750.0,
    },
    {
      id: "3",
      title: "Compras mercado",
      type: 1,
      date: "21/01/2025",
      value: 112.44,
    },
    {
      id: "4",
      title: "Compras mercado",
      type: 1,
      date: "15/01/2025",
      value: 77.44,
    },
    {
      id: "5",
      title: "Gastos shopping",
      type: 1,
      date: "18/01/2025",
      value: 133.12,
    },
    {
      id: "6",
      title: "Gastos shopping",
      type: 1,
      date: "12/01/2025",
      value: 240.22,
    },
    {
      id: "7",
      title: "Venda ps5",
      type: 2,
      date: "18/01/2025",
      value: 2800.0,
    },
  ]);

  return (
    <TransactionsContext.Provider
      value={{
        spendCard,
        setSpendCard,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

function useTransactions(): TransactionsContextData {
  const context = React.useContext(TransactionsContext);

  if (!context) {
    throw new Error("useDashboard must be used within an DashboardProvider");
  }

  return context;
}

export { TransactionsProvider, useTransactions };

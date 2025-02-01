import React from "react";
import { DashboardContextData } from "../types";

type Props = {
  children: React.ReactNode;
};

const DashboardContext = React.createContext<DashboardContextData>({} as DashboardContextData);

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [spendCard, setSpendCard] = React.useState<DashboardContextData["spendCard"]>({
    total: 1458.22,
    goal: 1200.0,
  });
  const [transactions, setTransactions] = React.useState<DashboardContextData["transactions"]>([
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
  ]);

  return (
    <DashboardContext.Provider
      value={{
        spendCard,
        setSpendCard,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

function useDashboard(): DashboardContextData {
  const context = React.useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboard must be used within an DashboardProvider");
  }

  return context;
}

export { DashboardProvider, useDashboard };

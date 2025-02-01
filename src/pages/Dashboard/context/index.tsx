import React from "react";
import { DashboardContextData } from "../types";

type Props = {
  children: React.ReactNode;
};

const DashboardContext = React.createContext<DashboardContextData>({} as DashboardContextData);

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [spendCard, setSpendCard] = React.useState<DashboardContextData["spendCard"]>({
    total: 758.22,
    goal: 1000.0,
  });
  const [transactions, setTransactions] = React.useState<DashboardContextData["transactions"]>([
    {
      id: "1",
      title: "Churrasco em casa",
      type: 1,
      value: 78.82,
    },
    {
      id: "2",
      title: "Venda do monitor",
      type: 2,
      value: 750.0,
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

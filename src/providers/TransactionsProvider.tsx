import React from "react";
import { TransactionsContextData } from "@/types";
import { getAllTransactions } from "@/services/transactions";
import { useQuery } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

const TransactionsProvider: React.FC<Props> = ({ children }) => {
  const {
    data: transactions,
    isLoading: transactionsRequestLoading,
    isError: transactionsRequestError,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });
  const spendCard = {} as TransactionsContextData["spendCard"];

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        transactionsRequestLoading,
        transactionsRequestError,
        spendCard,
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

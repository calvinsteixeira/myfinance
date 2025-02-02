import { Routes, Route } from "react-router";
import Welcome from "@/pages/Welcome";
import Dashboard from "@/pages/Dashboard";
import Transactions from "@/pages/Transactions";
import { TransactionsProvider } from "@/context/TransactionsProvider";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/dashboard"
        element={
          <TransactionsProvider>
            <Dashboard />
          </TransactionsProvider>
        }
      />
      <Route
        path="/transactions"
        element={
          <TransactionsProvider>
            <Transactions />
          </TransactionsProvider>
        }
      />
    </Routes>
  );
};

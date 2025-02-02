import React from "react";
import { useTransactions } from "@/context/TransactionsProvider";

export default function SpendCard() {
  const { spendCard } = useTransactions();

  const calculateGoalStatusMessage = (
    totalSpend: number,
    goal: number
  ): {
    message: string;
    messageColor: string;
    goalStatus: "positive" | "negative";
  } => {
    switch (true) {
      case totalSpend > goal:
        return {
          message: `R$ ${(totalSpend - goal).toFixed(2)} acima da meta`,
          messageColor: "text-destructive",
          goalStatus: "negative",
        };
        break;
      default:
        return {
          message: "",
          messageColor: "text-primary",
          goalStatus: "positive",
        };
        break;
    }
  };

  const memoizedGoalStatusMessage = React.useMemo(() => {
    return calculateGoalStatusMessage(spendCard.total, spendCard.goal);
  }, [spendCard.goal, spendCard.total]);

  return (
    <div
      aria-labelledby={"spend-card-title"}
      className={"bg-zinc-900 px-4 py-6 w-full rounded-md flex-wrap"}
    >
      <strong id={"spend-card-title"}>GASTOS DO MÊS</strong>
      <div className={"mt-2"}>
        <p
          aria-label={"total gasto"}
          className={`text-3xl font-bold ${memoizedGoalStatusMessage.messageColor}`}
        >
          R$ {spendCard.total}
        </p>
        <p aria-label={"meta mensal"} className={"text-sm font-medium"}>
          META: R$ {spendCard.goal}
        </p>
        <p
          aria-label={"status da meta mensal"}
          className={`text-sm ${memoizedGoalStatusMessage.messageColor}`}
        >
          {memoizedGoalStatusMessage.message}
        </p>
      </div>
    </div>
  );
}

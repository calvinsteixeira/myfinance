import React from "react";
import { useDashboard } from "../context";

type SpendStatus = {
  message: string;
  goalStatus: "positive" | "negative";
};

export default function SpendCard() {
  const { spendCard } = useDashboard();
  const [spendStatus, setSpendStatus] = React.useState<SpendStatus>({} as SpendStatus);

  const calculateGoalStatusMessage = (
    totalSpend: number,
    goal: number
  ): {
    message: string;
    goalStatus: "positive" | "negative";
  } => {
    switch (true) {
      case totalSpend > goal:
        return {
          message: `R$ ${totalSpend - goal} fora da meta`,
          goalStatus: "negative",
        };
        break;
      default:
        return {
          message: "",
          goalStatus: "positive",
        };
        break;
    }
  };

  React.useEffect(() => {
    const value = calculateGoalStatusMessage(spendCard.total, spendCard.goal);

    setSpendStatus({
      message: value.message,
      goalStatus: value.goalStatus,
    });
  }, [spendCard]);

  const statusMessageColor =
    spendStatus.goalStatus == "positive" ? "text-primary" : "text-destructive";

  return (
    <div aria-labelledby={"spend-card-title"} className={"bg-zinc-900 px-4 py-6 w-full rounded-md"}>
      <strong id={"spend-card-title"}>GASTOS DO MÊS</strong>
      <div className={"mt-2"}>
        <p aria-label={"total-spend"} className={`text-3xl font-bold ${statusMessageColor}`}>
          R$ {spendCard.total}
        </p>
        <p aria-label={"month-goal"} className={"text-sm font-medium"}>
          META: R$ {spendCard.goal}
        </p>
        <p aria-label={"month-goal-status"} className={`text-sm ${statusMessageColor}`}>
          {spendStatus.message}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import * as Icons from "@/components/icons/index";
import { DashboardContextData } from "../types";

export default function Transaction(props: DashboardContextData["transactions"][number]) {
  const memoizedTypeSettingsTransaction = React.useMemo(() => {
    const sanitizeData = () => {
      const transactionType = props.type == 1 ? "positive" : "negative";

      switch (true) {
        case transactionType == "positive":
          return {
            itemsColor: "text-destructive",
            iconType: <Icons.ArrowBigDown strokeWidth={1.4} className="text-destructive" />,
          };
        default:
          return {
            itemsColor: "text-primary",
            iconType: <Icons.ArrowBigUp strokeWidth={1.4} className="text-primary" />,
          };
      }
    };

    return sanitizeData();
  }, [props]);

  return (
    <div className="bg-secondary py-2 px-4 flex items-center justify-between space-x-4 flex-wrap rounded-md">
      <Icons.Ham
        size={22}
        className={`${memoizedTypeSettingsTransaction.itemsColor}`}
        strokeWidth={1.4}
      />
      <div>
        <p className={`${memoizedTypeSettingsTransaction.itemsColor} text-xs font-bold`}>
          {props.title}
        </p>
        <p className={`${memoizedTypeSettingsTransaction.itemsColor} text-xs`}>R$ {props.value}</p>
      </div>
      {memoizedTypeSettingsTransaction.iconType}
    </div>
  );
}

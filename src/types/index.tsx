interface TransactionsContextData {
  spendCard: {
    total: number;
    goal: number;
  };
  setSpendCard: React.Dispatch<React.SetStateAction<TransactionsContextData["spendCard"]>>;
  transactions: {
    id: string;
    title: string;
    type: number;
    date: string;
    value: number;
  }[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionsContextData["transactions"]>>;
}

export type { TransactionsContextData };

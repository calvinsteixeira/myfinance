interface TransactionsContextData {
  spendCard: {
    total: number;
    goal: number;
  };
  transactions: {
    id: string;
    title: string;
    type: number;
    date: string;
    value: number;
  }[];
  transactionsRequestLoading: boolean;
  transactionsRequestError: boolean;
}

export type { TransactionsContextData };

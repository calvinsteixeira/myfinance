interface DashboardContextData {
    spendCard: {
        total: number;
        goal: number;
    }
    setSpendCard: React.Dispatch<React.SetStateAction<DashboardContextData["spendCard"]>>;
    transactions: {
        id: string;
        title: string;
        type: number;
        value: number;
    }[];
    setTransactions: React.Dispatch<React.SetStateAction<DashboardContextData["transactions"]>>;
}

export type { DashboardContextData };
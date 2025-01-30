interface DashboardContextData {
    spendCard: {
        total: number;
        goal: number;
    }
    setSpendCard: React.Dispatch<React.SetStateAction<DashboardContextData["spendCard"]>>;
}

export type { DashboardContextData };
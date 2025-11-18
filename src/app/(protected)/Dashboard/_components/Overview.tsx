import { useEffect, useState } from "react";
import Card from "./Card";
import RecentTransactions from "./RecentTransactions";
import SummaryCard from "./SummaryCard";
import { useSelector } from "react-redux";
import { BudgetState, ExpenseState } from "@/components/common/interfaces";

interface CardProps {
  amount: number;
  title: string;
}

const Overview = () => {
  const [cardData, setCardData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const budgets: BudgetState[] = useSelector((state: any) => state.budget);
  const expenses: ExpenseState[] = useSelector((state: any) => state.expense);

  useEffect(() => {
    const totalBudget = budgets.reduce((acc: number, item: BudgetState) => {
      return acc + item.limit;
    }, 0);

    const totalExpense = expenses.reduce((acc: number, item: ExpenseState) => {
      return acc + item.amount;
    }, 0);
    setCardData([
      {
        amount: totalBudget,
        title: "Total Budget",
      },
      {
        amount: totalExpense,
        title: "Total Expenses",
      },
      {
        amount: totalBudget - totalExpense,
        title: "Remaining Amount",
      },
    ]);
    setLoading(false);
  }, [budgets, expenses]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              amount={item.amount}
              loading={loading}
            />
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-between">
        <SummaryCard budgets={budgets} expenses={expenses} />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Overview;

import React from "react";
import BudgetBar from "./BudgetBar";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  BudgetState,
  ExpenseState,
  SummaryCardProps,
} from "@/components/common/interfaces";

const SummaryCard = (props: SummaryCardProps) => {
  const { budgets, expenses } = props;
  const [open, setOpen] = React.useState<boolean>(true);

  const budgetBars = () => {
    if (!!budgets.length)
      return budgets.map((item: BudgetState, index) => {
        const expenseValue = expenses
          .filter((expense: ExpenseState) => expense.category === item.category)
          .reduce(
            (acc: number, expenseItem: ExpenseState) =>
              acc + expenseItem.amount,
            0
          );
        return <BudgetBar key={index} value={expenseValue} max={item.limit} />;
      });
    return (
      <div>
        <h1 className="text-white text-[25px] font-bold">No budgets added</h1>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col mb-10 p-10 lg:w-49/100 bg-[#1C1E24] rounded-4xl max-h-155 ${
        !open && "lg:h-30 overflow-hidden"
      } overflow-auto`}
    >
      <div className="flex flex-row w-full justify-between items-start">
        <h1
          className={`text-[20px] sm:text-[25px] md:text-[30px] font-bold text-white ${
            open ? "mb-10" : "mb-0"
          }`}
        >
          Budget Summary
        </h1>
        <button
          onClick={() => setOpen(!open)}
          aria-label={!open ? "Open Summary" : "Close Summary"}
        >
          {!open ? (
            <ChevronDown className="text-white w-10 h-10" />
          ) : (
            <ChevronUp className="text-white w-10 h-10" />
          )}
        </button>
      </div>
      {open ? <>{budgetBars()} </> : null}
    </div>
  );
};

export default SummaryCard;

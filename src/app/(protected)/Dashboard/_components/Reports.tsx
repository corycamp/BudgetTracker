import React from "react";
import { ExpenseState, SpentItemProps } from "@/components/common/interfaces";
import SpendCategory from "./reportComponents/SpendCategory";
import SpendBreakdown from "./reportComponents/SpendBreakdown";
import SpentItems from "./reportComponents/SpentItems";
import TrendsTable from "./reportComponents/TrendsTable";
import { useSelector } from "react-redux";

const Reports = () => {
  const expenses: ExpenseState[] = useSelector((state: any) => state.expense);
  const alreadyFound: string[] = [];
  const data: {
    name: string;
    value: number;
  }[] = expenses
    .map((expense: ExpenseState) => {
      if (!alreadyFound.includes(expense.category)) {
        alreadyFound.push(expense.category);
        const total = expenses
          .filter(
            (innerExpense: ExpenseState) =>
              innerExpense.category === expense.category
          )
          .reduce((acc: number, item: ExpenseState) => acc + item.amount, 0);
        return {
          name: expense.category,
          value: total,
        };
      }
    })
    .filter((item) => !!item);

  const spentItemData: SpentItemProps[] = expenses
    .map(
      (expense: ExpenseState) =>
        ({
          amount: expense.amount,
          category: expense.category,
          merchant: expense.merchant,
        }) as SpentItemProps
    )
    .sort((item1, item2) => item2.amount - item1.amount)
    .slice(0, 5);
  return (
    <div className="pb-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending by Category */}
        <SpendCategory categoryData={data} />

        {/* Spending Breakdown */}
        <SpendBreakdown data={data} />

        {/* Spending Trends */}
        <TrendsTable />

        {/* Top Spending */}
        <SpentItems data={spentItemData} />
      </div>
    </div>
  );
};

export default Reports;

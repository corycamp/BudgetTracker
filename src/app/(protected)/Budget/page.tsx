"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import PageProvier from "@/components/ui/PageProvider";
import { BudgetText } from "@/components/common/constants";
import BudgetTable from "./_components/BudgetTable";
import BudgetModal from "./_components/BudgetModal";
import {
  budgetOption,
  BudgetTableItemProps,
} from "@/components/common/interfaces";
import { useSelector } from "react-redux";
import { Budget as BudgetProps, Expense } from "@/lib/types";

const Budget = () => {
  const budgets = useSelector((state: any) => state.budget);
  const expenses = useSelector((state: any) => state.expense);
  const user = useSelector((state: any) => state.user);
  const budgetData: BudgetTableItemProps[] = budgets.map(
    (item: BudgetProps) => {
      let spent = 0;
      expenses
        .filter(
          (expenseItem: Expense) => expenseItem.category === item.category
        )
        .forEach((expenseItem: Expense) => (spent += expenseItem.amount));
      return {
        category: item.category,
        limit: item.limit,
        spent: spent,
      };
    }
  );
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<budgetOption>("createBudget");
  const [selectedBudget, setSelectedBudget] = useState<
    BudgetTableItemProps | undefined
  >();
  const customButton = () => (
    <button
      className="bg-green-500 text-black font-semibold p-4 py-2 rounded-full flex items-center lg:gap-2 hover:bg-green-400 transition hover:cursor-pointer"
      onClick={() => {
        setType("createBudget");
        setOpen(!open);
      }}
    >
      <Plus className="w-4 h-4" /> New Budget
    </button>
  );

  return (
    <PageProvier
      pageName={BudgetText.heading}
      pageSubHeading={BudgetText.subHeading}
      customButton={customButton}
    >
      <BudgetModal
        isOpen={open}
        onClose={() => setOpen(!open)}
        type={type}
        item={selectedBudget?.category}
        email={`${user.email}`}
      />
      {/* <div className="h-screen bg-[#0D0F14] text-white font-sans p-8"> */}
      <div className="pb-10 md:pb-0">
        {/* Current Budgets */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Current Budgets
          </h2>
          <BudgetTable
            budgets={budgetData}
            updateFn={(item: BudgetTableItemProps, type: budgetOption) => {
              setOpen(!open);
              setType(type);
              setSelectedBudget(item);
            }}
          />
        </section>

        {/* Budget Alerts */}
        {/* Future update */}
        {/* <section className="mt-10">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Budget Alerts
          </h2>
          <div className="bg-[#1C1E24] rounded-2xl p-6 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-white mb-1">
                Enable Budget Alerts
              </h3>
              <p className="text-gray-400 text-sm">
                Receive notifications when you're close to exceeding your budget
                limits.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-green-500 transition"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </section> */}
      </div>
    </PageProvier>
  );
};

export default Budget;

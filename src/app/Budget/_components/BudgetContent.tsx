"use client";

import React from "react";
import { Plus } from "lucide-react";
import PageProvier from "@/components/ui/PageProvider";
import { BudgetText } from "@/components/common/constants";
import BudgetTable from "./BudgetTable";
import { User } from "@/components/common/interfaces";

const budgets = [
  { category: "Groceries", limit: 500, spent: 350 },
  { category: "Entertainment", limit: 200, spent: 180 },
  { category: "Transportation", limit: 300, spent: 100 },
];

export default function BudgetsPage(user: User) {
  console.log(user);
  const customButton = () => (
    <button className="bg-green-500 text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-400 transition">
      <Plus className="w-4 h-4" /> New Budget
    </button>
  );
  return (
    <PageProvier
      pageName={BudgetText.heading}
      pageSubHeading={BudgetText.subHeading}
      customButton={customButton}
    >
      {/* <div className="h-screen bg-[#0D0F14] text-white font-sans p-8"> */}
      <div>
        {/* Current Budgets */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Current Budgets
          </h2>
          <BudgetTable budgets={budgets} />
        </section>

        {/* Budget Alerts */}
        <section className="mt-10">
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
        </section>
      </div>
    </PageProvier>
  );
}

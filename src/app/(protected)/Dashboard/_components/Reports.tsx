import React from "react";
import { SpentItemProps } from "@/components/common/interfaces";
import SpendCategory from "./reportComponents/SpendCategory";
import SpendBreakdown from "./reportComponents/SpendBreakdown";
import SpentItems from "./reportComponents/SpentItems";
import TrendsTable from "./reportComponents/TrendsTable";

const Reports = () => {
  return (
    <div className="pb-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending by Category */}
        <SpendCategory />

        {/* Spending Breakdown */}
        <SpendBreakdown />

        {/* Spending Trends */}
        <TrendsTable />

        {/* Top Spending */}
        <SpentItems
          data={
            [
              {
                merchant: "Amazon",
                category: "Shopping",
                amount: "392",
              },
            ].slice(0, 4) as SpentItemProps[]
          }
        />
      </div>
    </div>
  );
};

export default Reports;

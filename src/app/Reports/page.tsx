"use client";

import React from "react";
import PageProvier from "@/components/ui/PageProvider";
import { ReportText } from "@/components/common/constants";
import SpentItems from "./_components/SpentItems";
import { SpentItemProps } from "@/components/common/interfaces";
import TrendsTable from "./_components/TrendsTable";
import SpendBreakdown from "./_components/SpendBreakdown";
import SpendCategory from "./_components/SpendCategory";

const Reports = () => {
  return (
    <PageProvier
      pageName={ReportText.heading}
      pageSubHeading={ReportText.subHeading}
    >
      <div className="pb-10">
        {/* Header */}
        <div>
          <div className="flex gap-8 border-b border-gray-700 mb-8">
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white">
              Overview
            </button>
            <button className="pb-2 border-b-2 border-green-500 text-green-500">
              Spending
            </button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white">
              Income
            </button>
          </div>
        </div>

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
    </PageProvier>
  );
};

export default Reports;

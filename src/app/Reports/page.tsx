"use client"

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ShoppingBag, Utensils, Bus } from "lucide-react";
import PageProvier from "@/components/ui/PageProvider";
import { ReportText } from "@/components/common/constants";

const Reports = ()=> {

    const categoryData = [
    { name: "Food", value: 300 },
    { name: "Transport", value: 250 },
    { name: "Housing", value: 400 },
    { name: "Entertainment", value: 200 },
    { name: "Utilities", value: 350 },
    { name: "Shopping", value: 450 },
    { name: "Other", value: 150 },
    ];

    const spendingTrendData = [
    { month: "Jan", amount: 200 },
    { month: "Feb", amount: 250 },
    { month: "Mar", amount: 220 },
    { month: "Apr", amount: 150 },
    { month: "May", amount: 300 },
    { month: "Jun", amount: 400 },
    ];

    const breakdownData = [
    { name: "Needs", value: 60 },
    { name: "Wants", value: 30 },
    { name: "Savings", value: 10 },
    ];
    const COLORS = ["#4ade80", "#22c55e", "#14532d"];
  return (
    <PageProvier pageName={ReportText.heading} pageSubHeading={ReportText.subHeading}>
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
        <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Spending by Category</h2>
            <span className="text-sm text-gray-400 bg-[#2A2D35] px-3 py-1 rounded-full">
              This Month
            </span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1C1E24", border: "none" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="value" fill="#4ade80" radius={[20, 20, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Spending Breakdown */}
        <div className="bg-[#1C1E24] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-white">Spending Breakdown</h2>
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={breakdownData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                >
                  {breakdownData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center -mt-30 mb-10">
              <p className="text-2xl font-bold text-white">$1,250</p>
              <p className="text-gray-400 text-sm">Total Spent</p>
            </div>
            <ul className="mt-6 text-sm space-y-2">
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-[#4ade80] rounded-full"></span> Needs
                <span className="ml-auto text-gray-400">60%</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-[#22c55e] rounded-full"></span> Wants
                <span className="ml-auto text-gray-400">30%</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-3 h-3 bg-[#14532d] rounded-full"></span>{" "}
                Savings
                <span className="ml-auto text-gray-400">10%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Spending Trends */}
        <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Spending Trends</h2>
            <span className="text-sm text-gray-400 bg-[#2A2D35] px-3 py-1 rounded-full">
              Last 6 Months
            </span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={spendingTrendData}>
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1C1E24", border: "none" }}
                labelStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#4ade80"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Spending */}
        <div className="bg-[#1C1E24] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Top Spending</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-green-400 w-5 h-5" />
                <div>
                  <p className="font-medium">Amazon</p>
                  <p className="text-gray-400 text-sm">Shopping</p>
                </div>
              </div>
              <span className="font-medium">$450.78</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Utensils className="text-green-400 w-5 h-5" />
                <div>
                  <p className="font-medium">The Cheesecake Factory</p>
                  <p className="text-gray-400 text-sm">Food</p>
                </div>
              </div>
              <span className="font-medium">$124.30</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bus className="text-green-400 w-5 h-5" />
                <div>
                  <p className="font-medium">Metro Transit</p>
                  <p className="text-gray-400 text-sm">Transportation</p>
                </div>
              </div>
              <span className="font-medium">$55.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </PageProvier>
  );
}

export default Reports;
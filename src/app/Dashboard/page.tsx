"use client";

import { DashboardText } from "../common/constants";
import Card from "../components/Card";
import PageProvier from "../components/PageProvider";
import avatar from "../assets/avatar.svg";
import SummaryCard from "../components/SummaryCard";
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  const test = [
    {
      amount: 5000,
      category: "Total Income",
    },
    {
      amount: 3500,
      category: "Total Expenses",
    },
    {
      amount: 1500,
      category: "Net Savings",
    },
  ];

  return (
    <PageProvier
      pageName={DashboardText.heading}
      pageSubHeading={DashboardText.subHeading}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {test.map((item, index) => {
          return (
            <Card
              key={index}
              imageSrc={avatar}
              title={item.category}
              amount={item.amount}
            />
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-between">
        <SummaryCard />
        <RecentTransactions />
      </div>
    </PageProvier>
  );
};

export default Dashboard;

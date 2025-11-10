"use client";

import { DashboardText } from "../../components/common/constants";
import Card from "./_components/Card";
import PageProvier from "../../components/ui/PageProvider";
import avatar from "../../components/ui/assets/avatar.svg";
import SummaryCard from "./_components/SummaryCard";
import RecentTransactions from "./_components/RecentTransactions";

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
      <div className="flex flex-col lg:flex-row mt-10 justify-between">
        <SummaryCard />
        <RecentTransactions />
      </div>
    </PageProvier>
  );
};

export default Dashboard;

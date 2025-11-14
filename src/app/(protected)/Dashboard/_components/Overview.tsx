import { useEffect, useState } from "react";
import Card from "./Card";
import RecentTransactions from "./RecentTransactions";
import SummaryCard from "./SummaryCard";

interface CardProps {
  amount: number;
  title: string;
}

const Overview = () => {
  const [cardData, setCardData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setCardData([
      {
        amount: 5000,
        title: "Total Budget",
      },
      {
        amount: 3500,
        title: "Total Expenses",
      },
      {
        amount: 1500,
        title: "Remaining Amount",
      },
    ]);
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        {cardData.map((item, index) => {
          return <Card key={index} title={item.title} amount={item.amount} />;
        })}
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-between">
        <SummaryCard />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Overview;

import Card from "./Card";
import RecentTransactions from "./RecentTransactions";
import SummaryCard from "./SummaryCard";

const Overview = ()=>{

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

    return(
        <div>
            <div className="flex flex-col md:flex-row justify-between">
            {test.map((item, index) => {
                return (
                <Card
                    key={index}
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
      </div>
    )

}

export default Overview;
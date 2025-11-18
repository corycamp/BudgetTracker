import { getPastExpenses } from "@/app/api/graphql/resolvers";
import { MONTHS } from "@/components/common/constants";
import { SpendingTrendItem } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from "recharts";

const TrendsTable = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [spendingTrendData, setSpendingTrendData] = useState<
    SpendingTrendItem[]
  >([]);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (user.email) {
      handleGetExpenses(user.email);
    }
  }, [user]);

  const handleGetExpenses = async (email: string) => {
    const data: SpendingTrendItem[] = await getPastExpenses(email);
    if (!!data?.length) {
      const sortedData = data.sort((item1, item2) => {
        const item1MonthIndex = MONTHS.indexOf(item1.month);
        const item2MonthIndex = MONTHS.indexOf(item2.month);
        return item1MonthIndex - item2MonthIndex;
      });
      setSpendingTrendData(sortedData);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6 max-h-100">
      {loading ? (
        <div className="flex flex-row justify-center items-center h-full">
          <BeatLoader
            className="gap-2"
            color="white"
            loading={loading}
            size={35}
          />
        </div>
      ) : !!spendingTrendData?.length ? (
        <div>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg font-semibold text-white">
              Spending Trends
            </h2>
            <span className="min-w-28 w-auto text-sm text-gray-400 bg-[#2A2D35] px-3 py-1 rounded-full">
              Last 6 Months
            </span>
          </div>
          <ResponsiveContainer
            width="100%"
            height={250}
            className="focus:outline-none focus:ring- outline-none"
          >
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
      ) : (
        <div className="flex flex-row justify-center items-center h-full">
          <h1 className="text-white text-[30px]">No trend data found</h1>
        </div>
      )}
    </div>
  );
};

export default TrendsTable;

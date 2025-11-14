import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from "recharts";

const TrendsTable = () => {
  const spendingTrendData = [
    { month: "Jan", amount: 200 },
    { month: "Feb", amount: 250 },
    { month: "Mar", amount: 220 },
    { month: "Apr", amount: 150 },
    { month: "May", amount: 300 },
    { month: "Jun", amount: 400 },
  ];

  return (
    <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Spending Trends</h2>
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
  );
};

export default TrendsTable;

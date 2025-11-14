import { COLORS } from "@/components/common/constants";
import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";

const SpendBreakdown = () => {
  const breakdownData = [
    { name: "Food", value: 8 },
    { name: "Transport", value: 10 },
    { name: "Housing", value: 20 },
    { name: "Entertainment", value: 10 },
    { name: "Utilities", value: 15 },
    { name: "Shopping", value: 25 },
    { name: "Other", value: 5 },
  ];

  return (
    <div className="bg-[#1C1E24] rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-white">
        Spending Breakdown
      </h2>
      <div className="flex flex-col items-center pointer-events-none">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={breakdownData}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
            >
              {breakdownData.map((_entry, index) => (
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
          {breakdownData.map((item) => {
            return (
              <li
                key={item.name}
                className="flex items-center gap-2 text-white"
              >
                <span className="w-3 h-3 bg-[#4ade80] rounded-full"></span>{" "}
                {item.name}
                <span className="ml-auto text-gray-400">{`${item.value}%`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SpendBreakdown;

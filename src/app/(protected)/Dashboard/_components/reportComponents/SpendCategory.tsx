import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";

const SpendCategory = () => {
  const categoryData = [
    { name: "Food", value: 300 },
    { name: "Transport", value: 250 },
    { name: "Housing", value: 400 },
    { name: "Entertainment", value: 200 },
    { name: "Utilities", value: 350 },
    { name: "Shopping", value: 450 },
    { name: "Other", value: 150 },
  ];
  return (
    <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">
          Spending by Category
        </h2>
        <span className="min-w-24 w-auto text-sm text-gray-400 bg-[#2A2D35] px-3 py-1 rounded-full">
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
  );
};

export default SpendCategory;

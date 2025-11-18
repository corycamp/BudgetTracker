import { getColorMap } from "@/components/common/constants";
import { expenseCategory } from "@/components/common/interfaces";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Tooltip,
  Bar,
  Cell,
} from "recharts";

const SpendCategory = (props: {
  categoryData: {
    name: string;
    value: number;
  }[];
}) => {
  const { categoryData } = props;
  return (
    <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
      {!!categoryData.length ? (
        <div className="lg:col-span-2 bg-[#1C1E24] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-15">
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
              <Bar dataKey="value" fill="#4ade80" radius={[20, 20, 0, 0]}>
                {categoryData?.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={getColorMap(entry.name as expenseCategory)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center h-full">
          <h1 className="text-white text-[30px]">No spending data found</h1>
        </div>
      )}
    </div>
  );
};

export default SpendCategory;

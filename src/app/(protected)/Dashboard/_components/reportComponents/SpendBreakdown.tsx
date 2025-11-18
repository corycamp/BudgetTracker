import { getColorMap } from "@/components/common/constants";
import { expenseCategory } from "@/components/common/interfaces";
import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";

const SpendBreakdown = (props: {
  data: {
    name: string;
    value: number;
  }[];
}) => {
  const { data } = props;
  const total = data.reduce(
    (
      acc: number,
      item: {
        name: string;
        value: number;
      }
    ) => acc + item.value,
    0
  );
  const breakDownData = data?.map((item) => {
    return {
      name: item.name,
      value: (item.value / total) * 100,
    };
  });
  return (
    <div className="bg-[#1C1E24] rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-white">
        Spending Breakdown
      </h2>
      <div className="flex flex-col items-center pointer-events-none">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={breakDownData}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
            >
              {breakDownData?.map((entry, index) => (
                <Cell
                  key={index}
                  fill={getColorMap(entry.name as expenseCategory)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center -mt-30 mb-10">
          <p className="text-2xl font-bold text-white">{`$${total}`}</p>
          <p className="text-gray-400 text-sm">Total Spent</p>
        </div>
        <ul className="mt-6 text-sm space-y-2">
          {breakDownData?.map((item) => {
            return (
              <li
                key={item.name}
                className="flex items-center gap-2 text-white"
              >
                <span
                  className={`w-3 h-3 rounded-full bg-[${getColorMap(
                    item.name as expenseCategory
                  )}]`}
                ></span>{" "}
                {item.name}
                <span className="ml-auto text-gray-400">{`${item.value.toFixed(
                  2
                )}%`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SpendBreakdown;

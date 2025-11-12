import { iconMapping } from "@/components/common/constants";
import {
  SpentItemProps,
  SpentItemsProps,
} from "@/components/common/interfaces";
import { LucideIcon } from "lucide-react";

const SpentItems = (props: SpentItemsProps) => {
  const { data } = props;
  const Icon: LucideIcon = iconMapping(data[0].category);
  return (
    <div className="bg-[#1C1E24] rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-white">Top Spending</h2>
      <ul className="space-y-4">
        {data.map((item: SpentItemProps, index) => {
          return (
            <li className="flex items-center justify-between" key={index}>
              <div className="flex items-center gap-3">
                <Icon className="text-green-400 w-5 h-5" />
                <div>
                  <p className="font-medium text-white">{item.merchant}</p>
                  <p className="text-gray-400 text-sm">{item.category}</p>
                </div>
              </div>
              <span className="font-medium text-white">{`$${item.amount}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpentItems;

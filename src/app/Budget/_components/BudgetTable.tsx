import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const BudgetTable = (props:any)=>{
        const {budgets} = props
    return(
        <div className="bg-[#1C1E24] rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#23262D] text-gray-400 uppercase text-sm">
              <tr>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Limit</th>
                <th className="py-3 px-6">Spent</th>
                <th className="py-3 px-6">Remaining</th>
                <th className="py-3 px-6">Progress</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((b: { spent: number; limit: number; category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => {
                const percent = Math.round((b.spent / b.limit) * 100);
                const remaining = b.limit - b.spent;
                const barColor =
                  percent >= 80 ? "bg-orange-500" : "bg-green-500";

                return (
                  <tr
                    key={idx}
                    className="border-t border-gray-700 hover:bg-[#2A2D35] transition"
                  >
                    <td className="py-4 px-6 font-medium text-white">{b.category}</td>
                    <td className="py-4 px-6 text-white">${b.limit.toFixed(2)}</td>
                    <td className="py-4 px-6 text-white">${b.spent.toFixed(2)}</td>
                    <td className="py-4 px-6 text-white">${remaining.toFixed(2)}</td>
                    <td className="py-4 px-6 w-1/4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 flex-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`${barColor} h-full`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-300 text-sm">
                          {percent}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-400 cursor-pointer">
                      ⋮
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    )
}

export default BudgetTable;
import {
  ExpenseTableItem,
  RecentTransactionsTableItem,
  TableProps,
} from "../common/interfaces";

const Table = (props: TableProps) => {
  const { title, header, emptyValue, data } = props;

  const itemCard = (
    item: ExpenseTableItem | RecentTransactionsTableItem,
    index: number
  ) => (
    <div
      className={`flex flex-row w-full justify-between ${
        index != 0 && "border-t"
      } pb-3 pt-3 border-t-gray-300`}
    >
      <div className="flex flex-col">
        <h3 className="text-white">
          {"description" in item ? item.description : item.merchant}
        </h3>
        <h5 className="text-gray-400">{item.date}</h5>
      </div>
      <div className="flex flex-row items-center ml-2">
        <div className="flex flex-wrap rounded-4xl bg-gray-100 min-w-15 p-2 justify-center">
          <h3 className="text-[15px]">
            {item.category.replace(/^(.{5}).*$/, "$1")}
          </h3>
        </div>
        <h3 className="text-[20px] text-red-400 ml-5">{item.amount}</h3>
      </div>
    </div>
  );

  const mobileTableItem = () => {
    return (
      <div className="flex flex-col lg:hidden">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-row w-full">
              {itemCard(item, index)}
            </div>
          );
        })}
      </div>
    );
  };

  const desktopTableItem = () => {
    return (
      <div className="hidden lg:inline-block flex-col w-full">
        <table className="w-full">
          <thead className="text-gray-400 uppercase text-sm">
            <tr className="text-center">
              {header?.map((item) => (
                <th className="py-3" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-[#2A2D35] transition text-center"
                >
                  {Object.values(item).map((insideItem: string, index) => (
                    <td
                      key={index}
                      className="py-4 px-6 font-medium text-white"
                    >
                      {insideItem.replace(/^(.{100}).*$/, "$1")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col mb-10 p-10 lg:w-full bg-[#1C1E24] rounded-4xl max-h-155 overflow-auto">
      {title && (
        <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mb-6 text-white">
          {title}
        </h1>
      )}
      {!!data.length ? (
        <div>
          {desktopTableItem()}
          {mobileTableItem()}
        </div>
      ) : (
        <div>
          <h2 className="text-[24px] font-bold mb-10">{emptyValue}</h2>
        </div>
      )}
    </div>
  );
};

export default Table;

import { Expense } from "@/lib/types";
import { TableProps } from "../common/interfaces";
import { getDateString } from "@/lib/utils/dateRange";
import { Trash } from "lucide-react";
import { deleteExpense } from "@/app/api/graphql/resolvers";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "@/redux/expenseSlice";

const Table = (props: TableProps) => {
  const { title, header, emptyValue, data } = props;
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleDelete = async (createdAt: Date) => {
    const response = await deleteExpense({
      createdAt: Number(createdAt),
      email: `${user.email}`,
    });
    console.log("response", response);
    if (!!response) {
      dispatch(
        removeExpense({
          createdAt: Number(createdAt),
        })
      );
    }
  };

  const trashIcon = (createdAt: Date) => {
    return (
      <Trash
        size={20}
        onClick={(e) => {
          e.preventDefault();
          handleDelete(createdAt);
        }}
      />
    );
  };

  const itemCard = (item: Expense, index: number) => {
    let date = "";
    if (`${item.createdAt}`.includes("-")) {
      date = getDateString(new Date(item.createdAt));
    } else {
      date = getDateString(item.createdAt as Date);
    }
    return (
      <div
        className={`flex flex-row w-full justify-between ${
          index != 0 && "border-t"
        } pb-3 pt-3 border-t-gray-300`}
      >
        <div className="flex flex-col">
          <h3 className="text-white">{item.merchant}</h3>
          <h5 className="text-gray-400">{date}</h5>
        </div>
        <div className="flex flex-row items-center ml-2">
          <div className="hidden sm:flex flex-wrap rounded-4xl bg-gray-100 min-w-15 p-2 justify-center">
            <h3 className="text-[15px]">{item.category}</h3>
          </div>
          <h3 className="text-[20px] text-white ml-5">
            $
            {item.amount > 1000000
              ? `${(item.amount / 1000000).toFixed(2)}M`
              : item.amount > 1000
                ? `${(item.amount / 1000).toFixed(2)}K`
                : item.amount}
          </h3>
          <div className="text-white ml-2">
            {trashIcon(item.createdAt as Date)}
          </div>
        </div>
      </div>
    );
  };

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
              <th className="py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              let date = "";
              if (`${item.createdAt}`.includes("-")) {
                date = getDateString(new Date(item.createdAt));
              } else {
                date = getDateString(item.createdAt as Date);
              }
              return (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-[#2A2D35] transition text-center"
                >
                  <td className="py-4 px-6 font-medium text-white">{date}</td>
                  <td className="py-4 px-6 font-medium text-white">
                    {item.category}
                  </td>
                  <td className="py-4 px-6 font-medium text-white">
                    {item.merchant}
                  </td>
                  <td className="py-4 px-6 font-medium text-white">
                    $
                    {item.amount > 1000000
                      ? `${(item.amount / 1000000).toFixed(2)}M`
                      : item.amount > 1000
                        ? `${(item.amount / 1000).toFixed(2)}K`
                        : item.amount}
                  </td>
                  <td className="text-gray-400 cursor-pointer">
                    {trashIcon(item.createdAt as Date)}
                  </td>
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
          <h2 className="text-[24px] font-bold mb-10 text-white">
            {emptyValue}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Table;

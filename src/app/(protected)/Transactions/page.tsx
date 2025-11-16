"use client";

import { TransactionsText, TableText } from "@/components/common/constants";
import PageProvier from "@/components/ui/PageProvider";
import Table from "@/components/ui/Table";
import ExpenseForm from "./_components/ExpenseForm";
import { useSelector } from "react-redux";

const Transactions = () => {
  const expenses = useSelector((state: any) => state.expense);
  return (
    <PageProvier
      pageName={TransactionsText.heading}
      pageSubHeading={TransactionsText.subHeading}
    >
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-20">
          <div className="flex-1 bg-[#1C1E24] rounded-4xl p-5">
            <div className="mb-10">
              <h1 className="text-[20px] sm:text-[25px] md:text-[25px] font-bold text-white">
                Add Expense
              </h1>
            </div>
            <ExpenseForm />
          </div>
          <div className="flex-2 flex-col lg:w-2/3 h-full">
            <div className="mb-10 pt-5">
              <h1 className="text-[20px] sm:text-[25px] md:text-[25px] font-bold text-white">
                Recent Expenses
              </h1>
            </div>
            <Table
              header={Object.values(TableText.headers.expenses)}
              emptyValue={"No Recent Expenses"}
              data={expenses}
            />
          </div>
        </div>
      </div>
    </PageProvier>
  );
};

export default Transactions;

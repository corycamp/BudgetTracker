import { TableText } from "@/components/common/constants";
import Table from "@/components/ui/Table";
import { useSelector } from "react-redux";

const RecentTransactions = () => {
  const expenses = useSelector((state: any) => state.expense);
  return (
    <div className="w-full lg:w-49/100">
      <Table
        title={TableText.titles.transactions}
        header={Object.values(TableText.headers.expenses)}
        emptyValue={"No Recent Transactions"}
        data={expenses}
      />
    </div>
  );
};

export default RecentTransactions;

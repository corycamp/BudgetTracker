import { TableText } from "@/components/common/constants";
import Table from "@/components/ui/Table";

const RecentTransactions = () => {
  return (
    <div className="w-full lg:w-49/100">
      <Table
        title={TableText.titles.transactions}
        header={Object.values(TableText.headers.transactions)}
        emptyValue={"No Recent Transactions"}
        data={[
          {
            date: "2025-09-16",
            category: "Shopping qeqweqweqweqeqweqwewqe",
            description: "Test description",
            amount: "0.00",
          },
          {
            date: "2025-09-16",
            category: "Wash",
            description: "Test description",
            amount: "0.00",
          },
        ]}
      />
    </div>
  );
};

export default RecentTransactions;

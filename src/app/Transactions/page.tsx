import Table from "@/components/ui/Table";
import { TransactionsText } from "../../components/common/constants";
import PageProvier from "../../components/ui/PageProvider";

const Transactions = () => {
  return (
    <PageProvier
      pageName={TransactionsText.heading}
      pageSubHeading={TransactionsText.subHeading}
    >
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
            {/* Amount and date selection */}
            <div className="flex flex-col w-full lg:flex-row justify-between">
              <div className="flex flex-col w-full mr-3">
                <h3>Amount</h3>
                <span className="flex flex-row lg:w-auto border-1 rounded-md h-8">
                  <p className="ml-2">$</p>
                  <p>0.00</p>
                </span>
              </div>
              <div className="flex flex-col w-full mr-3 mt-2 lg:mt-0">
                <h3>Date</h3>
                <span className="flex flex-row lg:w-auto border-1 rounded-md h-8">
                  <p className="ml-2">mm/dd/yyyy</p>
                </span>
              </div>
            </div>
            {/* Merchant */}
            <div className="flex flex-col w-full mt-2">
              <div className="flex flex-col w-full mr-3">
                <h3>Merchant</h3>
                <span className="flex flex-row lg:w-auto border-1 rounded-md h-8">
                  <p className="ml-2">e.g., Grocery Store</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/3 h-full">
            <Table />
          </div>
        </div>
      </div>
    </PageProvier>
  );
};

export default Transactions;

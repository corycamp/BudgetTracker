import { TransactionsText } from "../common/constants";
import PageProvier from "../components/PageProvider";


const Transactions =()=>{

    return (
         <PageProvier
      pageName={TransactionsText.heading}
      pageSubHeading={TransactionsText.subHeading}
    >
        <div className="flex flex-col lg:flex-row w-full h-full">
            {/* Amount and date section */}
            <div className="flex flex-row lg:flex-col">
                <div>
                    Test
                </div>
                <div>
                    Test
                </div>
            </div>
        </div>
        </PageProvier>
    )
}

export default Transactions;
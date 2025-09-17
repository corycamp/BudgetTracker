const RecentTransactions = () => {
  const hasValue = true;
  const tableHeader = ()=>{
    return(
    <div className="flex flex-row w-full justify-between mb-3">
      <h3>Date</h3>
      <h3>Description</h3>
      <h3>Category</h3>
      <h3>Amount</h3>
    </div>
    )
  }

  const tableItem = ()=>{
    return(
    <div className="flex flex-row w-full justify-between border-t-1 border-t-gray-200 pt-2 pb-2">
      <h3>Date</h3>
      <h3>Description</h3>
      <h3>Category</h3>
      <h3>Amount</h3>
    </div>
    )
  }

  const itemCard = (index:number)=>(
    <div className={`flex flex-row w-full justify-between ${index != 0 && "border-t-1"} pb-3 pt-3 border-t-gray-300`}>
      <div className="flex flex-col">
        <h3>Grocery Shopping</h3>
        <h5>2025-09-16</h5>
      </div>
      <div className="flex flex-row items-center">
        <h3 className="flex text-[15px] rounded-4xl bg-gray-100 min-w-15 p-2 justify-center max-w-15">Food</h3>
        <h3 className="text-[20px] text-red-400 ml-5">-$150</h3>
      </div>
    </div>
  )

  const desktopView = ()=>(<div className="hidden lg:flex flex-col mt-6">
        <div className="flex flex-row w-full">
          {tableHeader()}
        </div>
        {Array.from({length:5},(_i,index)=>{return(
        <div key={index} className="flex flex-row w-full">
          {tableItem()}
        </div>)})}
      </div>)

  const mobileView = ()=>(<div className="flex flex-col lg:hidden">
        {Array.from({length:5},(_i,index)=>{return(
        <div key={index} className="flex flex-row w-full">
          {itemCard(index)}
        </div>)})}
      </div>)

  return (
    <div className="flex flex-col mb-10 p-10 lg:w-49/100 bg-white border-1 border-gray-300 rounded-4xl max-h-155 overflow-auto">
      <h1 className="text-[30px] font-bold">Recent Transactions</h1>
      {hasValue ? 
      <div>
       {desktopView()}
       {mobileView()}
       </div>: 
      <div><h2 className="text-[24px] font-bold mb-10">No recent transactions</h2>
      </div>
      }
    </div>
  );
};

export default RecentTransactions;

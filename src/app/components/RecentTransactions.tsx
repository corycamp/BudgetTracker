const RecentTransactions = () => {
  return (
    <div className="flex flex-col mb-10 p-10 md:w-49/100 bg-white border-1 border-gray-300 rounded-4xl max-h-155 overflow-auto">
      <h1 className="text-[30px] font-bold mb-10">Recent Transactions</h1>
      <h2 className="text-[24px] font-bold mb-10">No recent transactions</h2>
    </div>
  );
};

export default RecentTransactions;

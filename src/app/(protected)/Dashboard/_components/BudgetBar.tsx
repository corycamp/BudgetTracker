const BudgetBar = () => {
  const value = 750;
  const max = 1000;

  const percent = (value / max) * 100;
  return (
    <div className="flex flex-col mb-5">
      <div className="flex flex-row mb-4 items-center justify-between">
        <h2 className="text-[20px] font-medium text-white">Food Budget</h2>
        <h3 className="text-[18px] font-medium text-green-400">{`${percent}%`}</h3>
      </div>
      {/* Progress bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-4 bg-green-400 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex flex-row mt-4">
        <h3 className="text-[18px] font-medium text-gray-400">{`$${value}/$${max}`}</h3>
      </div>
    </div>
  );
};

export default BudgetBar;

import BudgetBar from "./BudgetBar";

const SummaryCard = () => {
  return (
    <div className="flex flex-col mb-10 p-10 md:w-49/100 bg-white border-1 border-gray-300 rounded-4xl max-h-155 overflow-auto">
      <h1 className="text-[30px] font-bold mb-10">Budget Summary</h1>
      <BudgetBar />
    </div>
  );
};

export default SummaryCard;

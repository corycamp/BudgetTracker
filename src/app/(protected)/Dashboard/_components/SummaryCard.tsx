import React from "react";
import BudgetBar from "./BudgetBar";
import { ChevronDown, ChevronUp } from "lucide-react";

const SummaryCard = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <div
      className={`flex flex-col mb-10 p-10 lg:w-49/100 bg-[#1C1E24] rounded-4xl max-h-155 ${
        !open && "lg:h-30 overflow-hidden"
      } overflow-auto`}
    >
      <div className="flex flex-row w-full justify-between items-start">
        <h1
          className={`text-[20px] sm:text-[25px] md:text-[30px] font-bold text-white ${
            open ? "mb-10" : "mb-0"
          }`}
        >
          Budget Summary
        </h1>
        <button onClick={() => setOpen(!open)}>
          {!open ? (
            <ChevronDown className="text-white w-10 h-10" />
          ) : (
            <ChevronUp className="text-white w-10 h-10" />
          )}
        </button>
      </div>
      {open ? <BudgetBar /> : null}
    </div>
  );
};

export default SummaryCard;

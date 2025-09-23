import React from 'react'
import BudgetBar from "./BudgetBar";
import Image from "next/image"
import chevronDown from "../assets/chevronDown.svg"
import chevronUp from "../assets/chevronUp.svg"

const SummaryCard = () => {
  const [open,setOpen] = React.useState<boolean>(true);
  return (
    <div className={`flex flex-col mb-10 p-10 lg:w-49/100 bg-white border-1 border-gray-300 rounded-4xl max-h-155 ${!open && "h-30"} overflow-auto`}>
      <div className="flex flex-row w-full justify-between items-start">
      <h1 className={`text-[30px] font-bold ${open ? "mb-10" : "mb-0"}`}>Budget Summary</h1>
      <button onClick={()=>setOpen(!open)}>
       <Image src={open ? chevronUp : chevronDown} width={25} alt={"Budget Summary chevron"} className="mt-2"/>
      </button>
      </div>
      {open ? <BudgetBar /> : null}
    </div>
  );
};

export default SummaryCard;

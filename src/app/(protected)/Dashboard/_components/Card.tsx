import { CardProps } from "@/components/common/interfaces";
import { Banknote } from "lucide-react";

const Card = (props: CardProps) => {
  const { title, amount } = props;
  return (
    <div className="bg-[#1C1E24] flex flex-col mb-5 md:w-16/50 h-40 rounded-xl p-4 justify-center shadow-sm">
      <div className="flex flex-row items-center w-full mb-5">
        <div>
          <Banknote className="text-green-400 w-8 h-8"/>
        </div>
        <h2 className="text-[15px] ml-4 font-medium text-white">{title}</h2>
      </div>
      <div>
        <h1 className="text-[30px] font-bold text-white">{`$${amount}`}</h1>
      </div>
    </div>
  );
};

export default Card;

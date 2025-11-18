import { CardProps } from "@/components/common/interfaces";
import { Banknote } from "lucide-react";
import { BeatLoader } from "react-spinners";

const Card = (props: CardProps) => {
  const { title, amount, loading } = props;
  return (
    <div className="bg-[#1C1E24] flex flex-col mb-5 md:w-16/50 h-40 rounded-xl p-4 justify-center shadow-sm">
      {loading ? (
        <div className="flex flex-row justify-center">
          <BeatLoader
            className="gap-2"
            color="white"
            loading={loading}
            size={15}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center w-full mb-5">
            <div>
              <Banknote className="text-green-400 w-8 h-8" />
            </div>
            <h2 className="text-[15px] ml-4 font-medium text-white">{title}</h2>
          </div>
          <div>
            <h1 className="text-[30px] font-bold text-white">{`$${amount}`}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

import { CardProps } from "@/components/common/interfaces";
import Image from "next/image";

const Card = (props: CardProps) => {
  const { imageSrc, title, amount } = props;
  return (
    <div className="bg-[#23262D] flex flex-col mb-5 md:w-16/50 h-40 rounded-xl p-4 justify-center shadow-sm">
      <div className="flex flex-row items-center w-full mb-5">
        <div className="border-1 rounded-4xl p-2 bg-white">
          <Image src={imageSrc} alt={"Card Icon"} width={30}/>
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

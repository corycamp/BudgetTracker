import Image from "next/image";

const Card = (props: CardProps) => {
  const { imageSrc, title, amount } = props;
  return (
    <div className="bg-white flex flex-col mb-5 md:w-16/50 h-40 border-1 border-gray-300 rounded-xl p-4 justify-center">
      <div className="flex flex-row items-center w-full mb-5">
        <div className="border-1 rounded-4xl p-2">
          <Image src={imageSrc} alt={"Card Icon"} width={30} />
        </div>
        <h2 className="text-[15px] ml-4 font-medium">{title}</h2>
      </div>
      <div>
        <h1 className="text-[30px] font-bold">{`$${amount}`}</h1>
      </div>
    </div>
  );
};

export default Card;

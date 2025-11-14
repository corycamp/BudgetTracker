"use client";
import Image from "next/image";
import logo from "./assets/logo.svg";

const LoggedOutNavbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-[#0D0F14] border-b border-white">
      <div className="flex flex-row items-center">
        <Image src={logo} alt={"Logo"} width={50} />
        <h1 className="ml-2 text-[20px] font-medium text-white">
          BudgetTracker
        </h1>
      </div>
    </nav>
  );
};

export default LoggedOutNavbar;

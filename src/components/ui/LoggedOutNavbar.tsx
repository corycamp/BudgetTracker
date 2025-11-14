"use client";
import Image from "next/image";
import logo from "./assets/logo.svg";

const LoggedOutNavbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-[#0D0F14] border-b border-white/10">
      <div className="flex flex-row items-center">
        <Image src={logo} alt={"Logo"} width={50} />
        <h1 className="ml-2 text-[20px] font-medium text-white">
          BudgetTracker
        </h1>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 text-sm text-white rounded-md bg-gray-700 hover:bg-gray-600 transition">
          Log In
        </button>
        <button className="px-4 py-2 text-sm text-white rounded-md bg-green-600 hover:bg-green-500 transition">
          Sign Up for Free
        </button>
      </div>
    </nav>
  );
};

export default LoggedOutNavbar;

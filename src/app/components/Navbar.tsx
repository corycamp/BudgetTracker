"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "../common/constants";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.svg";
import Image from "next/image";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname().toLowerCase();
  console.log(pathname);
  const getNavLinks = (): string[] => {
    return Object.keys(NavigationLinks);
  };

  return (
    <nav className="hidden lg:flex flex-row h-16 w-full border-b-1 pl-10 pr-10 border-b-gray-300 bg-white justify-between items-center sticky top-0">
      <div className="w-auto flex">
        <Link href={`/Dashboard`}>
          <div className="flex flex-row items-center">
            <Image src={logo} alt={"Logo"} width={50} />
            <h1 className="ml-2 text-[20px] font-medium">BudgetTracker</h1>
          </div>
        </Link>
      </div>
      <div className="w-auto flex flex-row justify-center mr-10">
        {getNavLinks().map((item) => {
          return (
            <div
              key={item}
              className={clsx(
                "ml-10 flex w-auto text-[19px] font-medium",
                !pathname.includes(item.toLowerCase())
                  ? "text-gray-400"
                  : "text-black"
              )}
            >
              <Link href={`/${NavigationLinks[`${item as NavbarLink}`]}`}>
                {item}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-auto flex justify-end-safe">
        <div className="flex mr-5 border rounded-4xl p-2 bg-emerald-400">
          <Image src={bell} alt={"Logo"} width={20} />
        </div>
        <div className="flex border rounded-4xl p-2">
          <Link href={`/Account`}>
            <Image src={avatar} alt={"Logo"} width={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

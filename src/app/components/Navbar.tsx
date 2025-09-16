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
    <nav className="hidden lg:flex flex-row h-16 mb-2 w-full border-b-1 border-b-gray-300 justify-between items-center sticky top-0">
      <div className="w-auto flex">
        <Link href={`/Dashboard`}>
          <div className="ml-4 flex flex-row items-center">
            <Image src={logo} alt={"Logo"} width={50} />
            <h1 className="ml-2 text-[25px]">BudgetTracker</h1>
          </div>
        </Link>
      </div>
      <div className="w-auto flex flex-row justify-center">
        {getNavLinks().map((item) => {
          return (
            <div
              key={item}
              className={clsx(
                "ml-10 flex w-auto text-[24px]",
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
          <Image src={bell} alt={"Logo"} width={25} />
        </div>
        <div className="flex mr-10 border rounded-4xl p-2">
          <Link href={`/Account`}>
            <Image src={avatar} alt={"Logo"} width={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

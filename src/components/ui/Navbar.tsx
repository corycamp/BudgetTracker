"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "../common/constants";
import logo from "./assets/logo.svg";
import avatar from "./assets/avatar.svg";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavbarLink } from "../common/interfaces";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname().toLowerCase();
  const getNavLinks = (): string[] => {
    return Object.keys(NavigationLinks);
  };

  useEffect(() => {
    !isOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
  }, [isOpen]);

  const desktopNavBar = () => (
    <nav className="hidden lg:flex flex-row h-16 w-full border-b-1 pl-10 pr-10 border-white bg-[#0D0F14] justify-between items-center sticky top-0">
      <div className="w-auto flex">
        <Link href={`/Dashboard`}>
          <div className="flex flex-row items-center">
            <Image src={logo} alt={"Logo"} width={50} />
            <h1 className="ml-2 text-[20px] font-medium text-white">
              BudgetTracker
            </h1>
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
                  : "text-green-500"
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
        <div className="flex border rounded-4xl p-2 bg-white">
          <Link href={`/Account`}>
            <Image src={avatar} alt={"Avatar"} width={20} />
          </Link>
        </div>
      </div>
    </nav>
  );

  const mobileNavBar = () => (
    <nav
      className={`flex flex-row lg:hidden h-16 ${
        isOpen && "h-full"
      } w-full border-b-1 border-b-white bg-[#0D0F14] justify-between fixed top-0 z-100`}
    >
      <div className="flex flex-col w-full pr-10 pl-10 mt-2">
        <div className="flex flex-row w-full">
          <div className="w-auto flex">
            <Link href={`/Dashboard`}>
              <div className="flex flex-row items-center">
                <Image src={logo} alt={"Logo"} width={50} />
                <h1 className="ml-2 text-[18px] sm:text-[20px] font-medium text-white">
                  BudgetTracker
                </h1>
              </div>
            </Link>
          </div>
          <div className="w-full h-10 flex justify-end-safe">
            <div className="flex mr-3 border rounded-4xl p-2 cursor-pointer bg-white">
              <Link href={`/Account`}>
                <Image src={avatar} alt={"Avatar"} width={20} />
              </Link>
            </div>
            <div className="flex">
              <button
                className="flex flex-col justify-center items-center w-7 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <div className="flex flex-col h-6 justify-between w-full">
                    <span className="w-full border-white h-0 border-2 mb-1" />
                    <span className="w-full border-white h-0 border-2 mb-1" />
                    <span className="w-full border-white h-0 border-2" />
                  </div>
                ) : (
                  <div className="flex flex-col h-6 justify-between w-full mt-1">
                    <span className="w-full border-white bg-white h-0 border-2 mb-1 rotate-45 translate-y-2" />
                    <span className="w-full border-white bg-white h-0 border-2 mb-1 rotate-135 -translate-y-2" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="w-auto flex flex-col mt-5">
            {getNavLinks().map((item) => {
              return (
                <div
                  key={item}
                  className={clsx(
                    "flex w-auto text-[19px] font-medium mt-3 mb-3 border-b-1 border-gray-200",
                    !pathname.includes(item.toLowerCase())
                      ? "text-gray-400"
                      : "text-white"
                  )}
                >
                  <Link
                    href={`/${NavigationLinks[`${item as NavbarLink}`]}`}
                    shallow={false}
                  >
                    {item}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <>
      {desktopNavBar()}
      {mobileNavBar()}
    </>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "../common/constants";
import logo from "./assets/logo.svg";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { NavbarLink } from "../common/interfaces";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import { PiDoor } from "react-icons/pi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname().toLowerCase();
  const getNavLinks = (): string[] => {
    return Object.keys(NavigationLinks);
  };

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    !isOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleAccountIconClicked = () => setShowDropdown(!showDropdown);

  const avatarIcon = () => {
    return (
      <div>
        {!!user?.image ? (
          <Image
            className="rounded-4xl hover:cursor-pointer"
            src={user.image}
            alt={"Profile picture"}
            width={35}
            height={35}
            onClick={handleAccountIconClicked}
          />
        ) : (
          <User
            className="text-white bg-gray-600 rounded-4xl w-9 h-9 p-1 hover:cursor-pointer"
            onClick={handleAccountIconClicked}
          />
        )}
      </div>
    );
  };

  const desktopNavBar = () => (
    <nav className="hidden lg:flex flex-row h-16 w-full border-b pl-10 pr-10 border-white bg-[#0D0F14] justify-between items-center sticky top-0">
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
        {getNavLinks()?.map((item) => {
          return (
            <div
              key={item}
              className={clsx(
                "ml-10 flex w-auto text-[19px] font-medium",
                !pathname.includes(item.toLowerCase())
                  ? "text-gray-400 hover:text-white"
                  : "text-green-500"
              )}
            >
              <Link
                href={`/${NavigationLinks[`${item as NavbarLink}`]}`}
                className={clsx(
                  !pathname.includes(item.toLowerCase())
                    ? "hover:cursor-pointer"
                    : "cursor-default"
                )}
              >
                {item}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-auto flex justify-end-safe relative" ref={dropdownRef}>
        {avatarIcon()}
        {showDropdown && (
          <div className="absolute w-30 left-0 -translate-x-14 mt-13 bg-gray-600 rounded-xl p-3 shadow-xl">
            <svg
              className="absolute -top-3 left-18 -translate-x-1/2 text-gray-600"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="currentColor"
            >
              <polygon points="10,0 20,12 0,12" />
            </svg>
            <button
              className="flex flew-row justify-center items-center w-full text-[16px] text-white hover:cursor-pointer hover:text-green-400"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              <div className="flex flew-row m-1">
                <PiDoor className=" mr-1" size={22} />
                Logout
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const mobileNavBar = () => (
    <nav
      className={`flex flex-row lg:hidden h-16 ${
        isOpen && "h-full"
      } w-full border-b border-b-white bg-[#0D0F14] justify-between fixed top-0 z-100`}
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
            <div className="flex mr-3 border items-center rounded-4xl p-2 cursor-pointer">
              {avatarIcon()}
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
            {getNavLinks()?.map((item) => {
              return (
                <div
                  key={item}
                  className={clsx(
                    "flex w-auto text-[19px] font-medium mt-3 mb-3 border-b border-gray-200",
                    !pathname.includes(item.toLowerCase())
                      ? "text-gray-400"
                      : "text-green-500"
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
            <div key={"logout"}>
              <button
                className="text-white mt-5"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                <div className="flex flew-row text-[20px]">
                  <PiDoor className=" mr-1" size={30} />
                  Logout
                </div>
              </button>
            </div>
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

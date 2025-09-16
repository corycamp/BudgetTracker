"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "../common/constants";
// import logo from "@/assets/logo.svg";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname().toLowerCase();
  console.log(pathname);
  const getNavLinks = (): string[] => {
    return Object.keys(NavigationLinks);
  };

  return (
    <nav className="hidden lg:flex flex-row h-16 w-full border-b-1 border-b-gray-300 justify-between items-center sticky top-0">
      <div className="w-auto flex">
        {/* <img src={logo} /> */}
        <div>
          <h1>FinTrack</h1>
        </div>
      </div>
      <div className="w-100 flex flex-row justify-center">
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
        <div className="flex mr-10">test</div>
        <div className="flex mr-10">test</div>
      </div>
    </nav>
  );
};

export default Navbar;

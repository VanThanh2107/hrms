"use client";

import Link from "next/link";
import React, { useState } from "react";
import * as ROUTES from "@/constants/routes";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import clsx from "clsx";
import UserDropdown from "./dashboard/user-dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <header className="h-[var(--header-height)] bg-background border-b border-border flex items-center">
          <div className="container mx-auto px-4 flex items-center justify-between gap-x-4">
            <Link href={ROUTES.HOME} className="py-1.5">
              <Image
                src={"/frappe-hr-logo.svg"}
                alt=""
                width={28}
                height={28}
                className="max-h-[28px]"
              />
            </Link>
            <div className="flex justify-end items-center grow">
              <form action="" className="flex-1 justify-end items-center flex">
                <div className="flex-1 max-w-[300px] mx-4 relative flex flex-wrap">
                  <div className="w-full">
                    <Input
                      className={clsx(
                        "h-[28px] pl-9 text-[13px] focus-visible:ring-0",
                        isOpen ? "rounded-b-none" : ""
                      )}
                      placeholder="Search or type a command (Ctrl + G)"
                      onFocus={() => setIsOpen(true)}
                      onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    />
                    {isOpen && (
                      <ul
                        role="listbox"
                        className="text-sm bg-white shadow border-t border-border rounded-b-md p-1 overflow-hidden absolute w-full space-y-[5px] *:cursor-pointer"
                      >
                        <li
                          className="p-[6px] data-[selected=true]:bg-gray-800/5 rounded-md"
                          data-selected="true"
                        >
                          <Link href="/Workspaces/HR" className="font-normal">
                            <span>
                              <b>HR</b> Workspace
                            </span>
                          </Link>
                        </li>
                        <li className="p-[6px] data-[selected=true]:bg-gray-800/5 rounded-md">
                          <Link
                            href="/Workspaces/Payables"
                            className="font-normal"
                          >
                            <span>
                              <b>Payables</b> Workspace
                            </span>
                          </Link>
                        </li>
                        <li className="p-[6px] data-[selected=true]:bg-gray-800/5 rounded-md">
                          <Link href="#" className="font-normal">
                            <span>Help on Search</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <span className="absolute ml-3 flex items-center h-full">
                    <SearchIcon className="size-4 text-muted-foreground" />
                  </span>
                </div>
              </form>
              <ul className="flex items-center space-x-4">
                <li className="relative my-1">
                  <BellIcon className="text-muted-foreground size-4" />
                </li>
                <li className="border-r h-6 bg-border"></li>
                <li className="relative my-1">
                  <BellIcon className="text-muted-foreground size-4" />
                </li>
                <li className="relative my-1">
                  <button className="flex items-center gap-x-3">
                    <span className="text-sm">Help </span>
                    <ChevronDownIcon className="size-4 text-muted-foreground" />
                  </button>
                </li>
                <li className="relative my-1">
                  <UserDropdown />
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

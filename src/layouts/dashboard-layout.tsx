"use client";

import { ChevronsLeft, ChevronsRight, MenuIcon } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import { useHover } from "@/hooks/useHover";
import { useToggle } from "@/hooks/useToggle";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const { ref, isHovered } = useHover<HTMLButtonElement>();
  const [isToggled, toggle] = useToggle(false);
  const lastSegment =
    pathName === "/"
      ? "Dashboard"
      : pathName.split("/").filter(Boolean).pop() || "";
  const formattedTitle = lastSegment.replace(/-/g, " ");

  return (
    <>
      <div className="bg-white">
        <div className="flex z-10 sticky top-12 mb[5px]">
          <div className="container mx-auto px-4">
            <div className="flex h-[var(--page-head-height)] py-2 items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  ref={ref}
                  className="flex text-gray-700 cursor-pointer"
                  onClick={toggle}
                >
                  {isHovered ? (
                    isToggled ? (
                      <ChevronsLeft size={20} />
                    ) : (
                      <ChevronsRight size={20} />
                    )
                  ) : (
                    <MenuIcon className="size-5" />
                  )}
                </button>
                <h4
                  className="capitalize text-xl font-bold cursor-pointer"
                  title={formattedTitle}
                >
                  {formattedTitle}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="main-content">
            <div className="flex h-[calc(100vh-var(--header-height)-var(--page-head-height)-5px)]">
              <div
                className="w-[250px] px-2 text-sm overflow-y-auto custom-scroll"
                style={{ display: isToggled ? "none" : "block" }}
              >
                <Sidebar />
              </div>
              <div className="flex-1 custom-scroll px-4 pt-[6px] -mt-[6px] overflow-y-auto">
                <div className="border border-border p-4 mb-[10px] rounded-lg">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

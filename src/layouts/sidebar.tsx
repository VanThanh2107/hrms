"use client";

import { sidebarData } from "@/constants";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const pathName = usePathname();
  const lastSegment = `/${pathName.split("/").filter(Boolean).pop() || ""}`;

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      <nav className="mt-4 flex-1">
        <ul className="space-y-2">
          {sidebarData.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={clsx(
                      "flex items-center justify-between w-full px-3 py-2 rounded-md cursor-pointer",
                      lastSegment === item.path
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    )}
                  >
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2"
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                    <ChevronDown
                      size={18}
                      className={clsx(
                        "transition-all duration-320 ease-linear",
                        openMenus[item.title] ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {openMenus[item.title] && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {item.children.map((subItem) => (
                        <li
                          key={subItem.title}
                          className={clsx(
                            "px-3 py-2 rounded-md",
                            lastSegment === subItem.path
                              ? "bg-gray-100"
                              : "hover:bg-gray-100"
                          )}
                        >
                          <Link
                            href={subItem.path}
                            className="flex items-center space-x-2"
                          >
                            <subItem.icon size={16} />
                            <span>{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={clsx(
                    "px-3 py-2 flex items-center space-x-2 rounded-md",
                    lastSegment === item.path
                      ? "bg-gray-100"
                      : "hover:bg-gray-100"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

"use client";

import { Button } from "@/components/ui/button";
import { userDropdown } from "@/constants";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Avatar className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <AvatarImage
          src="/frappe-hr-logo.svg"
          className="size-[28px] rounded-full"
        />
      </Avatar>
      <div
        className={clsx(
          "p-1 mt-1 bg-white shadow absolute right-0 left-auto top-full min-w-[200px] rounded-sm z-10 transition-all duration-300 ease-initial",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        {userDropdown.map((item, index) => (
          <React.Fragment key={item.title}>
            {index === userDropdown.length - 1 && (
              <div className="m-1 h-[1px] bg-border"></div>
            )}

            {item.path ? (
              <Link
                href={item.path}
                className="block w-full px-2 py-[6px] hover:bg-accent hover:text-accent-foreground rounded-sm"
              >
                {item.title}
              </Link>
            ) : (
              <Button
                variant="ghost"
                className="w-full px-2 py-[6px] justify-start font-normal rounded-sm"
              >
                {item.title}
              </Button>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default UserDropdown;

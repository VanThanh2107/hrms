'use client';

import { Button } from '@/components/ui/button';
import { userDropdown } from '@/constants';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <Avatar
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AvatarImage
            src="/app/frappe-hr-logo.svg"
            className="size-[28px] rounded-full"
          />
        </Avatar>
        <div
          className={clsx(
            'absolute top-full right-0 left-auto z-10 mt-1 min-w-[200px] rounded-sm bg-white p-1 shadow transition-[visible_invisible_opacity] duration-320 ease-linear',
            isOpen ? 'visible opacity-100' : 'invisible opacity-0',
          )}
        >
          {userDropdown.map((item, index) => (
            <React.Fragment key={item.title}>
              {index === userDropdown.length - 1 && (
                <div className="bg-border m-1 h-[1px]"></div>
              )}
              {item.path ? (
                <Link
                  href={item.path}
                  className="hover:bg-accent hover:text-accent-foreground block w-full rounded-sm px-2 py-[6px]"
                >
                  {item.title}
                </Link>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-sm px-2 py-[6px] font-normal"
                >
                  {item.title}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDropdown;

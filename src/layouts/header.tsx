'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import * as ROUTES from '@/constants/routes';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { BellIcon, ChevronDownIcon, SearchIcon } from 'lucide-react';
import clsx from 'clsx';
import UserDropdown from './dashboard/user-dropdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useBreadcrumbStore } from '@/store/useBreadcrumbStore';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useBreadcrumbStore();

  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <header
          id="header"
          className="bg-background border-border flex h-[var(--header-height)] items-center border-b"
        >
          <div className="container mx-auto flex items-center justify-between gap-x-4 px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={ROUTES.HOME} className="py-1.5">
                    <Image
                      src={'/app/frappe-hr-logo.svg'}
                      alt=""
                      width={28}
                      height={28}
                      className="max-h-[28px]"
                    />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {item.href ? (
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex grow items-center justify-end">
              <form className="flex flex-1 items-center justify-end">
                <div className="relative mx-4 flex max-w-[300px] flex-1 flex-wrap">
                  <div className="w-full">
                    <Input
                      className={clsx(
                        'h-[28px] pl-9 text-[13px] focus-visible:ring-0',
                        isOpen ? 'rounded-b-none' : '',
                      )}
                      placeholder="Search or type a command (Ctrl + G)"
                      onFocus={() => setIsOpen(true)}
                      onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    />
                    {isOpen && (
                      <ul
                        role="listbox"
                        className="border-border absolute w-full space-y-[5px] overflow-hidden rounded-b-md border-t bg-white p-1 text-sm shadow *:cursor-pointer"
                      >
                        <li
                          className="rounded-md p-[6px] data-[selected=true]:bg-gray-800/5"
                          data-selected="true"
                        >
                          <Link href="/Workspaces/HR" className="font-normal">
                            <span>
                              <b>HR</b> Workspace
                            </span>
                          </Link>
                        </li>
                        <li className="rounded-md p-[6px] data-[selected=true]:bg-gray-800/5">
                          <Link
                            href="/Workspaces/Payables"
                            className="font-normal"
                          >
                            <span>
                              <b>Payables</b> Workspace
                            </span>
                          </Link>
                        </li>
                        <li className="rounded-md p-[6px] data-[selected=true]:bg-gray-800/5">
                          <Link href="#" className="font-normal">
                            <span>Help on Search</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <span className="absolute ml-3 flex h-full items-center">
                    <SearchIcon className="text-muted-foreground size-4" />
                  </span>
                </div>
              </form>
              <ul className="flex items-center space-x-4">
                <li className="relative my-1">
                  <BellIcon className="text-muted-foreground size-4" />
                </li>
                <li className="bg-border h-6 border-r"></li>
                <li className="relative my-1">
                  <button className="flex items-center gap-x-3">
                    <span className="text-sm">Help </span>
                    <ChevronDownIcon className="text-muted-foreground size-4" />
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

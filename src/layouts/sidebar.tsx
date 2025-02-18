'use client';

import { sidebarData } from '@/constants';
import { useToggle } from '@/hooks/useToggle';
import clsx from 'clsx';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [isOpen, toggle] = useToggle(false);
  const pathName = usePathname();
  const lastSegment = `/${pathName.substring(pathName.lastIndexOf('/') + 1)}`;

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      <nav className="flex-1">
        <button
          className="mt-3 mb-1 flex w-full cursor-pointer items-center gap-x-2 text-start uppercase"
          onClick={toggle}
        >
          <ChevronRight
            size={16}
            className={clsx(
              'text-muted-foreground transition-all duration-220 ease-linear',
              !isOpen ? 'rotate-90' : '',
            )}
          />
          <span>Public</span>
        </button>
        <ul className={clsx('space-y-2', isOpen ? 'hidden' : '')}>
          {sidebarData.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={clsx(
                      'flex w-full cursor-pointer items-center justify-between gap-x-4 rounded-md px-3 py-2',
                      lastSegment === item.path
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-100',
                    )}
                  >
                    <Link
                      href={item.path}
                      className="flex flex-1 items-center space-x-2"
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                    <ChevronDown
                      size={18}
                      className={clsx(
                        'transition-all duration-320 ease-linear',
                        openMenus[item.title] ? 'rotate-180' : '',
                      )}
                    />
                  </button>
                  {openMenus[item.title] && (
                    <ul className="mt-1 ml-6 space-y-1">
                      {item.children.map((subItem) => (
                        <li
                          key={subItem.title}
                          className={clsx(
                            'rounded-md px-3 py-1',
                            lastSegment === subItem.path
                              ? 'bg-gray-100'
                              : 'hover:bg-gray-100',
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
                    'flex items-center space-x-2 rounded-md px-3 py-2',
                    lastSegment === item.path
                      ? 'bg-gray-100'
                      : 'hover:bg-gray-100',
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

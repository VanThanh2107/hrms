'use client';

import {
  ChevronsLeft,
  ChevronsRight,
  EditIcon,
  MenuIcon,
  Plus,
} from 'lucide-react';
import React from 'react';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';
import { useHover } from '@/hooks/useHover';
import { useToggle } from '@/hooks/useToggle';
import { findTitleByUrl } from '@/utils';
import { sidebarData } from '@/constants';
import { Button } from '@/components/ui/button';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const { ref, isHovered } = useHover<HTMLButtonElement>();
  const [isToggled, toggle] = useToggle(false);
  const pageHeadTitle = findTitleByUrl(sidebarData, pathName) ?? 'Dashboard';

  return (
    <>
      <div className="bg-white">
        <div className="mb[5px] sticky top-12 z-10 flex">
          <div className="container mx-auto px-4">
            <div className="flex h-[var(--page-head-height)] items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <button
                  ref={ref}
                  className="flex cursor-pointer text-gray-700"
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
                  className="cursor-pointer text-xl font-bold capitalize"
                  title={pageHeadTitle}
                >
                  {pageHeadTitle}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="main-content">
            <div className="flex h-[calc(100vh-var(--header-height)-var(--page-head-height)-5px)]">
              <div
                className="custom-scroll w-[250px] overflow-y-auto px-2 text-sm"
                style={{ display: isToggled ? 'none' : 'block' }}
              >
                <Sidebar />
              </div>
              <div className="custom-scroll -mt-[6px] flex-1 overflow-y-auto px-4 pt-[6px]">
                <div className="border-border mb-[10px] rounded-lg border p-4">
                  <div className="min-h-[500px]">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap">{children}</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex items-center justify-end gap-x-4">
                    <Button variant={'outline'} size={'sm'}>
                      <EditIcon className="text-muted-foreground size-4" />
                      <span>Edit</span>
                    </Button>
                    <Button variant={'outline'} size={'sm'}>
                      <Plus className="text-muted-foreground size-4" />
                      <span>New</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteLayout;

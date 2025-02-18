'use client';

import { useToggle } from '@/hooks/useToggle';
import { ChevronsLeft, ChevronsRight, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useHover } from '@/hooks/useHover';

const ControlLayout = ({
  children,
  pageHeader,
  sidebar,
  footerForm,
}: {
  children: React.ReactNode;
  pageHeader: React.ReactNode;
  sidebar: React.ReactNode;
  footerForm?: React.ReactNode;
}) => {
  const pathName = usePathname();
  const { ref, isHovered } = useHover<HTMLButtonElement>();
  const [isToggled, toggle] = useToggle(false);
  const title = pathName.split('/').filter(Boolean).pop()?.replace(/-/g, ' ');

  return (
    <>
      <div className="relative bg-white">
        <div
          id="page-header"
          className="mb[5px] sticky z-10 flex"
          style={{ top: 'var(--header-height)' }}
        >
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
                  title={title}
                >
                  {title}
                </h4>
              </div>
              {pageHeader}
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="main-content">
            <div className="flex h-[calc(100vh-var(--header-height)-var(--page-head-height)-5px)]">
              <div
                className="w-[250px] overflow-y-auto px-2 text-sm"
                style={{ display: isToggled ? 'none' : 'block' }}
              >
                {sidebar}
              </div>
              <div
                id="main-content"
                className="-mt-[6px] flex-1 overflow-y-auto px-4 pt-[6px]"
              >
                <div className="border-border mb-[10px] overflow-hidden rounded-lg border">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap">{children}</div>
                  </div>
                </div>
                {footerForm}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlLayout;

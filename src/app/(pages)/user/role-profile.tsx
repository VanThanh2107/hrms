'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const RoleProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef(null);

  const menuItems = [
    'Accounts',
    'HR',
    'Inventory',
    'Manufacturing',
    'Purchase',
    'Sales',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={componentRef} className="relative">
        <div className="w-full">
          <Input
            placeholder="Role Profile"
            className="w-full rounded-md border bg-gray-50 p-2 focus:border-transparent focus:ring-blue-500 focus:outline-none"
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (
          <Card className="animate-in fade-in absolute left-0 z-50 max-h-[300px] w-full overflow-y-scroll rounded-lg bg-white shadow-lg duration-200">
            <CardContent className="p-2">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer rounded-md px-3 py-1 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:bg-gray-50"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create a new Role Profile
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:bg-gray-50"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Advanced Search
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default RoleProfile;

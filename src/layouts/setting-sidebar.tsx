import React from 'react';
import { UserCirclePlus } from '@phosphor-icons/react';
import { Dot, Heart, MessageCircle, Paperclip, Plus } from 'lucide-react';

const menuList: { title: string; icon: React.ReactNode }[] = [
  {
    title: 'Assigned To',
    icon: <UserCirclePlus className="size-5" />,
  },
  {
    title: 'Attachments',
    icon: <Paperclip className="size-5" />,
  },
  {
    title: 'Share',
    icon: <UserCirclePlus className="size-5" />,
  },
];

const SettingSidebar = () => {
  return (
    <>
      <div className="w-52 space-y-4 px-4">
        <ul className="space-y-3">
          {menuList.map((menu, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="text-muted-foreground flex items-center gap-x-1">
                {menu.icon}
                <span>{menu.title}</span>
              </div>
              <button className="hover:bg-accent text-muted-foreground cursor-pointer rounded-full p-[5px]">
                <Plus className="size-4" />
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-3 p-3"></div>
        <ul className="flex items-center justify-between">
          <li>
            <div className="text-muted-foreground flex items-center gap-x-1">
              <div className="flex items-center gap-x-1">
                <button className="cursor-pointer">
                  <Heart className="size-4" />
                </button>
                <span className="font-medium">0</span>
              </div>
              <Dot className="size-3" />
              <div className="flex cursor-pointer items-center gap-x-1">
                <button className="cursor-pointer">
                  <MessageCircle className="size-4" />
                </button>
                <span className="font-medium hover:underline">0</span>
              </div>
            </div>
          </li>
          <li>
            <button className="cursor-pointer uppercase hover:underline">
              follow
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingSidebar;

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSelectionStore } from '@/store/useSelectionStore';
import { ChevronsUpDown, MoreHorizontal, Plus, RefreshCcw } from 'lucide-react';
import RoleProfile from './role-profile';

const menuList: { title: string }[] = [
  { title: 'Import' },
  { title: 'User Permissions' },
  { title: 'Role Permissions Manager' },
  { title: 'Customize' },
  { title: 'Toggle Sidebar' },
  { title: 'List Settings' },
];

const actions: { title: string }[] = [
  { title: 'Edit' },
  { title: 'Export' },
  { title: 'Print' },
  { title: 'Delete' },
];

const PageHeader = () => {
  const selectedItems = useSelectionStore((state) => state.selectedItems);

  const renderActionButton = () => {
    if (selectedItems.length > 0) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={'sm'}>
              <span>Actions</span>
              <ChevronsUpDown className="ml-2 size-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {actions.map((item, index) => (
              <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add User</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="top-2/5 p-0 sm:max-w-[575px]">
            <DialogHeader className="border-border border-b px-5 py-4">
              <DialogTitle>New user</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 px-5 py-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="after:text-destructive relative inline-block text-right after:whitespace-nowrap after:content-['_*']"
                >
                  Name
                </Label>
                <Input id="name" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="after:text-destructive relative inline-block text-right after:whitespace-nowrap after:content-['_*']"
                >
                  First Name
                </Label>
                <Input id="firstName" className="h-8 text-sm" />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="role"
                  className="after:text-destructive relative inline-block text-right after:whitespace-nowrap after:content-['_*']"
                >
                  Role profile
                </Label>
                <RoleProfile />
              </div>
            </div>
            <DialogFooter className="border-border !justify-between border-t px-5 py-4">
              <Button variant={'outline'} size={'sm'} className="capitalize">
                Edit full form
              </Button>
              <Button type="submit" size={'sm'}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Select defaultValue="list">
          <SelectTrigger className="h-8 w-40">
            <SelectValue placeholder="List View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="list">List View</SelectItem>
            <SelectItem value="grid">Grid View</SelectItem>
          </SelectContent>
        </Select>

        <Button type="button" variant="ghost" size="icon">
          <RefreshCcw className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuList.map((item, index) => (
              <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {renderActionButton()}
      </div>
    </>
  );
};

export default PageHeader;

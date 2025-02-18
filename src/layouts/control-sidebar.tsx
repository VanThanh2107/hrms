import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

const ControlSidebar = () => {
  return (
    <div className="w-52 space-y-4 p-4">
      <div className="text-sm font-medium text-gray-700">Filter By</div>

      <div className="space-y-3">
        <Select>
          <SelectTrigger className="w-full bg-gray-50">
            <SelectValue placeholder="Assigned To" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user1">User 1</SelectItem>
            <SelectItem value="user2">User 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-gray-50">
            <SelectValue placeholder="Created By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user1">User 1</SelectItem>
            <SelectItem value="user2">User 2</SelectItem>
          </SelectContent>
        </Select>

        <Button variant={'link'} className="p-0" size={'sm'}>
          Edit Filters
        </Button>

        <Select>
          <SelectTrigger className="w-full bg-gray-50">
            <SelectValue placeholder="Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tag1">Tag 1</SelectItem>
            <SelectItem value="tag2">Tag 2</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={'link'}
          className="w-full justify-start p-0"
          size={'sm'}
        >
          Show Tags
        </Button>

        <Button variant={'link'} className="p-0" size={'sm'}>
          Save Filter
        </Button>

        <Input placeholder="Filter Name" className="w-full bg-gray-50" />
      </div>
    </div>
  );
};

export default ControlSidebar;

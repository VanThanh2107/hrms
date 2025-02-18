import { Button } from '@/components/ui/button';
import { Ellipsis } from 'lucide-react';
import React from 'react';

const PageHeader = () => {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <Button variant={'outline'} size={'icon'} className="size-8">
          <Ellipsis className="size-5" />
        </Button>
        <Button size={'sm'}>Save</Button>
      </div>
    </>
  );
};

export default PageHeader;

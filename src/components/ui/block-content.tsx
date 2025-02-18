import { cn } from '@/lib/utils';
import React from 'react';

function BlockItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative w-full max-w-full flex-[0_0_100%] pr-0 pl-0',
        className,
      )}
      {...props}
    />
  );
}

function BlockContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative mx-auto h-full max-w-full p-2 transition-[background-color] duration-150 ease-linear',
        className,
      )}
      {...props}
    />
  );
}

export { BlockItem, BlockContent };

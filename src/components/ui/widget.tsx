import { cn } from '@/lib/utils';

function WidgetBox({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-card flex h-full min-h-[1px] cursor-pointer flex-col items-start rounded-xl p-[2px_7px]',
        className,
      )}
      {...props}
    />
  );
}

function WidgetHead({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    />
  );
}

function WidgetTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-muted-foreground flex items-center text-sm font-medium',
        className,
      )}
      {...props}
    />
  );
}

function WidgetControl({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex items-center', className)} {...props} />;
}

function WidgetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'w-full *:-ml-1 *:flex *:items-center *:rounded-lg *:p-1 *:text-sm *:font-normal',
        className,
      )}
      {...props}
    />
  );
}

function WidgetSpacer({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-background flex min-h-[1px] flex-col rounded-lg p-1.5',
        className,
      )}
      {...props}
    />
  );
}

export {
  WidgetBox,
  WidgetHead,
  WidgetTitle,
  WidgetControl,
  WidgetBody,
  WidgetSpacer,
};

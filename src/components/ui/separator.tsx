import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    variant?: 'dark' | 'light';
  }
>(
  (
    { className, variant = 'dark', orientation = 'horizontal', ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      {...props}
      ref={ref}
      orientation={orientation}
      className={cn(
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        variant === 'dark' ? 'bg-primary-gray-500' : 'bg-primary-gray-200',
        className,
      )}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

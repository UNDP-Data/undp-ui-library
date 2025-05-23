import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    {...props}
    ref={ref}
    className={cn(
      'text-sm m-0 p-0 block text-primary-gray-700 dark:text-primary-white peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className,
    )}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

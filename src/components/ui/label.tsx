import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    {...props}
    ref={ref}
    className={cn(
      '!text-sm text-primary-gray-700 dark:text-primary-white peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className,
    )}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full min-h-[60px] text-normal text-base bg-primary-white dark:bg-primary-gray-700 text-primary-black dark:text-primary-white bg-transparent p-2.5 text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground dark:file:text-primary-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        light:
          'border border-primary-gray-400 dark:border-primary-gray-200 placeholder:text-primary-gray-400 dark:placeholder:text-primary-gray-550',
        normal:
          'border-2 border-primary-black dark:border-primary-gray-100 placeholder:text-muted-foreground dark:placeholder:text-primary-gray-550',
      },
    },
    defaultVariants: {
      variant: 'normal',
    },
  },
);
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    VariantProps<typeof inputVariants>
>(({ className, variant, placeholder, ...props }, ref) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder || 'Text here...'}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };

import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full h-auto bg-primary-white dark:bg-primary-gray-650 text-primary-black dark:text-primary-white text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-primary-gray-700 dark:file:text-primary-white focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-primary-gray-550 dark:placeholder:text-primary-gray-400',
  {
    variants: {
      variant: {
        light: 'border border-primary-gray-400 dark:border-primary-gray-500',
        normal: 'border-2 border-primary-black dark:border-primary-gray-300',
      },
      inputSize: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5',
      },
    },
    defaultVariants: {
      inputSize: 'base',
      variant: 'normal',
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>
>(({ className, inputSize, variant, ...props }, ref) => {
  return (
    <input {...props} ref={ref} className={cn(inputVariants({ inputSize, variant }), className)} />
  );
});
Input.displayName = 'Input';

export { Input };

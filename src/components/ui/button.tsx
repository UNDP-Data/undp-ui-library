import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'undp-button m-0! tracking-[0.48px] inline-flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-none text-lg font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-dark-red text-primary-white button-arrow black-arrow hover:bg-accent-red',
        'primary-without-icon': 'bg-accent-dark-red text-primary-white hover:bg-accent-red',
        secondary:
          'bg-primary-blue-600 text-primary-white button-arrow white-arrow hover:bg-primary-blue-400',
        'secondary-without-icon':
          'bg-primary-blue-600 text-primary-white hover:bg-primary-blue-400',
        tertiary:
          'bg-primary-gray-300 text-primary-gray-700 dark:bg-primary-gray-600 dark:text-primary-white red-arrow hover:bg-primary-gray-400 dark:hover:bg-primary-gray-550',
        link: 'text-primary-gray-700 dark:text-primary-white red-arrow button-arrow',
        'link-without-icon':
          'text-primary-gray-700 dark:text-primary-white dark:hover:text-primary-gray-500 hover:text-primary-gray-500',
        outline:
          'bg-transparent text-primary-black dark:text-primary-white border-2 border-primary-gray-700 dark:border-primary-gray-100 dark:hover:bg-primary-gray-550 hover:bg-primary-gray-300',
        icon: 'bg-transparent dark:text-primary-gray-100 text-primary-gray-700 dark:hover:text-primary-gray-500 hover:text-primary-gray-500',
      },
      size: {
        base: 'leading-none text-base!',
        xs: 'leading-none text-xs!',
        sm: 'leading-none text-sm!',
        xl: 'leading-none text-xl!',
      },
      padding: {
        base: 'py-4 px-6',
        sm: 'px-4 py-2',
        none: 'py-0 px-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      padding: 'base',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, padding, ...props }, ref) => {
    const Comp = 'button';
    return (
      <Comp
        {...props}
        className={cn(buttonVariants({ variant, size, padding }), className)}
        ref={ref}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };

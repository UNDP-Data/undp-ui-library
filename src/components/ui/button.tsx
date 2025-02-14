import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'undp-button inline-flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-none text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-dark-red text-primary-white button-arrow black-arrow hover:bg-accent-red',
        'primary-without-icon':
          'bg-accent-dark-red text-primary-white hover:bg-accent-red',
        secondary:
          'bg-primary-blue-600 text-primary-white button-arrow white-arrow hover:bg-primary-blue-400',
        'secondary-without-icon':
          'bg-primary-blue-600 text-primary-white hover:bg-primary-blue-400',
        tertiary:
          'bg-primary-gray-300 text-primary red-arrow hover:bg-primary-gray-400',
        'tertiary-without-icon':
          'bg-primary-gray-300 text-primary hover:bg-primary-gray-400',
        link: 'text-primary red-arrow button-arrow hover:bg-accent-red',
        'link-without-icon': 'text-primary hover:bg-accent-red',
        outline: 'bg-transparent text-primary border border-primary-gray-300',
        icon: 'bg-transparent',
      },
      size: {
        default: 'text-base',
        xs: 'text-xs',
        sm: 'text-sm',
        xl: 'text-xl',
      },
      padding: {
        default: 'py-4 px-6',
        sm: 'px-4 py-2',
        none: 'py-0 px-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      padding: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
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

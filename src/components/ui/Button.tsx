import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer transform active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-medium hover:shadow-colored-primary hover:-translate-y-0.5",
        secondary:
          "bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 shadow-medium hover:shadow-colored-secondary hover:-translate-y-0.5",
        accent:
          "bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 shadow-medium hover:shadow-colored-accent hover:-translate-y-0.5",
        sunset:
          "bg-gradient-to-r from-sunset-500 to-sunset-600 text-white hover:from-sunset-600 hover:to-sunset-700 shadow-medium hover:shadow-large hover:-translate-y-0.5",
        outline:
          "border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 hover:border-primary-700 hover:shadow-medium",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-soft",
        link:
          "text-primary-600 underline-offset-4 hover:underline hover:text-primary-700",
        white:
          "bg-white text-primary-700 hover:bg-gray-50 shadow-medium hover:shadow-large hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

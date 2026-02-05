import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "accent";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 border-primary-200 shadow-soft",
      secondary: "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border-gray-200 shadow-soft",
      success: "bg-gradient-to-r from-green-100 to-green-50 text-green-700 border-green-200 shadow-soft",
      warning: "bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 border-yellow-200 shadow-soft",
      destructive: "bg-gradient-to-r from-red-100 to-red-50 text-red-700 border-red-200 shadow-soft",
      accent: "bg-gradient-to-r from-accent-100 to-accent-50 text-accent-700 border-accent-200 shadow-soft",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 hover:shadow-medium hover:scale-105",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };

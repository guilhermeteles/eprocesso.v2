import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useColorContext } from "@/context/ColorContext";

// Define button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        darkBlue: "", // Dynamically updated later
        lightBlue: "", // Dynamically updated later
        darkestBlue: ""
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        navIcon: "h-8 w-8",
        empty: "",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const { headerColor,headerColorDarker, headerColorDarkest } = useColorContext();

    // Dynamically generate additional classes for darkBlue and lightBlue
    const dynamicClasses =
      variant === "darkBlue"
        ? `bg-[${headerColorDarkest}] text-[#D4E5FF] hover:bg-[${headerColor}] hover:text-white`
        : variant === "lightBlue"
        ? `bg-[${headerColor}] text-[#D4E5FF] hover:bg-[${headerColor}75] hover:text-white`
        : variant === "darkestBlue"
        ? `bg-[${headerColorDarker}] text-[#D4E5FF] hover:bg-[#fff] hover:text-[#000]`
        : "";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), dynamicClasses)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-white shadow-card hover:bg-forest-700 hover:-translate-y-0.5",
        gold: "bg-gold text-ink shadow-card hover:bg-gold-400 hover:-translate-y-0.5",
        outline:
          "border border-ink/15 text-ink hover:border-forest hover:text-forest",
        outlineLight:
          "border border-white/40 text-white hover:border-white hover:bg-white/10",
        ghost: "text-ink/70 hover:text-forest",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-[52px] px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };

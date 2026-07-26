import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        forest: "bg-forest/10 text-forest",
        gold: "bg-gold/15 text-gold-700",
        crimson: "bg-crimson/10 text-crimson",
        dark: "bg-white/10 text-white",
        outline: "border border-ink/15 text-ink/60",
      },
    },
    defaultVariants: { variant: "forest" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

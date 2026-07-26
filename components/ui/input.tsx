import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

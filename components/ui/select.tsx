import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "h-12 w-full appearance-none rounded-xl border border-ink/10 bg-white px-4 pr-10 text-sm text-ink transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown
      size={16}
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/40"
    />
  </div>
));
Select.displayName = "Select";

export { Select };

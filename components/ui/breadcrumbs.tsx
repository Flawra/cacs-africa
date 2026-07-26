import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { label: string; href?: string }[];
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] ${
          dark ? "text-white/40" : "text-ink/40"
        }`}
      >
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} />}
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${
                  dark ? "hover:text-white" : "hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-white/70" : "text-ink/70"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

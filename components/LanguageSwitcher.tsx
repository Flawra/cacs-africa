"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const otherLocale = locale === "fr" ? "en" : "fr";

  const switchLocale = () => {
    router.replace(
      // @ts-expect-error -- dynamic route params passthrough is fine here
      { pathname, params },
      { locale: otherLocale }
    );
  };

  return (
    <button
      onClick={switchLocale}
      aria-label="Switch language"
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
        dark
          ? "text-white/80 hover:bg-white/10"
          : "text-ink/70 hover:bg-ink/5"
      }`}
    >
      <Globe size={14} />
      {otherLocale}
    </button>
  );
}

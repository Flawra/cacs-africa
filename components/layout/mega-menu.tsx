"use client";

import * as Icons from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-utils";
import { ArrowRight } from "lucide-react";

export function ServicesMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const locale = useLocale();
  const t = useTranslations("servicesSection");

  return (
    <div className="grid grid-cols-2 gap-1 p-3">
      {services.map((service) => {
        const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            onClick={onNavigate}
            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-forest/5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
              <Icon size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{pick(service.title, locale)}</p>
              <p className="mt-0.5 text-xs text-ink/50 line-clamp-1">
                {pick(service.shortDesc, locale)}
              </p>
            </div>
          </Link>
        );
      })}
      <Link
        href="/services"
        onClick={onNavigate}
        className="col-span-2 mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-ivory py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest/10"
      >
        {t("viewAll")} <ArrowRight size={15} />
      </Link>
    </div>
  );
}

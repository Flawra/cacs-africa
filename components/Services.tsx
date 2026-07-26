"use client";

import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-utils";

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("servicesSection");

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-cacs">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              {t("description")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-ink/5 bg-ivory p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-card"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/10" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="relative mt-6 font-display text-lg font-semibold text-ink">
                    {pick(service.title, locale)}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink/60">
                    {pick(service.shortDesc, locale)}
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {t("viewAll")} <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-700"
            >
              {t("viewAll")} <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

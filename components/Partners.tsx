"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import { partners } from "@/data/partners";
import { members } from "@/data/members";

export default function Partners() {
  const t = useTranslations("partnersSection");
  // Blend institutional partners and real member companies for the marquee.
  const names = [...partners.map((p) => p.name), ...members.map((m) => m.company)];
  const looped = [...names, ...names];

  return (
    <section className="overflow-hidden bg-ivory py-20 md:py-24">
      <div className="container-cacs mb-12 text-center">
        <Reveal>
          <span className="eyebrow justify-center">{t("eyebrow")}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            {t("title")}
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ivory to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {looped.map((name, i) => (
            <Link
              key={`${name}-${i}`}
              href="/partners"
              className="flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl bg-white px-6 text-center text-sm font-semibold text-ink/50 shadow-sm ring-1 ring-ink/5 transition-colors hover:text-forest"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <Link
            href="/partners"
            className="text-sm font-semibold text-forest hover:text-forest-700"
          >
            {t("viewAll")} →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

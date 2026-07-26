"use client";

import { useTranslations } from "next-intl";
import { Landmark, TrendingUp, Globe2, CalendarCheck } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Stats() {
  const t = useTranslations("stats");

  const STATS = [
    { icon: Landmark, value: 24, suffix: "+", label: t("diplomatic") },
    { icon: TrendingUp, value: 7, suffix: "+", label: t("investment") },
    { icon: Globe2, value: 5, suffix: "", label: t("antennas") },
    { icon: CalendarCheck, value: 2021, suffix: "", label: t("founded") },
  ];

  return (
    <section id="stats" className="relative bg-ink py-20 md:py-24">
      <div className="container-cacs">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-gold">
                <stat.icon size={26} strokeWidth={1.75} />
              </div>
              <div className="font-display text-3xl font-bold text-white md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/50 md:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

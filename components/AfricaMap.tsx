"use client";

import { useTranslations } from "next-intl";
import { MapPin, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function AfricaMap() {
  const t = useTranslations("africaMap");
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:26px_26px]" />

      <div className="container-cacs relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow text-gold-400">{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              {t("title")}
              <span className="text-gold"> {t("titleHighlight")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
              {t("description")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white/70">
              <Sparkles size={15} className="text-gold" />
              {t("badge")}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="crescent-glow absolute inset-0 rounded-full animate-pulse-slow" />
            <div className="absolute inset-6 rounded-full border border-dashed border-white/15" />
            <div className="relative flex h-4/5 w-4/5 flex-col items-center justify-center gap-3 rounded-full bg-white/[0.03] backdrop-blur-sm">
              <MapPin size={38} strokeWidth={1.5} className="text-gold" />
              <p className="text-center text-sm font-medium text-white/50">
                Interactive Africa Map
                <br /> Placeholder
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

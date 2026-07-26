"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

export default function About() {
  const t = useTranslations("about");
  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="container-cacs grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="crescent-glow absolute -inset-4 rounded-[2.5rem] opacity-80" />
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-900 via-forest to-forest-700 shadow-2xl">
              <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:22px_22px]" />
              <Image
                src="/logo-transparent.png"
                alt="CACS Africa emblem"
                width={220}
                height={220}
                className="relative h-40 w-40 object-contain drop-shadow-2xl md:h-52 md:w-52"
              />
              <p className="relative mt-6 max-w-[220px] text-center font-display text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Dakhla, Maroc
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              {t("title")}
              <span className="text-forest"> {t("titleHighlight")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              {t("description")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-gold"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-700"
            >
              {t("cta")}
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

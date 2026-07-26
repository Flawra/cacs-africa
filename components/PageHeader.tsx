"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: string;
}) {
  const t = useTranslations("pageHeader");
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 md:pb-24 md:pt-48">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:26px_26px]" />
      <div className="crescent-glow pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-25" />

      <div className="container-cacs relative text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {t("home")} / {breadcrumb}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow mt-5 justify-center text-gold-400">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.25}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

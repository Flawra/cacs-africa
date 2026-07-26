"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

export default function CTA() {
  const t = useTranslations("cta");
  return (
    <section className="relative overflow-hidden bg-forest py-24 md:py-28">
      <div className="crescent-glow pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-30" />
      <div className="crescent-glow pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-20" />

      <div className="container-cacs relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            {t("description")}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-gold-400"
            >
              {t("join")} <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t("contact")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

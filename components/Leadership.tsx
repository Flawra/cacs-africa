"use client";

import { useLocale } from "next-intl";
import Reveal from "./Reveal";
import { boardMembers, commissionChairs } from "@/data/leadership";
import { pick } from "@/lib/i18n-utils";

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function Leadership() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-cacs">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">{isEn ? "Leadership" : "Gouvernance"}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {isEn ? "Board of Directors" : "Bureau Directeur"}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boardMembers.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 0.06}>
              <div className="rounded-3xl bg-ivory p-8 text-center shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-700 font-display text-xl font-bold text-white">
                  {initials(leader.name)}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm text-ink/55">{pick(leader.role, locale)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-ink">
              {isEn ? "Commission Chairs" : "Présidents de Commissions"}
            </h3>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commissionChairs.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-2xl bg-ivory p-5 ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 font-display text-sm font-bold text-forest">
                  {initials(leader.name)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{leader.name}</p>
                  <p className="text-xs text-ink/55">{pick(leader.role, locale)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

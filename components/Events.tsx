"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import { events } from "@/data/events";
import { pick } from "@/lib/i18n-utils";

const MONTHS_FR = ["JAN","FÉV","MAR","AVR","MAI","JUIN","JUIL","AOÛT","SEP","OCT","NOV","DÉC"];
const MONTHS_EN = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function formatDateParts(iso: string, locale: string) {
  const d = new Date(iso);
  const months = locale === "en" ? MONTHS_EN : MONTHS_FR;
  return { month: months[d.getUTCMonth()], day: String(d.getUTCDate()).padStart(2, "0") };
}

export default function Events() {
  const locale = useLocale();
  const t = useTranslations("eventsSection");
  const recent = [...events].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-cacs">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">{t("eyebrow")}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-700"
            >
              {t("viewAll")} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {recent.map((event, i) => {
            const { month, day } = formatDateParts(event.date, locale);
            return (
              <Reveal key={event.slug} delay={i * 0.1}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="relative h-40 bg-gradient-to-br from-forest via-forest-700 to-ink">
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:18px_18px]" />
                    <span className="absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                      {event.category}
                    </span>
                    <div className="absolute bottom-4 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white shadow-lg">
                      <span className="text-[10px] font-bold uppercase text-crimson">
                        {month}
                      </span>
                      <span className="font-display text-lg font-bold leading-none text-ink">
                        {day}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {pick(event.title, locale)}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-ink/55">
                      <MapPin size={15} />
                      {event.city}, {event.country}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {t("viewAll")} <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, ArrowRight, CalendarX2 } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Reveal from "@/components/Reveal";
import { events } from "@/data/events";
import { pick } from "@/lib/i18n-utils";

const MONTHS_FR = ["JAN","FÉV","MAR","AVR","MAI","JUIN","JUIL","AOÛT","SEP","OCT","NOV","DÉC"];
const MONTHS_EN = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
function formatDateParts(iso: string, locale: string) {
  const d = new Date(iso);
  const months = locale === "en" ? MONTHS_EN : MONTHS_FR;
  return { month: months[d.getUTCMonth()], day: String(d.getUTCDate()).padStart(2, "0") };
}

const countries = Array.from(new Set(events.map((e) => e.country))).sort();
const categories = Array.from(new Set(events.map((e) => e.category))).sort();

export default function EventsExplorer() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const sorted = useMemo(
    () => [...events].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );

  const filtered = useMemo(() => {
    return sorted.filter((e) => {
      if (query && !pick(e.title, locale).toLowerCase().includes(query.toLowerCase())) return false;
      if (country && e.country !== country) return false;
      if (category && e.category !== category) return false;
      return true;
    });
  }, [sorted, query, country, category, locale]);

  return (
    <div>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-ink/50">
        {isEn
          ? "The chamber publishes a running history of its activities rather than a fixed forward calendar. New editions of Africa Business Days and Africa Executive Meetings are announced on our channels closer to the date."
          : "La chambre publie un historique continu de ses activités plutôt qu'un calendrier figé. Les nouvelles éditions des Africa Business Days et Africa Executive Meetings sont annoncées sur nos canaux à l'approche de la date."}
      </p>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[560px]">
          <div className="relative sm:col-span-1">
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" />
            <Input
              placeholder={isEn ? "Search events" : "Rechercher"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              aria-label="Search events"
            />
          </div>
          <Select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Filter by country">
            <option value="">{isEn ? "All Countries" : "Tous les pays"}</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
            <option value="">{isEn ? "All Categories" : "Toutes catégories"}</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center py-16 text-center">
          <CalendarX2 size={40} className="text-ink/20" strokeWidth={1.5} />
          <p className="mt-4 text-sm text-ink/50">
            {isEn ? "No events match your filters." : "Aucun évènement ne correspond à vos filtres."}
          </p>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, i) => {
            const { month, day } = formatDateParts(event.date, locale);
            return (
              <Reveal key={event.slug} delay={Math.min(i, 6) * 0.06}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="relative h-36 bg-gradient-to-br from-forest via-forest-700 to-ink">
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:18px_18px]" />
                    <span className="absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                      {event.category}
                    </span>
                    <div className="absolute bottom-4 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white shadow-lg">
                      <span className="text-[10px] font-bold uppercase text-crimson">{month}</span>
                      <span className="font-display text-lg font-bold leading-none text-ink">{day}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {pick(event.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/55 line-clamp-2">
                      {pick(event.excerpt, locale)}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-ink/50">
                      <MapPin size={14} />
                      {event.city}, {event.country}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {isEn ? "View details" : "Voir les détails"} <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}

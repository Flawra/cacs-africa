"use client";

import { useMemo, useState } from "react";
import { Search, Building2, ArrowRight, UserX2 } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Reveal from "@/components/Reveal";
import { members } from "@/data/members";
import { pick } from "@/lib/i18n-utils";

export default function MembersExplorer() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("");

  const sectors = useMemo(
    () => Array.from(new Set(members.map((m) => pick(m.sector, locale)))).sort(),
    [locale]
  );

  const filtered = useMemo(() => {
    return members.filter((m) => {
      if (query && !m.company.toLowerCase().includes(query.toLowerCase())) return false;
      if (sector && pick(m.sector, locale) !== sector) return false;
      return true;
    });
  }, [query, sector, locale]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" />
          <Input
            placeholder={isEn ? "Search members" : "Rechercher un adhérent"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search members"
          />
        </div>
        <Select value={sector} onChange={(e) => setSector(e.target.value)} aria-label="Filter by sector">
          <option value="">{isEn ? "All Sectors" : "Tous les secteurs"}</option>
          {sectors.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>
      </div>

      <p className="mt-6 text-sm text-ink/45">
        {filtered.length} {isEn ? "members found" : "adhérents trouvés"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center py-16 text-center">
          <UserX2 size={40} className="text-ink/20" strokeWidth={1.5} />
          <p className="mt-4 text-sm text-ink/50">
            {isEn ? "No members match your filters." : "Aucun adhérent ne correspond à vos filtres."}
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((member, i) => (
            <Reveal key={member.slug} delay={Math.min(i, 6) * 0.06}>
              <Link
                href={`/members/${member.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-700 font-display text-lg font-bold text-white">
                  <Building2 size={22} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {member.company}
                </h3>
                <p className="mt-2 text-sm text-ink/55">{pick(member.sector, locale)}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {isEn ? "View profile" : "Voir la fiche"} <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

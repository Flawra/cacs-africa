"use client";

import { useMemo, useState } from "react";
import { Search, ArrowRight, FileX2, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/news";
import { pick } from "@/lib/i18n-utils";

const PAGE_SIZE = 4;

export default function NewsExplorer() {
  const locale = useLocale();
  const isEn = locale === "en";
  const categories = useMemo(
    () => [isEn ? "All" : "Tout", ...Array.from(new Set(articles.map((a) => a.category)))],
    [isEn]
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (category !== categories[0] && a.category !== category) return false;
      if (query && !pick(a.title, locale).toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, category, categories, locale]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateCategory = (c: string) => { setCategory(c); setPage(1); };
  const updateQuery = (q: string) => { setQuery(q); setPage(1); };

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => updateCategory(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                category === c ? "bg-forest text-white" : "bg-ivory text-ink/60 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative lg:w-72">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" />
          <Input
            placeholder={isEn ? "Search articles" : "Rechercher un article"}
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            className="pl-10"
            aria-label="Search articles"
          />
        </div>
      </div>

      {paginated.length === 0 ? (
        <div className="mt-16 flex flex-col items-center py-16 text-center">
          <FileX2 size={40} className="text-ink/20" strokeWidth={1.5} />
          <p className="mt-4 text-sm text-ink/50">
            {isEn ? "No articles match your search." : "Aucun article ne correspond à votre recherche."}
          </p>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {paginated.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <Link
                href={`/news/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="relative h-40 bg-gradient-to-br from-ink via-forest-900 to-forest">
                  <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:18px_18px]" />
                  <Badge variant="gold" className="absolute left-5 top-5">
                    {article.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {pick(article.title, locale)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55 line-clamp-2">
                    {pick(article.excerpt, locale)}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink/45">
                    <span>{article.readTime}</span>
                    <ArrowRight size={15} className="text-forest opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-forest hover:text-forest disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-label={`Page ${p}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                page === p ? "bg-forest text-white" : "text-ink/60 hover:bg-ivory"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-forest hover:text-forest disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

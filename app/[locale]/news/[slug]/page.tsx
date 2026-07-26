import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/news";
import { pick } from "@/lib/i18n-utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: pick(article.title, locale), description: pick(article.excerpt, locale) };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const locale = await getLocale();
  const isEn = locale === "en";
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  const dateLabel = new Date(article.date).toLocaleDateString(isEn ? "en-US" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={article.category}
        title={pick(article.title, locale)}
        breadcrumb={pick(article.title, locale)}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-5 text-sm text-ink/50">
              <span className="flex items-center gap-2">
                <Calendar size={15} /> {dateLabel}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} /> {article.readTime}
              </span>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {article.content.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="container-cacs mt-24 max-w-5xl">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">
                {isEn ? `More in ${article.category}` : `Plus dans ${article.category}`}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={0.06 * i}>
                  <Link
                    href={`/news/${a.slug}`}
                    className="group block rounded-2xl bg-ivory p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <Badge variant="forest">{a.category}</Badge>
                    <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                      {pick(a.title, locale)}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-forest opacity-0 transition-opacity group-hover:opacity-100">
                      {isEn ? "Read article" : "Lire l'article"} <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

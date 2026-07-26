import { notFound } from "next/navigation";
import { Calendar, MapPin, Tag } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";
import { pick } from "@/lib/i18n-utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return { title: pick(event.title, locale), description: pick(event.excerpt, locale) };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const locale = await getLocale();
  const isEn = locale === "en";

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  const dateLabel = new Date(event.date).toLocaleDateString(isEn ? "en-US" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={event.category}
        title={pick(event.title, locale)}
        description={pick(event.excerpt, locale)}
        breadcrumb={pick(event.title, locale)}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            {pick(event.description, locale)
              .split(/\n+/)
              .map((para, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-ink/70">{para}</p>
                </Reveal>
              ))}
          </div>

          <aside className="lg:col-span-1">
            <Reveal>
              <div className="sticky top-28 rounded-3xl border border-ink/5 bg-ivory p-8">
                <Badge variant="forest">{event.category}</Badge>
                <ul className="mt-6 space-y-4 text-sm text-ink/70">
                  <li className="flex items-center gap-3">
                    <Calendar size={17} className="shrink-0 text-forest" />
                    {dateLabel}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin size={17} className="shrink-0 text-forest" />
                    {event.city}, {event.country}
                  </li>
                  <li className="flex items-center gap-3">
                    <Tag size={17} className="shrink-0 text-forest" />
                    {event.category}
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">
                {isEn ? "More Activities" : "Autres Activités"}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((e, i) => (
                <Reveal key={e.slug} delay={0.06 * i}>
                  <Link
                    href={`/events/${e.slug}`}
                    className="block rounded-2xl bg-ivory p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                      {e.category}
                    </p>
                    <h3 className="mt-2 font-display text-sm font-semibold text-ink">
                      {pick(e.title, locale)}
                    </h3>
                    <p className="mt-2 text-xs text-ink/50">{e.city}, {e.country}</p>
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

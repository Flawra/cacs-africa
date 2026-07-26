import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: pick(service.title, locale),
    description: pick(service.shortDesc, locale),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const locale = await getLocale();
  const t = await getTranslations("common");
  const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={locale === "en" ? "Service" : "Service"}
        title={pick(service.title, locale)}
        description={pick(service.shortDesc, locale)}
        breadcrumb={pick(service.title, locale)}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <Icon size={30} strokeWidth={1.75} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink/70">
                {pick(service.description, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                {locale === "en" ? "Key Benefits" : "Points Clés"}
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <div className="flex items-start gap-3 rounded-2xl bg-ivory p-5">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-gold"
                      strokeWidth={1.75}
                    />
                    <span className="text-sm leading-relaxed text-ink/75">
                      {pick(benefit, locale)}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <Reveal>
              <div className="sticky top-28 rounded-3xl bg-forest p-8 text-white shadow-card">
                <h3 className="font-display text-lg font-bold">
                  {locale === "en" ? "Ready to get started?" : "Prêt à démarrer ?"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {locale === "en"
                    ? `Join CACS Africa to access ${pick(service.title, locale).toLowerCase()} and every other member service.`
                    : `Rejoignez la CACS pour accéder à ce service et à l'ensemble de nos services adhérents.`}
                </p>
                <Link
                  href="/join-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  {t("learnMore")} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-3xl border border-ink/5 bg-ivory p-8">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
                  {locale === "en" ? "Other Services" : "Autres Services"}
                </h3>
                <ul className="mt-5 space-y-4">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-medium text-ink/75 transition-colors hover:text-forest"
                      >
                        {pick(s.title, locale)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

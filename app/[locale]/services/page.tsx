import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-utils";

export async function generateMetadata() {
  const t = await getTranslations("servicesSection");
  return { title: t("title") };
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = await getTranslations("servicesSection");
  const tHeader = await getTranslations("pageHeader");

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumb={t("title")}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="container-cacs grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-ivory p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-card"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/10" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h2 className="relative mt-6 font-display text-lg font-semibold text-ink">
                    {pick(service.title, locale)}
                  </h2>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {pick(service.shortDesc, locale)}
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    {t("viewAll")} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

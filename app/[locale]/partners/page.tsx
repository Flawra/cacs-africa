import { Building2 } from "lucide-react";
import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { partners } from "@/data/partners";
import { pick } from "@/lib/i18n-utils";

export async function generateMetadata() {
  return { title: "Partners" };
}

export default async function PartnersPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={isEn ? "Our Network" : "Notre Réseau"}
        title={isEn ? "Institutional Partners" : "Partenaires Institutionnels"}
        description={
          isEn
            ? "CACS Africa works alongside chambers of commerce, regional blocs and institutions through signed conventions and MOUs."
            : "La CACS travaille aux côtés de chambres de commerce, blocs régionaux et institutions à travers des conventions et MOU signés."
        }
        breadcrumb={isEn ? "Partners" : "Partenaires"}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <Reveal key={partner.slug} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-ink/5 bg-ivory p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <Building2 size={22} strokeWidth={1.75} />
                  </div>
                  <Badge variant="gold">{partner.category}</Badge>
                </div>
                <h2 className="mt-5 font-display text-base font-semibold text-ink">
                  {partner.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {pick(partner.description, locale)}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/35">
                  {isEn ? "Partner since" : "Partenaire depuis"} {partner.since}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

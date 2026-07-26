import { notFound } from "next/navigation";
import { Building2, Briefcase, Globe } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { members } from "@/data/members";
import { pick } from "@/lib/i18n-utils";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) return {};
  return { title: `${member.company} | CACS Africa` };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) notFound();

  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={pick(member.sector, locale)}
        title={member.company}
        breadcrumb={member.company}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Reveal>
              <div className="rounded-3xl bg-ivory p-8 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-700 text-white">
                  <Building2 size={32} />
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">{member.company}</h2>
                <div className="mt-4 flex justify-center">
                  <Badge variant="forest">{pick(member.sector, locale)}</Badge>
                </div>
                <ul className="mt-7 space-y-4 text-left text-sm text-ink/70">
                  <li className="flex items-center gap-3">
                    <Briefcase size={16} className="shrink-0 text-forest" /> {pick(member.sector, locale)}
                  </li>
                  {member.website && (
                    <li className="flex items-center gap-3">
                      <Globe size={16} className="shrink-0 text-forest" />
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate hover:text-forest hover:underline"
                      >
                        {member.website.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  )}
                </ul>
                {member.website && (
                  <a href={member.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-7 w-full">
                      {isEn ? "Visit Website" : "Visiter le site"}
                    </Button>
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
                <Building2 size={22} className="text-forest" /> {member.company}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {isEn
                  ? `${member.company} is a member of the CACS Africa network, operating in the ${pick(member.sector, locale).toLowerCase()} sector.`
                  : `${member.company} est adhérent du réseau CACS Africa, actif dans le secteur ${pick(member.sector, locale).toLowerCase()}.`}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl bg-forest p-8 text-white">
                <h3 className="font-display text-lg font-bold">
                  {isEn ? `Interested in connecting with ${member.company}?` : `Envie d'échanger avec ${member.company} ?`}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {isEn
                    ? "Reach our team for a facilitated introduction to this member."
                    : "Contactez notre équipe pour une mise en relation facilitée avec cet adhérent."}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  {isEn ? "Request Introduction" : "Demander une mise en relation"}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

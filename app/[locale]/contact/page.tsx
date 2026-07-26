import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

export async function generateMetadata() {
  return { title: "Contact" };
}

const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/CACS.Africa/", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/Cacs_Africa", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/cacsafrica/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/cacs.africa/", label: "Instagram" },
];

export default async function ContactPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={isEn ? "Get In Touch" : "Nous Contacter"}
        title={isEn ? "Contact CACS Africa" : "Contactez la CACS"}
        description={
          isEn
            ? "Questions about membership, partnerships or events? Our team in Dakhla is ready to help."
            : "Des questions sur l'adhésion, les partenariats ou nos évènements ? Notre équipe à Dakhla est à votre écoute."
        }
        breadcrumb="Contact"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-ink/5 bg-ivory p-8 md:p-10">
              <h2 className="font-display text-xl font-bold text-ink">
                {isEn ? "Send Us a Message" : "Envoyez-nous un message"}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-forest p-8 text-white">
                <h3 className="font-display text-lg font-bold">
                  {isEn ? "Contact Information" : "Coordonnées"}
                </h3>
                <ul className="mt-6 space-y-5 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                    Av Mohamed Fadel Semlali, Hay Rahma, Dakhla — Maroc
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0 text-gold" />
                    +212 663-632455
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="shrink-0 text-gold" />
                    cacsafrica.dakhla@gmail.com
                  </li>
                </ul>
                <div className="mt-8 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-ink"
                    >
                      <s.icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-3xl ring-1 ring-ink/5">
                <iframe
                  title="CACS Africa location map"
                  src="https://www.google.com/maps?q=Dakhla,Morocco&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-cacs">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow justify-center">FAQ</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                {isEn ? "Frequently Asked Questions" : "Questions Fréquentes"}
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

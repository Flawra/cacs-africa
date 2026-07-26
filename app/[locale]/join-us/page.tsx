import type { Metadata } from "next";
import {
  Globe2,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Users2,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Us | CACS Africa",
  description:
    "Become a CACS Africa member — access trade facilitation, investment networks, advocacy and a continent-wide business community.",
};

const BENEFITS = [
  { icon: Globe2, title: "Continental Reach", desc: "Instant access to a network spanning 42+ African countries." },
  { icon: Handshake, title: "Trade Facilitation", desc: "Direct introductions to verified buyers, suppliers and partners." },
  { icon: TrendingUp, title: "Investment Access", desc: "Curated introductions to investors and development finance." },
  { icon: ShieldCheck, title: "Policy Advocacy", desc: "A voice in continental and regional trade policymaking." },
  { icon: Users2, title: "Business Networking", desc: "Priority access to summits, forums and matchmaking events." },
  { icon: GraduationCap, title: "Capacity Building", desc: "Training, certification and mentorship programs." },
];

export default function JoinUsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow="Membership"
        title="Join CACS Africa"
        description="Become part of the network shaping the future of African trade and commerce."
        breadcrumb="Join Us"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow justify-center">Why Join</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                Membership Benefits
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-ivory p-7 shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <b.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container-cacs grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="eyebrow">Apply Now</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                Ready to Join?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                Fill out the application form and our membership team will
                follow up within 5 business days to discuss the best
                membership tier for your organisation.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <JoinForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

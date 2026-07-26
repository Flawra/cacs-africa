"use client";

import { useLocale } from "next-intl";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    year: "2021",
    fr: { title: "Création de la CACS", desc: "Fondation de la Chambre Africaine de Commerce et de Services à Dakhla." },
    en: { title: "CACS Founded", desc: "The African Chamber of Commerce and Services is founded in Dakhla." },
  },
  {
    year: "2021",
    fr: { title: "Convention CFCIM", desc: "Signature d'une convention de partenariat avec la CFCIM." },
    en: { title: "CFCIM Agreement", desc: "Partnership agreement signed with the CFCIM." },
  },
  {
    year: "2023",
    fr: { title: "3ème édition Africa Business Days", desc: "Organisée à Dakhla avec le Tchad comme pays invité d'honneur." },
    en: { title: "3rd Africa Business Days", desc: "Held in Dakhla with Chad as guest of honour." },
  },
  {
    year: "2024",
    fr: { title: "Africa Executive Meetings à Lomé", desc: "2ème édition, avec signatures avec Africa Fintech Forum et la CCIT." },
    en: { title: "Africa Executive Meetings in Lomé", desc: "2nd edition, with agreements signed with Africa Fintech Forum and CCIT." },
  },
  {
    year: "2024",
    fr: { title: "5ème antenne — Burundi", desc: "MOU signé avec la CFCIB, 1ère antenne CACS en Afrique de l'Est." },
    en: { title: "5th Antenna — Burundi", desc: "MOU signed with CFCIB, CACS's first antenna in East Africa." },
  },
  {
    year: "2025",
    fr: { title: "Missions diplomatiques", desc: "Rencontres avec les ambassadeurs de Guinée-Bissau et du Burundi, et table ronde Sahel-Atlantique à N'Djamena." },
    en: { title: "Diplomatic Missions", desc: "Meetings with the ambassadors of Guinea-Bissau and Burundi, and a Sahel-Atlantic round table in N'Djamena." },
  },
];

export default function Timeline() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <section className="bg-ivory py-24 md:py-28">
      <div className="container-cacs">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">{isEn ? "Milestones" : "Jalons"}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {isEn ? "Our Journey" : "Notre Parcours"}
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-ink/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {MILESTONES.map((m, i) => {
              const content = isEn ? m.en : m.fr;
              return (
                <Reveal key={`${m.year}-${i}`} delay={i * 0.08}>
                  <div
                    className={`relative flex items-start gap-6 md:mb-14 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                    }`}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-white shadow-card md:absolute md:left-1/2 md:-translate-x-1/2">
                      {m.year}
                    </div>
                    <div
                      className={`flex-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:w-[calc(50%-3rem)] ${
                        i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {content.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60">
                        {content.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

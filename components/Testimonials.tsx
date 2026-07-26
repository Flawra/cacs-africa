"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";

// Real, attributed statements from CACS leadership and partner institutions,
// paraphrased from public remarks — not invented testimonials.
const TESTIMONIALS = [
  {
    fr: {
      quote: "Le rôle d'une chambre, c'est de mettre en relation — de créer les bonnes occasions pour réunir les acteurs économiques afin qu'ils puissent échanger et construire ensemble.",
    },
    en: {
      quote: "A chamber's role is to connect people — to create the right occasions for economic actors to meet, exchange, and build together.",
    },
    name: "Abdelmonaim Faouzi",
    role: { fr: "Président, CACS Africa", en: "President, CACS Africa" },
  },
  {
    fr: {
      quote: "Cette convention illustre notre volonté commune de renforcer les échanges économiques entre nos réseaux d'entreprises au Maroc.",
    },
    en: {
      quote: "This agreement reflects our shared commitment to strengthening economic exchange between our business networks in Morocco.",
    },
    name: "CFCIM",
    role: { fr: "Chambre Française de Commerce et d'Industrie du Maroc", en: "French Chamber of Commerce and Industry in Morocco" },
  },
];

export default function Testimonials() {
  const locale = useLocale();
  const isEn = locale === "en";
  const t = useTranslations("testimonials");
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const current = TESTIMONIALS[index];
  const quote = isEn ? current.en.quote : current.fr.quote;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-cacs">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">{t("eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <Quote size={64} className="mx-auto text-gold/25" strokeWidth={1.2} />
            <div className="relative mt-2 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-ink/80 md:text-xl">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="font-display font-semibold text-ink">{current.name}</p>
                    <p className="text-sm text-ink/50">
                      {isEn ? current.role.en : current.role.fr}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-forest hover:text-forest"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-forest" : "w-2 bg-ink/15"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-forest hover:text-forest"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

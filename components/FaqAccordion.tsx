"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { faqs } from "@/data/faq";
import { pick } from "@/lib/i18n-utils";
import Reveal from "@/components/Reveal";

export default function FaqAccordion() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-ink/8 rounded-3xl bg-white shadow-sm ring-1 ring-ink/5">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={i} delay={i * 0.05}>
            <div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-ink md:text-base">
                  {pick(faq.question, locale)}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-forest transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60">
                    {pick(faq.answer, locale)}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

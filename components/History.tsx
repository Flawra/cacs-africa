"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import Reveal from "./Reveal";

export default function History() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-cacs grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">{isEn ? "Our Story" : "Notre Histoire"}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {isEn ? "Founded in Dakhla, " : "Née à Dakhla, "}
              <span className="text-forest">{isEn ? "Built for Africa" : "au service de l'Afrique"}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              {isEn
                ? "Since its creation in 2021, CACS Africa has played a key role in developing trade relations between Morocco, the Sahel and West Africa — leveraging Dakhla's strategic position as a gateway between the Kingdom and the rest of the continent."
                : "Depuis sa création en 2021, la CACS joue un rôle clé dans le développement des relations commerciales entre le Maroc, le Sahel et l'Afrique de l'Ouest — s'appuyant sur la position stratégique de Dakhla comme porte d'entrée entre le Royaume et le reste du continent."}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              {isEn
                ? "Today, the chamber counts over 24 diplomatic representations in its ecosystem and 5 active antennas across Africa — including Chad and Burundi, its first in East Africa, opened in 2024."
                : "Aujourd'hui, la chambre compte plus de 24 représentations diplomatiques dans son écosystème et 5 antennes actives en Afrique — dont le Tchad et le Burundi, sa première antenne en Afrique de l'Est, ouverte en 2024."}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="crescent-glow absolute -inset-4 rounded-[2.5rem] opacity-70" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-ink-800 to-forest-900 shadow-2xl">
              <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:22px_22px]" />
              <Image
                src="/logo-transparent.png"
                alt="CACS Africa emblem"
                width={200}
                height={200}
                className="relative h-36 w-36 object-contain md:h-44 md:w-44"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

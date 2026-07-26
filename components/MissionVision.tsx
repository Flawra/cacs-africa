"use client";

import { Target, Eye } from "lucide-react";
import { useLocale } from "next-intl";
import Reveal from "./Reveal";

export default function MissionVision() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <section className="bg-ivory py-24 md:py-28">
      <div className="container-cacs grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-10 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest">
              <Target size={26} strokeWidth={1.75} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink">
              {isEn ? "Our Mission" : "Notre Mission"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              {isEn
                ? "The African Chamber of Commerce and Services facilitates the establishment of businesses across the continent and connects their interests with the exceptionally fertile ground of Morocco's Southern Provinces — tying business links between members and erecting commercial bridges between the Kingdom and the rest of Africa."
                : "La Chambre Africaine de Commerce et de Services facilite l'implantation des entreprises du continent et fertilise leurs intérêts dans le terreau exceptionnellement fécond des Provinces du Sud du Maroc — en tissant des liens d'affaires entre ses membres et en érigeant des ponts commerciaux entre le Royaume et le reste de l'Afrique."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-3xl bg-forest p-10 text-white shadow-card transition-transform hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
              <Eye size={26} strokeWidth={1.75} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-white">
              {isEn ? "Our Vision" : "Notre Vision"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {isEn
                ? "To make Dakhla and Morocco's Southern Provinces a reference logistics, port and business hub between Morocco and the rest of Africa by 2030 — turning geographic proximity into economic opportunity for our members."
                : "Faire de Dakhla et des Provinces du Sud un hub logistique, portuaire et d'affaires de référence entre le Maroc et le reste de l'Afrique à l'horizon 2030 — en transformant la proximité géographique en opportunité économique pour nos adhérents."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

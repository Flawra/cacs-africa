import { Partner } from "@/lib/types";

// Real institutional partners CACS has signed conventions/MOUs with,
// per cacsafrica.org activity reports.
export const partners: Partner[] = [
  {
    slug: "cfcim",
    name: "CFCIM — Chambre Française de Commerce et d'Industrie du Maroc",
    category: "Institutional",
    description: {
      fr: "Convention de partenariat signée le 31 août 2021 pour la promotion et le développement des relations économiques entre les membres des deux chambres.",
      en: "Partnership agreement signed 31 August 2021 to promote and develop economic relations between the two chambers' members.",
    },
    since: "2021",
  },
  {
    slug: "cfcib-burundi",
    name: "CFCIB — Chambre Fédérale de Commerce et de l'Industrie du Burundi",
    category: "Institutional",
    description: {
      fr: "MOU de coopération signé lors de la table ronde de Bujumbura, ouvrant la 5ème antenne CACS et la première en Afrique de l'Est.",
      en: "Cooperation MOU signed at the Bujumbura round table, opening CACS's 5th antenna and its first in East Africa.",
    },
    since: "2024",
  },
  {
    slug: "ccit-togo",
    name: "CCIT — Chambre de Commerce et d'Industrie du Togo",
    category: "Regional Bloc",
    description: {
      fr: "Convention signée à Lomé lors des Africa Executive Meetings, en partenariat avec la région Dakhla Oued Eddahab.",
      en: "Agreement signed in Lomé during the Africa Executive Meetings, in partnership with the Dakhla Oued Eddahab region.",
    },
    since: "2024",
  },
  {
    slug: "africa-fintech-forum",
    name: "Africa Fintech Forum",
    category: "Corporate",
    description: {
      fr: "Partenariat stratégique officialisé aux Africa Executive Meetings pour promouvoir l'innovation financière en Afrique.",
      en: "Strategic partnership formalised at the Africa Executive Meetings to promote financial innovation across Africa.",
    },
    since: "2024",
  },
  {
    slug: "cciama",
    name: "CCIAMA — Chambre de Commerce, d'Industrie, d'Agriculture, des Mines et d'Artisanat",
    category: "Regional Bloc",
    description: {
      fr: "Convention signée aux Africa Business Days pour renforcer la coopération économique régionale.",
      en: "Agreement signed at Africa Business Days to strengthen regional economic cooperation.",
    },
    since: "2023",
  },
  {
    slug: "cnpt-tchad",
    name: "CNPT — Conseil National du Patronat Tchadien",
    category: "Institutional",
    description: {
      fr: "Convention signée aux Africa Business Days couvrant les communes de Biltine et Bir Guendouz.",
      en: "Agreement signed at Africa Business Days covering the Biltine and Bir Guendouz municipalities.",
    },
    since: "2023",
  },
  {
    slug: "amci",
    name: "AMCI — Agence Marocaine de Coopération Internationale",
    category: "Institutional",
    description: {
      fr: "Partenaire de plusieurs évènements CACS, dont « L'Entrepreneuriat en Afrique » et la convention d'adhésion ASLEM.",
      en: "Partner on several CACS events, including 'Entrepreneurship in Africa' and the ASLEM membership agreement.",
    },
    since: "2021",
  },
  {
    slug: "adocc",
    name: "AD'OCC — Agence de développement économique Occitanie",
    category: "Institutional",
    description: {
      fr: "MOU de collaboration signé à Dakhla entre la région Occitanie et la CACS.",
      en: "Collaboration MOU signed in Dakhla between the Occitanie region and CACS.",
    },
    since: "2023",
  },
];

import { EventItem } from "@/lib/types";

// Sourced from cacsafrica.org — "Nos évènements". The live site publishes a
// running history of activities rather than a forward calendar with fixed
// future dates, so all entries below are marked "past" with their real
// dates. New editions of Africa Business Days / Africa Executive Meetings
// are announced on CACS's own channels closer to the date.
export const events: EventItem[] = [
  {
    slug: "webinaire-performance-harmonie-2025",
    title: {
      fr: "Webinaire : Performance et Harmonie — L'humain comme levier stratégique",
      en: "Webinar: Performance and Harmony — People as a Strategic Lever",
    },
    category: "Webinar",
    country: "Maroc",
    city: "En ligne",
    date: "2025-02-25",
    status: "past",
    excerpt: {
      fr: "Un webinaire exclusif animé par Pierre Guilbert sur l'équilibre entre performance et bien-être en entreprise.",
      en: "An exclusive webinar led by Pierre Guilbert on balancing business performance with employee wellbeing.",
    },
    description: {
      fr: "Le 25 février 2025, la CACS a organisé un webinaire exclusif sous le thème « Performance et Harmonie », animé par Pierre Guilbert, expert en management. Cette session a permis d'explorer des approches innovantes alliant performance et bien-être en entreprise.",
      en: "On 25 February 2025, CACS hosted an exclusive webinar themed 'Performance and Harmony', led by management expert Pierre Guilbert, exploring approaches that combine performance with workplace wellbeing.",
    },
  },
  {
    slug: "delegation-almada-tchad-2025",
    title: {
      fr: "Le Groupe Almada conduit une délégation marocaine à la CACS-Tchad",
      en: "The Almada Group Leads a Moroccan Delegation to CACS-Chad",
    },
    category: "Visite",
    country: "Tchad",
    city: "N'Djamena",
    date: "2025-02-27",
    status: "past",
    excerpt: {
      fr: "L'antenne CACS-Tchad a accueilli une délégation économique marocaine conduite par le Groupe Almada, avec ATTIJARIWAFA BANK, MANAGEM, INWI et NAREVA.",
      en: "The CACS-Chad antenna hosted a Moroccan economic delegation led by the Almada Group, including ATTIJARIWAFA BANK, MANAGEM, INWI and NAREVA.",
    },
    description: {
      fr: "N'Djamena, 27 février 2025 — La CACS-Tchad a accueilli une délégation économique marocaine de premier plan, conduite par le Groupe Almada, visant à renforcer les liens économiques entre le Maroc et le Tchad. Depuis sa création en 2021, la CACS joue un rôle clé dans le développement des relations commerciales entre le Maroc, le Sahel et l'Afrique de l'Ouest.",
      en: "N'Djamena, 27 February 2025 — CACS-Chad welcomed a leading Moroccan economic delegation led by the Almada Group, aiming to strengthen economic ties between Morocco and Chad. Since its founding in 2021, CACS has played a key role in developing trade relations between Morocco, the Sahel and West Africa.",
    },
  },
  {
    slug: "table-ronde-burundi-2024",
    title: {
      fr: "La CACS participe à la table ronde du Burundi et signe un MOU avec la CFCIB",
      en: "CACS Takes Part in Burundi's Round Table and Signs an MOU with CFCIB",
    },
    category: "Signature",
    country: "Burundi",
    city: "Bujumbura",
    date: "2024-12-05",
    status: "past",
    excerpt: {
      fr: "Signature d'un MOU de coopération avec la Chambre Fédérale de Commerce et de l'Industrie du Burundi, ouvrant la 5ème antenne CACS en Afrique.",
      en: "Signed a cooperation MOU with Burundi's Federal Chamber of Commerce and Industry, opening CACS's 5th antenna in Africa.",
    },
    description: {
      fr: "La CACS a pris part à la table ronde organisée par le gouvernement du Burundi les 5 et 6 décembre 2024 à Bujumbura, et a signé un MOU de coopération avec la CFCIB. L'accord prévoit l'ouverture d'une antenne CACS à Bujumbura — la cinquième antenne de l'organisation en Afrique et la première en Afrique de l'Est.",
      en: "CACS took part in the round table organised by the Burundian government on 5–6 December 2024 in Bujumbura, signing a cooperation MOU with CFCIB. The agreement provides for a CACS antenna in Bujumbura — the organisation's fifth antenna in Africa and its first in East Africa.",
    },
  },
  {
    slug: "webinaire-crypto-actifs-2024",
    title: {
      fr: "Webinaire exclusif sur les crypto-actifs au Maroc",
      en: "Exclusive Webinar on Crypto-Assets in Morocco",
    },
    category: "Webinar",
    country: "Maroc",
    city: "En ligne",
    date: "2024-12-23",
    status: "past",
    excerpt: {
      fr: "Régulation, opportunités et risques des actifs numériques, animé par Badir Gallaf et Ilham El Bouloumi.",
      en: "Regulation, opportunities and risks of digital assets, led by Badir Gallaf and Ilham El Bouloumi.",
    },
    description: {
      fr: "Le 23 décembre 2024, la CACS a organisé un webinaire exclusif sur les crypto-actifs au Maroc, animé par Badir Gallaf, président de la Commission Innovation de la CACS, et Ilham El Bouloumi, experte en blockchain.",
      en: "On 23 December 2024, CACS hosted an exclusive webinar on crypto-assets in Morocco, led by Badir Gallaf, chair of CACS's Innovation Commission, and blockchain expert Ilham El Bouloumi.",
    },
  },
  {
    slug: "seafood4africa-dakhla-2024",
    title: {
      fr: "La CACS participe à SEAFOOD4AFRICA-DAKHLA 2024",
      en: "CACS Takes Part in SEAFOOD4AFRICA-DAKHLA 2024",
    },
    category: "Forum",
    country: "Maroc",
    city: "Dakhla",
    date: "2024-06-01",
    status: "past",
    excerpt: {
      fr: "Panel sur le renforcement de l'intégration régionale grâce au commerce intra-africain du poisson.",
      en: "Panel on strengthening regional integration through intra-African fish trade.",
    },
    description: {
      fr: "En tant que partenaire de la FENIP, la CACS a participé à SEAFOOD4AFRICA-DAKHLA 2024. Badir Gallaf, président de la commission Innovation, Entrepreneuriat et Jeunesse, a pris part au panel sur le commerce intra-africain du poisson.",
      en: "As a partner of FENIP, CACS took part in SEAFOOD4AFRICA-DAKHLA 2024. Badir Gallaf, chair of the Innovation, Entrepreneurship and Youth commission, joined the panel on intra-African fish trade.",
    },
  },
  {
    slug: "visioconference-logistique-industrie-2024",
    title: {
      fr: "Visioconférence sur la logistique et l'industrie en Afrique",
      en: "Video Conference on Logistics and Industry in Africa",
    },
    category: "Webinar",
    country: "Pan-Africain",
    city: "En ligne",
    date: "2024-06-25",
    status: "past",
    excerpt: {
      fr: "Infrastructures, connectivité, capital humain et ZLECAF — animée par Jérôme Tinard.",
      en: "Infrastructure, connectivity, human capital and AfCFTA — led by Jérôme Tinard.",
    },
    description: {
      fr: "Le 25 juin 2024, la CACS a organisé une visioconférence animée par Jérôme Tinard, président de la commission Logistique et Industrie, abordant les infrastructures, la connectivité, le capital humain, la formation et la ZLECAF.",
      en: "On 25 June 2024, CACS hosted a video conference led by Jérôme Tinard, chair of the Logistics and Industry commission, covering infrastructure, connectivity, human capital, training and the AfCFTA.",
    },
  },
  {
    slug: "entrepreneuriat-afrique-amci-2024",
    title: {
      fr: "\u00abL'Entrepreneuriat en Afrique\u00bb en partenariat avec l'AMCI",
      en: "'Entrepreneurship in Africa' in Partnership with AMCI",
    },
    category: "Forum",
    country: "Maroc",
    city: "Casablanca",
    date: "2024-03-01",
    status: "past",
    excerpt: {
      fr: "Cérémonie officielle réunissant de nouveaux entrepreneurs membres de l'ASLEM, en partenariat avec l'AMCI.",
      en: "Official ceremony welcoming new ASLEM-member entrepreneurs, in partnership with AMCI.",
    },
    description: {
      fr: "En partenariat avec l'AMCI et l'ASLEM, la CACS a organisé un évènement sous le thème « L'Entrepreneuriat en Afrique » à Casablanca. Le président de la CACS, Abdelmounaim Faouzi, a souligné l'importance de cette adhésion pour favoriser l'innovation.",
      en: "In partnership with AMCI and ASLEM, CACS organised an event themed 'Entrepreneurship in Africa' in Casablanca. CACS president Abdelmounaim Faouzi highlighted the importance of this membership drive for fostering innovation.",
    },
  },
  {
    slug: "conference-metiers-demain-essec-2024",
    title: {
      fr: "Conférence digitale : les métiers de demain en Afrique (avec l'ESSEC)",
      en: "Digital Conference: The Jobs of Tomorrow in Africa (with ESSEC)",
    },
    category: "Webinar",
    country: "Pan-Africain",
    city: "En ligne",
    date: "2024-01-30",
    status: "past",
    excerpt: {
      fr: "Plus de 200 participants pour explorer les défis et opportunités du marché du travail africain.",
      en: "Over 200 participants explored the challenges and opportunities of the African job market.",
    },
    description: {
      fr: "Le 30 janvier 2024, une conférence digitale organisée en partenariat avec l'ESSEC a réuni plus de 200 participants autour du thème « Les Métiers de Demain en Afrique : Quelles Perspectives ? ».",
      en: "On 30 January 2024, a digital conference held in partnership with ESSEC brought together over 200 participants around the theme 'The Jobs of Tomorrow in Africa: What Prospects?'.",
    },
  },
  {
    slug: "africa-business-days-3eme-edition",
    title: {
      fr: "Africa Business Days — 3ème édition (Tchad, pays invité d'honneur)",
      en: "Africa Business Days — 3rd Edition (Chad as Guest of Honour)",
    },
    category: "Summit",
    country: "Maroc",
    city: "Dakhla",
    date: "2023-12-18",
    status: "past",
    excerpt: {
      fr: "Organisée avec la région Dakhla-Oued Eddahab, le CRI et la CCI de Dakhla, avec plusieurs signatures de convention (AGH, CCIAMA, CNPT).",
      en: "Organised with the Dakhla-Oued Eddahab region, the CRI and Dakhla's Chamber of Commerce, featuring several partnership signings (AGH, CCIAMA, CNPT).",
    },
    description: {
      fr: "La 3ème édition des Africa Business Days, avec le Tchad comme pays invité d'honneur, a été organisée par la CACS en partenariat avec la région Dakhla Oued Eddahab. Plusieurs conventions ont été signées, notamment avec AGH, CCIAMA et CNPT.",
      en: "The 3rd edition of Africa Business Days, with Chad as guest of honour, was organised by CACS in partnership with the Dakhla Oued Eddahab region. Several agreements were signed, including with AGH, CCIAMA and CNPT.",
    },
  },
  {
    slug: "africa-executive-meetings-lome-2024",
    title: {
      fr: "Africa Executive Meetings — Lomé, Togo (2ème édition)",
      en: "Africa Executive Meetings — Lomé, Togo (2nd Edition)",
    },
    category: "Summit",
    country: "Togo",
    city: "Lomé",
    date: "2024-11-24",
    status: "past",
    excerpt: {
      fr: "Organisé avec la région Dakhla Oued Eddahab et la CCI du Togo — signatures avec Africa Fintech Forum et la CCIT.",
      en: "Organised with the Dakhla Oued Eddahab region and Togo's Chamber of Commerce — agreements signed with Africa Fintech Forum and CCIT.",
    },
    description: {
      fr: "La 2ème édition des Africa Executive Meetings à Lomé a été organisée par la CACS en partenariat avec la région Dakhla Oued Eddahab et la CCIT. Des conventions ont été signées avec l'Africa Fintech Forum et la CCIT le 24 novembre 2024.",
      en: "The 2nd edition of Africa Executive Meetings in Lomé was organised by CACS in partnership with the Dakhla Oued Eddahab region and CCIT, with agreements signed with the Africa Fintech Forum and CCIT on 24 November 2024.",
    },
  },
  {
    slug: "cfcim-cacs-convention-2021",
    title: {
      fr: "Signature de convention CFCIM x CACS",
      en: "CFCIM x CACS Partnership Agreement Signed",
    },
    category: "Signature",
    country: "Maroc",
    city: "Casablanca",
    date: "2021-08-31",
    status: "past",
    excerpt: {
      fr: "Convention de partenariat entre la CACS et la Chambre Française de Commerce et d'Industrie du Maroc.",
      en: "Partnership agreement between CACS and the French Chamber of Commerce and Industry in Morocco.",
    },
    description: {
      fr: "La CFCIM et la CACS ont signé le 31 août 2021 une convention de partenariat pour la promotion et le développement des relations économiques, commerciales et des investissements à fort potentiel pour leurs membres respectifs.",
      en: "CFCIM and CACS signed a partnership agreement on 31 August 2021 to promote and develop high-potential economic, commercial and investment relations for their respective members.",
    },
  },
];

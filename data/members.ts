import { Member } from "@/lib/types";

// Real adherent companies listed on cacsafrica.org — "Nos adhérents".
// Sector labels are kept generic where not publicly detailed on the
// source site, to avoid inventing information about real companies.
export const members: Member[] = [
  { slug: "archub", company: "Archub", sector: { fr: "Architecture & Design", en: "Architecture & Design" } },
  { slug: "codexpro", company: "Codexpro", website: "https://codexpro.ma", sector: { fr: "Conseil & Services", en: "Consulting & Services" } },
  { slug: "cmim", company: "CMIM", website: "https://www.cmim.ma", sector: { fr: "Protection Sociale", en: "Social Protection" } },
  { slug: "centrale-gypse", company: "Centrale Gypse", website: "https://centralegypse.com", sector: { fr: "Industrie & Matériaux", en: "Industry & Materials" } },
  { slug: "fenie-brossette", company: "Fenie Brossette", website: "https://www.feniebrossette.ma", sector: { fr: "Distribution Industrielle", en: "Industrial Distribution" } },
  { slug: "holark-holding", company: "Holark Holding", website: "http://www.holarkholding.com", sector: { fr: "Holding & Investissement", en: "Holding & Investment" } },
  { slug: "ic-performance", company: "IC Performance", website: "https://biaa.ma/listing/ic-performance/", sector: { fr: "Conseil en Performance", en: "Performance Consulting" } },
  { slug: "ioffice", company: "iOffice", website: "https://ioffice.ma", sector: { fr: "Solutions Bureautiques", en: "Office Solutions" } },
  { slug: "langages-du-sud", company: "Langages du Sud", website: "http://www.langagesdusud.ma/", sector: { fr: "Formation & Langues", en: "Training & Languages" } },
  { slug: "marcon-maroc", company: "Marcon Maroc", sector: { fr: "Négoce & Distribution", en: "Trading & Distribution" } },
  { slug: "mofi-equipements", company: "Mofi Equipements", sector: { fr: "Équipements Industriels", en: "Industrial Equipment" } },
  { slug: "pro-btp-maroc", company: "Pro BTP Maroc", website: "https://www.probtpmaroc.com", sector: { fr: "Bâtiment & Travaux Publics", en: "Construction & Public Works" } },
  { slug: "ruben-maroc", company: "Ruben Maroc", website: "https://www.rubenmaroc.ma", sector: { fr: "Négoce & Services", en: "Trading & Services" } },
  { slug: "sensyo-pharmatech", company: "Sensyo Pharmatech", website: "https://sensyo-pharmatech.com/", sector: { fr: "Industrie Pharmaceutique", en: "Pharmaceutical Industry" } },
  { slug: "tetrade-consulting", company: "Tetrade Consulting", website: "http://tetrade.ma/", sector: { fr: "Conseil en Stratégie", en: "Strategy Consulting" } },
  { slug: "vo2-maroc", company: "VO2 Maroc", website: "https://www.vo2-group.com/fr/le-groupe/", sector: { fr: "Conseil & Ingénierie", en: "Consulting & Engineering" } },
  { slug: "bureau-veritas", company: "Bureau Veritas", website: "https://www.bureauveritas.ma/fr", sector: { fr: "Certification & Conformité", en: "Certification & Compliance" } },
  { slug: "wamer", company: "Wamer", sector: { fr: "Services aux Entreprises", en: "Business Services" } },
  { slug: "wonderful-and-co", company: "Wonderful and Co", sector: { fr: "Communication & Évènementiel", en: "Communication & Events" } },
  { slug: "yschool", company: "YSchool", website: "https://www.yool.education", sector: { fr: "Éducation & Formation", en: "Education & Training" } },
];

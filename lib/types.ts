export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Service {
  slug: string;
  title: LocalizedText;
  shortDesc: LocalizedText;
  icon: string;
  description: LocalizedText;
  benefits: LocalizedText[];
}

export interface EventItem {
  slug: string;
  title: LocalizedText;
  category: "Summit" | "Forum" | "Workshop" | "Webinar" | "Visite" | "Signature";
  country: string;
  city: string;
  date: string;
  status: "upcoming" | "past";
  excerpt: LocalizedText;
  description: LocalizedText;
  sourceUrl?: string;
}

export interface Article {
  slug: string;
  title: LocalizedText;
  category: "Trade" | "Policy" | "Events" | "Members" | "Investment" | "Diplomatie" | "Innovation";
  excerpt: LocalizedText;
  content: string[];
  date: string;
  readTime: string;
  sourceUrl?: string;
}

export interface Member {
  slug: string;
  company: string;
  website?: string;
  sector: LocalizedText;
}

export interface Partner {
  slug: string;
  name: string;
  category: "Institutional" | "Financial" | "Corporate" | "Regional Bloc";
  description: LocalizedText;
  since: string;
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface Leader {
  name: string;
  role: LocalizedText;
  image?: string;
}

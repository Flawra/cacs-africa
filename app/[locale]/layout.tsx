import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, Poppins } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cacsafrica.org"),
  title: {
    default: "CACS Africa | Chambre Africaine de Commerce et de Services",
    template: "%s | CACS Africa",
  },
  description:
    "La Chambre Africaine de Commerce et de Services (CACS) tisse des liens d'affaires entre ses membres et érige des ponts commerciaux entre le Maroc et l'Afrique.",
  keywords: [
    "CACS Africa",
    "Chambre Africaine de Commerce et de Services",
    "Dakhla",
    "commerce Maroc Afrique",
    "Africa Business Days",
  ],
  openGraph: {
    type: "website",
    siteName: "CACS Africa",
    title: "CACS Africa | Chambre Africaine de Commerce et de Services",
    description:
      "La chambre qui tisse des liens d'affaires entre le Maroc et l'Afrique, basée à Dakhla.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CACS Africa | Chambre Africaine de Commerce et de Services",
  },
  robots: { index: true, follow: true },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import MissionVision from "@/components/MissionVision";
import History from "@/components/History";
import Timeline from "@/components/Timeline";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export async function generateMetadata() {
  return { title: "About" };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={isEn ? "Who We Are" : "Qui Sommes-Nous"}
        title={isEn ? "About CACS Africa" : "À Propos de la CACS"}
        description={
          isEn
            ? "The story, mission and people behind the chamber building business bridges between Morocco and Africa."
            : "L'histoire, la mission et les personnes qui font la chambre qui tisse des liens d'affaires entre le Maroc et l'Afrique."
        }
        breadcrumb={isEn ? "About" : "À propos"}
      />
      <MissionVision />
      <History />
      <Timeline />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  );
}

import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import EventsExplorer from "@/components/EventsExplorer";

export async function generateMetadata() {
  const t = await getTranslations("eventsSection");
  return { title: t("title") };
}

export default async function EventsPage() {
  const t = await getTranslations("eventsSection");

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        breadcrumb={t("title")}
      />
      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs">
          <EventsExplorer />
        </div>
      </section>
      <Footer />
    </main>
  );
}

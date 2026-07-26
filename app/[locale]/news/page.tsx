import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import NewsExplorer from "@/components/NewsExplorer";

export async function generateMetadata() {
  return { title: "News" };
}

export default async function NewsPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={isEn ? "Insights" : "Actualités"}
        title={isEn ? "News & Insights" : "Actualités"}
        description={
          isEn
            ? "Real activity reports from CACS Africa — diplomacy, trade missions and partnerships."
            : "Comptes-rendus réels des activités de la CACS — diplomatie, missions commerciales et partenariats."
        }
        breadcrumb={isEn ? "News" : "Actualités"}
      />
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-cacs">
          <NewsExplorer />
        </div>
      </section>
      <Footer />
    </main>
  );
}

import { getLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import MembersExplorer from "@/components/MembersExplorer";

export async function generateMetadata() {
  return { title: "Members" };
}

export default async function MembersPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <main>
      <Navbar />
      <PageHeader
        eyebrow={isEn ? "Directory" : "Annuaire"}
        title={isEn ? "Our Members" : "Nos Adhérents"}
        description={
          isEn
            ? "Real companies building business ties between Morocco and Africa through CACS."
            : "Des entreprises réelles qui tissent des liens d'affaires entre le Maroc et l'Afrique à travers la CACS."
        }
        breadcrumb={isEn ? "Members" : "Adhérents"}
      />
      <section className="bg-white py-20 md:py-24">
        <div className="container-cacs">
          <MembersExplorer />
        </div>
      </section>
      <Footer />
    </main>
  );
}

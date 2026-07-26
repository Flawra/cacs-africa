import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import AfricaMap from "@/components/AfricaMap";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <AfricaMap />
      <Events />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero/Hero";

import Stats from "@/components/home/stats/Stats";
import WhyChoose from "@/components/home/why-choose/WhyChoose";
import Industries from "@/components/home/industries/Industries";
import Clients from "@/components/home/clients/Clients";
import Testimonials from "@/components/home/testimonials/Testimonials";
import CTA from "@/components/home/cta/CTA";
import Footer from "@/components/layout/footer/Footer";
import About from "@/components/home/about/about";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <WhyChoose />
        <Industries />
        <Clients />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
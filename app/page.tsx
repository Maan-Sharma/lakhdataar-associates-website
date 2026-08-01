import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

import About from "@/components/about/about";
import Stats from "@/components/stats/Stats";
import WhyChoose from "@/components/why-choose/WhyChoose";
import Industries from "@/components/industries/Industries";

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
      </main>
    </>
  );
}
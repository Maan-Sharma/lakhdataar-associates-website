import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

import About from "@/components/about/about";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";


// Future Sections
// import Mission from "@/components/about/Mission/Mission";
// import Values from "@/components/about/Values/Values";
// import Timeline from "@/components/about/Timeline/Timeline";
// import Team from "@/components/about/Team/Team";
// import CTA from "@/components/about/CTA/CTA";

import Footer from "@/components/layout/footer/Footer";
import AboutHero from "@/components/about-page/hero/AboutHero";
import OurStory from "@/components/about-page/storys/OurStory";
import Mission from "@/components/about-page/Mission/Mission";
import Values from "@/components/about-page/Values/Values";
import Team from "@/components/Team/Team";
import AboutCTA from "@/components/about-page/AboutCTA";

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Navbar />

            <main>

                <AboutHero />

                <OurStory />

                <Mission />

                <Values />

                <Team />
                <AboutCTA />

                {/* <Timeline /> */}

                {/* <Team /> */}

                {/* <CTA /> */}

            </main>

            <Footer />
        </>
    );
}
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/about-page/AboutHero";

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Navbar />

            <main>
                <AboutHero />
            </main>
        </>
    );
}
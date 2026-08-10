import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryGrid from "@/components/industries/IndustryGrid/IndustryGrid";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function IndustriesPage() {
    return (
        <>
            <TopBar />
            <Navbar />
            <main>
                <IndustriesHero />

                <IndustryGrid />
            </main>
            <Footer />
        </>


    );
}
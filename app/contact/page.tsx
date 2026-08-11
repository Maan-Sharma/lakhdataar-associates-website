import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/contact/ContactMap";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Navbar />
            <main className="min-h-screen bg-white">
                <ContactHero />

                <ContactForm />

                <ContactMap />
            </main>
            <Footer />
        </>
    );
}
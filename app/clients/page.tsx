import ClientList from "@/components/clients/ClientList";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientStats from "@/components/clients/ClientStats";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function ClientsPage() {
    return (


        <>
            <TopBar />
            <Navbar />
            <main className="w-full overflow-hidden">
                <ClientsHero />

                <ClientStats />

                <ClientList />
            </main>
            <Footer />
        </>

    );
}
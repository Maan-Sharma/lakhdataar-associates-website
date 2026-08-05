import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import ProductHero from "@/components/products/ProductHero/ProductHero";
import ProductsShowcase from "@/components/products/ProductsShowcase/ProductsShowcase";

export default function ProductsPage() {
    return (

        <>
            <TopBar />
            <Navbar />

            <main>
                <ProductHero />
                <ProductsShowcase />
                {/* Next Sections */}
            </main>

            <Footer />
        </>
    );
}
import ProductCard from "./ProductCard";
import { products } from "./data";

export default function ProductsShowcase() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="inline-flex rounded-full border border-[#D4A81E]/30 bg-[#D4A81E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#D4A81E]">
                        Products
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-[#0F2747] md:text-5xl">
                        Complete Industrial Supply Solutions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We supply premium industrial raw materials and complete
                        logistics solutions with consistent quality, transparent
                        pricing and nationwide delivery.
                    </p>

                </div>

                {/* Products */}

                <div className="space-y-24 lg:space-y-32">

                    {products.map((product, index) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            reverse={index % 2 === 1}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}
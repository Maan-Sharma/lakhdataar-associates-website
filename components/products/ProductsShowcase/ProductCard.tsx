import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Product } from "./types";

interface ProductCardProps {
    product: Product;
    reverse?: boolean;
}

export default function ProductCard({
    product,
    reverse = false,
}: ProductCardProps) {
    return (
        <section
            className={`grid items-center gap-10 lg:gap-16 ${reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
                }`}
        >
            {/* IMAGE */}
            <div
                className={`${reverse ? "lg:order-2" : "lg:order-1"
                    } relative overflow-hidden rounded-3xl shadow-2xl group`}
            >
                <div className="relative aspect-[16/10] w-full">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/90 via-transparent to-transparent" />

                {/* Bottom Label */}
                <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A81E] px-3 py-1 text-xs font-semibold text-white">
                        ● Product
                    </div>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                        {product.title}
                    </h3>
                </div>
            </div>

            {/* CONTENT */}
            <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A81E]">
                    Product
                </p>

                <h2 className="text-4xl font-bold text-[#0F2747]">
                    {product.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    {product.description}
                </p>

                {/* Features */}
                <div className="mt-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0F2747]">
                        Key Features
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {product.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="mt-1 text-[#D4A81E]"
                                />

                                <span className="text-slate-600">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div className="mt-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0F2747]">
                        Industries Served
                    </h4>

                    <div className="flex flex-wrap gap-3">
                        {product.industries.map((industry) => (
                            <span
                                key={industry}
                                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-[#D4A81E] hover:text-[#D4A81E]"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0F2747] px-6 py-3 font-semibold text-white transition hover:bg-[#173A63]">
                    Enquire Now

                    <ArrowRight size={18} />
                </button>
            </div>
        </section>
    );
}
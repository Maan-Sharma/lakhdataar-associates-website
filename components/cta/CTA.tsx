"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative h-[650px] overflow-hidden">

            {/* Background */}

            <Image
                src="/cta-bg.jpg"
                alt="CTA Background"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}

            {/* <div className="absolute inset-0 bg-[#081B33]/55" /> */}

            {/* Content */}

            <div className="relative z-10 flex h-full items-center justify-center px-6">

                <div className="max-w-5xl text-center">

                    {/* Badge */}

                    <span
                        className="
                        inline-flex
                        rounded-full
                        border
                        border-[#D4A937]/30
                        bg-[#D4A937]/10
                        px-6
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                        text-[#D4A937]
                    "
                    >
                        LET'S PARTNER
                    </span>

                    {/* Heading */}

                    <h2
                        className="
                        mt-8
                        text-5xl
                        font-black
                        leading-[1.05]
                        text-white

                        md:text-6xl

                        lg:text-7xl
                    "
                    >
                        Looking for a reliable supplier
                        <br />
                        of coal, billets or scrap?
                    </h2>

                    {/* Description */}

                    <p
                        className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-xl
                        leading-9
                        text-white/85
                    "
                    >
                        Get a customized quote in less than 24 hours.
                        Our team is ready to power your operations.
                    </p>

                    {/* Buttons */}

                    <div
                        className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-5

                        sm:flex-row
                    "
                    >

                        <button
                            className="
                            flex
                            h-16
                            items-center
                            gap-3
                            rounded-xl
                            bg-[#D4A937]
                            px-10
                            text-lg
                            font-semibold
                            text-[#081B33]
                            transition
                            hover:bg-[#e4b845]
                        "
                        >
                            Request a Quote

                            <ArrowRight size={20} />
                        </button>

                        <button
                            className="
                            flex
                            h-16
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-white/20
                            bg-white/10
                            px-10
                            text-lg
                            font-semibold
                            text-white
                            backdrop-blur-sm
                            transition
                            hover:bg-white/20
                        "
                        >
                            <Phone size={20} />

                            +91 90938 19066
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}
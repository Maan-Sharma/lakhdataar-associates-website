"use client";

import { useRef } from "react";
import HeroButtons from "./HeroButtons";
import { useHeroAnimation } from "../hooks/useHeroAnimation"; // adjust path

export default function HeroContent() {
    const heroRef = useRef<HTMLDivElement>(null);

    useHeroAnimation();

    return (
        <div ref={heroRef} className="max-w-3xl">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                    Trusted Since 2017
                </span>
            </div>


            <h1 className="hero-title mt-8 text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.04em] text-white">
                LAKHDATAAR

                <span className="mt-2 block text-gold">
                    ASSOCIATES
                </span>

                INDIA LLP
            </h1>


            <p className="hero-desc mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                Lakhdataar Associates India LLP supplies premium industrial
                raw materials with dependable logistics, transparent pricing,
                and long-term partnerships across India.
            </p>


            <div className="hero-buttons mt-12">
                <HeroButtons />
            </div>

        </div>
    );
}
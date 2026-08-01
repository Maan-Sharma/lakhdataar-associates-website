"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const split = new SplitType(titleRef.current, {
            types: "lines,words,chars",
        });

        gsap.set(split.chars, {
            yPercent: 120,
            opacity: 0,
        });

        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
            },
        });

        tl.from(".hero-badge", {
            opacity: 0,
            y: 20,
            duration: 0.6,
        })
            .to(
                split.chars,
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.02,
                    duration: 1,
                },
                "-=0.2"
            )
            .from(
                ".hero-desc",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                },
                "-=0.5"
            )
            .from(
                ".hero-buttons",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                },
                "-=0.4"
            );

        return () => {
            split.revert();
            tl.kill();
        };
    }, []);

    return (
        <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                    Trusted Since 2017
                </span>
            </div>

            <h1
                ref={titleRef}
                className="hero-title mt-8 text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            >
                LAKHDATAAR
                <br />
                <span className="text-gold">ASSOCIATES</span>
                <br />
                INDIA LLP
            </h1>
            <div className="hero-marquee mt-10 overflow-hidden border-y border-white/10 py-4">
                <div className="marquee-track flex w-max whitespace-nowrap">
                    {[...Array(2)].map((_, group) => (
                        <div key={group} className="flex items-center">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="mx-8 text-lg font-medium uppercase tracking-[0.25em] text-white/60 lg:text-xl"
                                >
                                    Fueling Industries.
                                    <span className="mx-4 text-gold">
                                        Powering Growth.
                                    </span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <p className="hero-desc mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                India’s trusted supplier of coal, billets, MS scrap and industrial raw materials with pan-India logistics.
            </p>

            <div className="hero-buttons mt-10">
                <HeroButtons />
            </div>
        </div>
    );
}
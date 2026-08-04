"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WhyCard from "./WhyCard";
import { whyChoose } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ===========================
            // Heading Animation
            // ===========================

            gsap.from(".why-heading", {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            ScrollTrigger.matchMedia({

                // =====================================
                // Desktop Animation
                // =====================================

                "(min-width:1024px)": () => {

                    gsap.set(".top-row", {
                        xPercent: -35,
                        force3D: true,
                    });

                    gsap.set(".bottom-row", {
                        xPercent: 35,
                        force3D: true,
                    });

                    gsap.to(".top-row", {
                        xPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "center center",
                            scrub: 3,
                            invalidateOnRefresh: true,
                        },
                    });

                    gsap.to(".bottom-row", {
                        xPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "center center",
                            scrub: 3,
                            invalidateOnRefresh: true,
                        },
                    });

                },

                // =====================================
                // Tablet & Mobile
                // =====================================

                "(max-width:1023px)": () => {

                    gsap.from(".why-card", {
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse",
                        },
                    });

                },

            });

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <section
            id="why-us"
            ref={sectionRef}
            className="
            overflow-hidden
            bg-slate-50

            py-16

            sm:py-20

            lg:py-28
        "
        >
            <div className="container-width">

                {/* Heading */}

                <motion.div
                    className="
                    why-heading

                    mx-auto

                    max-w-4xl

                    text-center
                "
                >
                    <span
                        className="
                        inline-flex

                        rounded-full

                        bg-gold/10

                        px-5

                        py-2

                        text-[11px]

                        font-semibold

                        uppercase

                        tracking-[0.35em]

                        text-gold

                        sm:text-xs
                    "
                    >
                        WHY CHOOSE US
                    </span>

                    <h2
                        className="
                        mt-6

                        text-[clamp(2rem,5vw,3.75rem)]

                        font-black

                        leading-tight

                        tracking-tight

                        text-brand
                    "
                    >
                        Built on Trust.
                        <br />
                        Delivered with Precision.
                    </h2>

                    <p
                        className="
                        mx-auto

                        mt-6

                        max-w-3xl

                        text-base

                        leading-8

                        text-slate-500

                        sm:text-lg
                    "
                    >
                        We combine deep industry expertise,
                        dependable logistics,
                        transparent pricing,
                        and long-term partnerships
                        to deliver industrial solutions
                        across India.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="mt-14 lg:mt-20 space-y-6 lg:space-y-8">

                    {/* Top Row */}

                    <div
                        className="
                        top-row

                        grid

                        grid-cols-1

                        gap-5

                        sm:grid-cols-2

                        lg:grid-cols-3

                        lg:gap-8
                    "
                    >
                        {whyChoose.slice(0, 3).map((item) => (

                            <div
                                key={item.title}
                                className="
                                why-card
                                h-full
                                will-change-transform
                            "
                            >
                                <WhyCard item={item} />
                            </div>

                        ))}
                    </div>

                    {/* Bottom Row */}

                    <div
                        className="
                        bottom-row

                        grid

                        grid-cols-1

                        gap-5

                        sm:grid-cols-2

                        lg:grid-cols-3

                        lg:gap-8
                    "
                    >
                        {whyChoose.slice(3).map((item) => (

                            <div
                                key={item.title}
                                className="
                                why-card
                                h-full
                                will-change-transform
                            "
                            >
                                <WhyCard item={item} />
                            </div>

                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
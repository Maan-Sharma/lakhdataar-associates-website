"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WhyCard from "./WhyCard";
import { whyChoose } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            ScrollTrigger.matchMedia({

                // ==========================================
                // Desktop
                // ==========================================

                "(min-width:1024px)": () => {

                    gsap.fromTo(
                        ".left-card",
                        {
                            x: -500,
                            opacity: 0,
                            rotate: -10,
                            scale: 0.85,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                            stagger: 0.2,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,

                                // Animation starts when section enters viewport
                                start: "top bottom",

                                // Ends much later for smoother movement
                                end: "bottom center",

                                // Higher = smoother/slower
                                scrub: 3.5,

                                invalidateOnRefresh: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        ".right-card",
                        {
                            x: 500,
                            opacity: 0,
                            rotate: 10,
                            scale: 0.85,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                            stagger: 0.2,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom center",
                                scrub: 3.5,
                                invalidateOnRefresh: true,
                            },
                        }
                    );

                },

                // ==========================================
                // Tablet & Mobile
                // ==========================================

                "(max-width:1023px)": () => {

                    gsap.fromTo(
                        ".left-card, .right-card",
                        {
                            y: 120,
                            opacity: 0,
                            scale: 0.9,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            stagger: 0.15,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 90%",
                                end: "bottom 45%",
                                scrub: 2,
                                invalidateOnRefresh: true,
                            },
                        }
                    );

                },

            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="why-us"
            ref={sectionRef}
            className="bg-slate-50 py-20 sm:py-24 lg:py-28"
        >
            <div className="container-width">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <span
                        className="
                        inline-flex
                        rounded-full
                        bg-gold/10
                        px-5
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                        text-gold
                        sm:text-sm
                    "
                    >
                        WHY CHOOSE US
                    </span>

                    <h2
                        className="
                        mt-6
                        text-3xl
                        font-black
                        leading-tight
                        text-brand
                        sm:text-5xl
                        lg:text-6xl
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
                        lg:text-xl
                    "
                    >
                        We combine deep industry expertise,
                        dependable logistics,
                        transparent pricing,
                        and long-term partnerships
                        to deliver industrial solutions across India.
                    </p>

                </motion.div>

                {/* Cards */}



                <div
                    className="
        mt-14

        grid

        grid-cols-2

        gap-4

        sm:mt-16
        sm:gap-5

        md:grid-cols-2

        lg:mt-20
        lg:grid-cols-3
        lg:gap-6

        xl:gap-8
    "
                >
                    {whyChoose.map((item, index) => (

                        <div
                            key={item.title}
                            className={`
                ${index < 3 ? "left-card" : "right-card"}
                h-full
            `}
                        >
                            <WhyCard item={item} />
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}
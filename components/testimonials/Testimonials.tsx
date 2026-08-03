"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading
            gsap.from(".testimonial-heading", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Cards
            gsap.from(".testimonial-card", {
                y: 80,
                opacity: 0,
                scale: 0.95,
                stagger: 0.18,
                ease: "power3.out",
                duration: 1.1,

                scrollTrigger: {
                    trigger: ".testimonial-grid",
                    start: "top 80%",
                    once: true,
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-slate-50 py-20 sm:py-24 lg:py-32"
        >
            <div className="container-width">

                <div className="testimonial-heading text-center">

                    <span className="inline-flex rounded-full bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-brand sm:text-5xl lg:text-6xl">
                        What our clients say.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
                        Trusted relationships built on quality,
                        transparency and timely delivery.
                    </p>

                </div>

                <div
                    className="
                    testimonial-grid

                    mt-16

                    grid

                    gap-6

                    md:grid-cols-2

                    xl:grid-cols-3
                "
                >
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="testimonial-card"
                        >
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
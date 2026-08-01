"use client";

import { motion } from "framer-motion";
import IndustryCard from "./IndustryCard";
import { industries } from "./data";

export default function Industries() {
    return (
        <section
            id="industries"
            className="
            relative
            overflow-hidden

            bg-brand

            py-24

            lg:py-32
        "
        >
            {/* Background Glow */}

            <div className="absolute inset-0 opacity-30">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gold blur-[180px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#1e3a5f] blur-[180px]" />
            </div>

            <div className="container-width relative z-10">

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
                        border
                        border-gold/40

                        px-6
                        py-2

                        text-xs

                        font-semibold

                        uppercase

                        tracking-[0.35em]

                        text-gold
                    "
                    >
                        Industries Served
                    </span>

                    <h2
                        className="
                        mt-8

                        text-4xl

                        font-black

                        leading-tight

                        text-white

                        sm:text-5xl

                        lg:text-6xl
                    "
                    >
                        Trusted Across India's
                        <br />
                        Core Industries
                    </h2>

                    <p
                        className="
                        mx-auto

                        mt-8

                        max-w-3xl

                        text-lg

                        leading-8

                        text-white/70

                        lg:text-xl
                    "
                    >
                        Supplying premium industrial raw materials with
                        dependable logistics and long-term partnerships across
                        India's leading industries.
                    </p>

                </motion.div>

                {/* Cards */}

                <div
                    className="
                    mt-20

                    grid

                    grid-cols-2

                    gap-5

                    sm:grid-cols-3

                    lg:grid-cols-4

                    xl:grid-cols-7
                "
                >
                    {industries.map((item) => (
                        <IndustryCard
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
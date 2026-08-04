"use client";

import { motion } from "framer-motion";
import ClientCard from "./ClientCard";
import { clients } from "./data";

export default function Clients() {
    // Repeat several times for a perfectly smooth infinite marquee
    const marqueeClients = [
        ...clients,
        ...clients,
        ...clients,
        ...clients,
    ];

    return (
        <section className="overflow-hidden bg-slate-50 py-20 lg:py-28">
            <div className="container-width">

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

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
                    "
                    >
                        OUR CLIENTS
                    </span>

                    <h2
                        className="
                        mt-6
                        text-4xl
                        font-black
                        text-brand
                        md:text-5xl
                        lg:text-6xl
                    "
                    >
                        Trusted by India's Leading Industries
                    </h2>

                    <p
                        className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-lg
                        leading-8
                        text-slate-500
                    "
                    >
                        Our long-term partnerships reflect the trust
                        we've built across steel, cement, power and
                        infrastructure sectors.
                    </p>

                </div>

                {/* Marquee */}

                <div className="relative mt-16 overflow-hidden">

                    {/* Left Fade */}

                    <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />

                    {/* Right Fade */}

                    <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

                    <motion.div
                        className="flex w-max items-center gap-6"
                        animate={{
                            x: ["0%", "-25%"],
                        }}
                        transition={{
                            duration: 55,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {marqueeClients.map((client, index) => (
                            <ClientCard
                                key={`${client}-${index}`}
                                name={client}
                            />
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
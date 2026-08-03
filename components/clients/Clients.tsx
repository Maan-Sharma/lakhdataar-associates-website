"use client";

import { motion } from "framer-motion";
import ClientCard from "./ClientCard";
import { clients } from "./data";

export default function Clients() {
    // Duplicate the array for a seamless infinite marquee
    const marqueeClients = [...clients, ...clients];

    return (
        <section className="overflow-hidden bg-slate-50 py-20 lg:py-28">
            <div className="container-width">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
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
                        OUR CLIENTS
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
                        Chosen by industry leaders.
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
                        A partial list of trusted companies that rely on us
                        for raw materials and logistics across India.
                    </p>
                </motion.div>

                {/* Marquee */}

                <div className="relative mt-16 overflow-hidden">

                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        whileHover={{
                            animationPlayState: "paused",
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
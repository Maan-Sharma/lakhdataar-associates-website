"use client";

import { motion } from "framer-motion";

interface IndustryCardProps {
    title: string;
    icon: React.ElementType;
}

export default function IndustryCard({
    title,
    icon: Icon,
}: IndustryCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
            className="
                group
                relative

                flex
                h-[220px]
                w-full
                flex-col
                items-center
                justify-center

                overflow-hidden

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]
                backdrop-blur-sm

                p-8

                transition-all
                duration-500

                hover:border-gold/50
                hover:bg-white/[0.05]
                hover:shadow-[0_25px_70px_rgba(0,0,0,.35)]
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    -top-16
                    -right-16

                    h-40
                    w-40

                    rounded-full

                    bg-gold/10

                    blur-3xl

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:opacity-100
                "
            />

            {/* Icon */}

            <div
                className="
                    relative

                    mb-8

                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/25

                    transition-all
                    duration-500

                    group-hover:border-gold
                    group-hover:bg-gold/10
                "
            >
                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                    "
                >
                    <Icon
                        className="h-full w-full text-gold"
                        strokeWidth={1.8}
                    />
                </div>
            </div>

            {/* Title */}

            <h3
                className="
                    max-w-[160px]

                    text-center

                    text-lg
                    font-bold
                    leading-snug

                    text-white

                    transition-colors
                    duration-300

                    group-hover:text-gold

                    sm:text-xl
                "
            >
                {title}
            </h3>

            {/* Bottom Line */}

            <div
                className="
                    absolute
                    bottom-0
                    left-1/2

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    bg-gold

                    transition-all
                    duration-500

                    group-hover:w-20
                "
            />
        </motion.div>
    );
}
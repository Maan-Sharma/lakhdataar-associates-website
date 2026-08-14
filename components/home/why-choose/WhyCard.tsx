"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WhyCardProps {
    item: {
        title: string;
        description: string;
        icon: React.ElementType;
    };
}

export default function WhyCard({ item }: WhyCardProps) {
    const Icon = item.icon;
    const router = useRouter();

    return (
        <motion.article
            whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: -4,
                transition: {
                    duration: 0.35,
                },
            }}
            className="
                group
                relative

                flex
                h-full
                min-h-72

                flex-col

                sm:min-h-80

                overflow-hidden

                rounded-[30px]

                border
                border-slate-200/70

                bg-white/90

                p-5

                shadow-[0_15px_50px_rgba(2,6,23,.06)]

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-gold/50
                hover:shadow-[0_35px_90px_rgba(8,27,51,.15)]

                sm:p-6
                md:p-8
            "
        >

            {/* Glow */}

            <div
                className="
                    absolute

                    -right-28
                    -top-28

                    h-72
                    w-72

                    rounded-full

                    bg-gold/10

                    blur-[100px]

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:opacity-100
                "
            />

            {/* Gold Border */}

            <div
                className="
                    absolute

                    left-0
                    top-0

                    h-1

                    w-0

                    bg-linear-to-r

                    from-gold

                    via-yellow-300

                    to-gold

                    transition-all
                    duration-700

                    group-hover:w-full
                "
            />

            {/* Icon */}

            <div
                className="
                    relative

                    flex

                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-brand

                    text-gold

                    transition-all
                    duration-500

                    group-hover:rotate-6
                    group-hover:scale-110
                "
            >
                <Icon
                    className="h-8 w-8"
                    strokeWidth={1.8}
                />
            </div>

            {/* Title */}

            <h3
                className="
                    mt-8

                    text-xl

                    font-bold

                    leading-tight

                    text-brand

                    transition-colors
                    duration-300

                    group-hover:text-gold

                    lg:text-2xl
                "
            >
                {item.title}
            </h3>

            {/* Description */}

            <p
                className="
                    mt-5

                    grow

                    text-sm

                    leading-7

                    text-slate-500

                    sm:text-base
                "
            >
                {item.description}
            </p>

            {/* Footer */}

            <div
                className="
                    mt-8

                    flex

                    items-center

                    justify-between
                "
            >
                <span
                    onClick={() => router.push("/about")}
                    className="
                        text-sm

                        font-semibold

                        uppercase

                        tracking-[0.2em]

                        text-gold
                    "
                >
                    Learn More
                </span>

                <div

                    className="
                        flex

                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-full

                        bg-brand

                        text-white

                        transition-all

                        duration-300

                        group-hover:bg-gold
                    "
                >
                    <ArrowUpRight
                        className="
                            h-5
                            w-5

                            transition-all

                            group-hover:rotate-45
                        "
                    />
                </div>
            </div>

            {/* Decorative */}

            <div
                className="
                    absolute

                    bottom-6
                    right-6

                    h-24
                    w-24

                    rounded-full

                    border

                    border-gold/10

                    transition-all

                    duration-500

                    group-hover:scale-125
                    group-hover:border-gold/30
                "
            />

        </motion.article>
    );
}
"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface WhyCardProps {
    item: {
        icon: React.ElementType;
        title: string;
        description: string;
    };
}

export default function WhyCard({ item }: WhyCardProps) {

    const Icon = item.icon;

    return (

        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
                group
                relative

                flex
                h-full
                flex-col

                overflow-hidden

                rounded-2xl
                lg:rounded-[28px]

                border
                border-slate-200

                bg-white

                p-5
                sm:p-6
                lg:p-8

                transition-all
                duration-500

                hover:border-gold/30
                hover:shadow-[0_25px_60px_rgba(8,27,51,0.12)]
            "
        >

            {/* Background Glow */}

            <div
                className="
                    absolute
                    -right-10
                    -top-10

                    h-32
                    w-32

                    rounded-full

                    bg-gold/5

                    blur-3xl

                    transition

                    duration-700

                    group-hover:scale-150
                "
            />

            {/* Icon */}

            <div
                className="
                    flex

                    h-12
                    w-12

                    sm:h-14
                    sm:w-14

                    lg:h-16
                    lg:w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gold/10

                    text-gold

                    transition

                    group-hover:bg-gold
                    group-hover:text-white
                "
            >
                <Icon className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>

            {/* Title */}

            <h3
                className="
                    mt-5

                    text-base
                    sm:text-xl
                    lg:text-2xl

                    font-bold

                    leading-tight

                    text-brand
                "
            >
                {item.title}
            </h3>

            {/* Description */}

            <p
                className="
                    mt-4

                    flex-grow

                    text-sm
                    sm:text-base

                    leading-7

                    text-slate-500
                "
            >
                {item.description}
            </p>

            {/* Learn More */}

            <div
                className="
                    mt-6

                    flex

                    items-center

                    gap-2

                    font-semibold

                    text-brand

                    transition

                    group-hover:text-gold
                "
            >
                Learn More

                <ArrowUpRight
                    className="
                        h-5
                        w-5

                        transition

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                    "
                />
            </div>

        </motion.div>

    );

}
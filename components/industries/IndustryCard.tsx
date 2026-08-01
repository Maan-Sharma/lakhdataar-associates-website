"use client";

import { motion } from "framer-motion";

export default function IndustryCard({
    item,
    index,
}: {
    item: any;
    index: number;
}) {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
            }}
            whileHover={{
                y: -10,
                scale: 1.04,
            }}
            className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            backdrop-blur-md
            p-8

            transition-all
            duration-500

            hover:border-gold/60
            hover:bg-white/[0.05]
            hover:shadow-[0_20px_80px_rgba(0,0,0,.35)]
        "
        >
            <div
                className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center

                rounded-full

                border
                border-gold/40

                transition-all
                duration-500

                group-hover:bg-gold
                group-hover:scale-110
            "
            >
                <Icon
                    className="
                    h-9
                    w-9

                    text-gold

                    transition-all

                    duration-500

                    group-hover:text-brand
                "
                />
            </div>

            <h3
                className="
                mt-8

                text-center

                text-xl

                font-bold

                text-white
            "
            >
                {item.title}
            </h3>
        </motion.div>
    );
}
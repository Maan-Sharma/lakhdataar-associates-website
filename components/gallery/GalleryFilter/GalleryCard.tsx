"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryImage } from "./types";

interface Props {
    image: GalleryImage;
    onClick: () => void;
}

export default function GalleryCard({ image, onClick }: Props) {
    return (
        <motion.div
            layout
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className="
                group
                relative
                aspect-[4/3]
                cursor-pointer
                overflow-hidden
                rounded-2xl
                shadow-lg
            "
        >
            <Image
                src={image.src}
                alt={image.title}
                fill
                priority
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
                    {image.category}
                </span>

                <h3 className="mt-2 text-3xl font-black text-white">
                    {image.title}
                </h3>
            </div>
        </motion.div>
    );
}
"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GalleryImage } from "./types";

interface Props {
    image: GalleryImage | null;
    onClose: () => void;
}

export default function GalleryModal({
    image,
    onClose,
}: Props) {
    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-black/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 z-20 rounded-full bg-white p-2"
                    >
                        <X />
                    </button>

                    <div className="flex h-full items-center justify-center p-6">
                        <motion.div
                            initial={{ scale: .9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: .9 }}
                            className="
                                relative
                                w-full
                                max-w-6xl
                                overflow-hidden
                                rounded-2xl
                            "
                        >
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-brand p-8">
                                <span className="text-sm uppercase tracking-[0.35em] text-gold">
                                    {image.category}
                                </span>

                                <h2 className="mt-3 text-4xl font-black text-white">
                                    {image.title}
                                </h2>

                                <p className="mt-4 max-w-3xl text-lg text-white/80">
                                    {image.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
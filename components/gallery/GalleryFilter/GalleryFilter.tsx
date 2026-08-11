"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";
import { galleryImages } from "./data";

const categories = [
    "All",
    "Coal",
    "Billets",
    "Scrap",
    "Logistics",
    "Industry",
    "Office",
];

export default function GalleryFilter() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<
        (typeof galleryImages)[0] | null
    >(null);

    const filteredImages = useMemo(() => {
        if (selectedCategory === "All") return galleryImages;

        return galleryImages.filter(
            (image) => image.category === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <section className="bg-white py-14 md:py-20">
            <div className="container-width">

                {/* Category Buttons */}

                {/* Category Buttons */}

                <div className="mb-12">

                    <div
                        className="
            flex
            items-center
            gap-2.5
            overflow-x-auto
            pb-2
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:flex-wrap
            sm:justify-center
        "
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    px-4
                    py-2
                    text-[11px]
                    font-semibold
                    transition-all
                    duration-300
                    sm:px-4
                    sm:py-2.5
                    sm:text-sm
                    md:px-5
                    md:text-base

                    ${selectedCategory === category
                                        ? "bg-brand text-white shadow-[0_8px_24px_rgba(8,27,51,0.18)]"
                                        : "bg-slate-100 text-brand hover:bg-slate-200"
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Images */}

                <motion.div
                    layout
                    className="
                        grid
                        gap-6

                        grid-cols-1

                        sm:grid-cols-2

                        lg:grid-cols-3
                    "
                >
                    <AnimatePresence mode="popLayout">

                        {filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                            >
                                <GalleryCard
                                    image={image}
                                    onClick={() =>
                                        setSelectedImage(image)
                                    }
                                />
                            </motion.div>
                        ))}

                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Modal */}

            {selectedImage && (
                <GalleryModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
}
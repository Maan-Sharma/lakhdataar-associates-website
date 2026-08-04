"use client";

import { useState } from "react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";

import { GalleryCategory } from "@/components/gallery/GalleryFilter/types";
import Footer from "@/components/layout/footer/Footer";

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] =
        useState<GalleryCategory>("All");

    return (
        <>
            <TopBar />
            <Navbar />

            <main>
                <GalleryHero />

                <GalleryFilter />
            </main>

            <Footer />
        </>
    );
}
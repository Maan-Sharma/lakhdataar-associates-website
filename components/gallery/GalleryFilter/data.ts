import { GalleryImage } from "./types";

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "/hero.png",
        title: "Coal Stockyard Operations",
        category: "Coal",
        description:
            "Large-scale coal stockyard operations with efficient handling and storage.",
    },
    {
        id: 2,
        src: "/about.jpg",
        title: "Coal Loading & Dispatch",
        category: "Coal",
        description:
            "Rail rake loading and dispatch operations across India.",
    },
    {
        id: 3,
        src: "/billets.jpg",
        title: "Steel Billet Production",
        category: "Billets",
        description:
            "Premium steel billets supplied to major manufacturing industries.",
    },
    {
        id: 4,
        src: "/Rolling.png",
        title: "Industrial Scrap Yard",
        category: "Scrap",
        description:
            "Ferrous and non-ferrous scrap management and recycling.",
    },
    {
        id: 5,
        src: "/cta.jpg",
        title: "Warehouse Logistics",
        category: "Logistics",
        description:
            "Integrated logistics and nationwide transportation network.",
    },
    {
        id: 6,
        src: "/industry.jpg",
        title: "Manufacturing Facility",
        category: "Industry",
        description:
            "Industrial production facility supplying leading businesses.",
    },
];

export const galleryCategories = [
    "All",
    "Coal",
    "Billets",
    "Scrap",
    "Logistics",
    "Industry",
    "Office"
];
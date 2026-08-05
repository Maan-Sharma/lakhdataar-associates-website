import { Product } from "./types";

export const products: Product[] = [
    {
        id: 1,
        slug: "coal",
        title: "Coal Supply",
        image: "/hero.png",
        description:
            "We supply premium-grade thermal coal, coking coal and imported coal for industrial applications. Every shipment is quality tested to ensure consistent performance and reliable delivery.",

        features: [
            "GCV 4200–6800 kcal/kg",
            "Consistent quality & sizing",
            "Domestic & imported coal",
            "Bulk supply across India",
            "Timely dispatch & logistics",
        ],

        industries: [
            "Power Plants",
            "Cement Plants",
            "Sponge Iron",
            "Paper Mills",
            "Textile",
        ],
    },

    {
        id: 2,
        slug: "billets",
        title: "Billets Trading",
        image: "/aboutourstory.jpg",
        description:
            "High-quality MS billets sourced from trusted steel manufacturers with guaranteed dimensions, superior strength and dependable supply.",

        features: [
            "IS-grade billets",
            "Multiple sizes available",
            "Excellent surface finish",
            "Reliable procurement",
            "Competitive pricing",
        ],

        industries: [
            "Rolling Mills",
            "Steel Manufacturers",
            "Foundries",
            "Infrastructure",
        ],
    },

    {
        id: 3,
        slug: "scrap",
        title: "MS Scrap Supply",
        image: "/cta.jpg",
        description:
            "Industrial MS scrap including heavy melting scrap, shredded scrap and structural scrap supplied with complete transparency and quality assurance.",

        features: [
            "HMS 1 & HMS 2",
            "Shredded scrap",
            "Structural scrap",
            "Industrial surplus",
            "Bulk availability",
        ],

        industries: [
            "Steel Plants",
            "Induction Furnaces",
            "Auto Industry",
            "Foundries",
        ],
    },

    {
        id: 4,
        slug: "logistics",
        title: "Industrial Logistics",
        image: "/about.jpg",
        description:
            "Complete logistics solutions including rail rake management, road transportation, bulk cargo handling and end-to-end supply chain support.",

        features: [
            "Rail rake handling",
            "Road transport",
            "Pan-India delivery",
            "Real-time tracking",
            "Dedicated support",
        ],

        industries: [
            "All Bulk Cargo",
            "Power Sector",
            "Steel Industry",
            "Infrastructure",
        ],
    },
];
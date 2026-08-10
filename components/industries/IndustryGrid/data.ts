import {
    Zap,
    Factory,
    Cog,
    Building2,
    Box,
    Truck,
} from "lucide-react";

export interface Industry {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
}

export const industries: Industry[] = [
    {
        id: 1,
        title: "Power Plants",
        description:
            "Consistent steam coal supply for thermal power stations — IPPs, captive and state utilities.",
        image: "/IndustriesHero.png",
        icon: Zap,
    },

    {
        id: 2,
        title: "Steel Plants",
        description:
            "Coking coal, billets and MS scrap for integrated and secondary steel manufacturers.",
        image: "/steel.png",
        icon: Factory,
    },

    {
        id: 3,
        title: "Rolling Mills",
        description:
            "BIS-grade billets delivered to rolling mills of every scale across India.",
        image: "/Rolling.png",
        icon: Cog,
    },

    {
        id: 4,
        title: "Cement Industry",
        description:
            "Pet coke and thermal coal supply for cement kilns — with strict GCV compliance.",
        image: "/cement.jpg",
        icon: Building2,
    },

    {
        id: 5,
        title: "Paper Industry",
        description:
            "Low-ash steam coal for paper mill boilers ensuring efficient combustion.",
        image: "/paper.jpg",
        icon: Box,
    },

    {
        id: 6,
        title: "Infrastructure",
        description:
            "Bulk material and logistics for large-scale infrastructure projects nationwide.",
        image: "/manufacture.png",
        icon: Truck,
    },
];
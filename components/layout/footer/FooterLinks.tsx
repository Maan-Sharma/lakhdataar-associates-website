"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { quickLinks, services } from "./data";

type Props = {
    title: string;
    type: "quick" | "services";
};

const quickLinkRoutes: Record<string, string> = {
    "Home": "/",
    "About Us": "/about",
    "Products & Services": "/products",
    "Industries": "/industries",
    "Clients": "/clients",
    "Gallery": "/gallery",
    "Contact": "/contact",
};

const serviceRoutes: Record<string, string> = {
    "Coal Supply": "/products-services/coal-supply",
    "Billets Trading": "/products-services/billets-trading",
    "MS Scrap Supply": "/products-services/ms-scrap-supply",
    "Industrial Logistics": "/products-services/industrial-logistics",
    "Railway Rake Handling": "/products-services/railway-rake-handling",
    "Bulk Material Transport": "/products-services/bulk-material-transport",
};

export default function FooterLinks({
    title,
    type,
}: Props) {
    const items =
        type === "quick"
            ? quickLinks
            : services;

    const routes =
        type === "quick"
            ? quickLinkRoutes
            : serviceRoutes;

    return (
        <div>

            <h3
                className="
                    text-lg
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                "
            >
                {title}
            </h3>

            <ul className="mt-8 space-y-5">

                {items.map((item) => (

                    <li key={item}>

                        <Link
                            href={routes[item] || "#"}
                            className="
                                group
                                flex
                                items-center
                                justify-between

                                text-[16px]
                                text-white/70

                                transition-all
                                duration-300

                                hover:text-gold
                            "
                        >

                            <span
                                className="
                                    relative

                                    after:absolute
                                    after:bottom-[-4px]
                                    after:left-0

                                    after:h-[1px]
                                    after:w-0

                                    after:bg-gold

                                    after:transition-all
                                    after:duration-300

                                    group-hover:after:w-full
                                "
                            >
                                {item}
                            </span>

                            <ArrowUpRight
                                size={16}
                                className="
                                    -translate-x-2
                                    opacity-0

                                    transition-all
                                    duration-300

                                    group-hover:translate-x-0
                                    group-hover:opacity-100
                                "
                            />

                        </Link>

                    </li>

                ))}

            </ul>

        </div>
    );
}
"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function FooterBottom() {
    const year = new Date().getFullYear();

    return (
        <div
            className="
                footer-bottom

                mt-16

                border-t
                border-white/10

                py-8

                flex
                flex-col
                items-center
                justify-between

                gap-5

                text-sm

                text-white/60

                md:flex-row
            "
        >
            {/* Copyright */}

            <p className="text-center md:text-left">
                © {year}{" "}
                <span className="font-semibold text-white">
                    Lakhdataar Associates India LLP
                </span>
                . All Rights Reserved.
            </p>

            {/* Links */}

            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-6
                "
            >
                <Link
                    href="/privacy-policy"
                    className="
                        transition-colors
                        duration-300

                        hover:text-gold
                    "
                >
                    Privacy Policy
                </Link>

                <Link
                    href="/terms"
                    className="
                        transition-colors
                        duration-300

                        hover:text-gold
                    "
                >
                    Terms & Conditions
                </Link>

                <Link
                    href="/contact"
                    className="
                        transition-colors
                        duration-300

                        hover:text-gold
                    "
                >
                    Contact
                </Link>
            </div>

            {/* Credit */}

            <p
                className="
                    flex
                    items-center
                    gap-2
                    text-center
                "
            >
                Crafted with

                <Heart
                    size={15}
                    className="fill-gold text-gold"
                />

                by

                <Link
                    href="https://kernelhive.com"
                    className="
                        font-semibold
                        text-gold

                        transition-opacity
                        hover:opacity-80
                    "
                >
                    KernelHive
                </Link>
            </p>
        </div>
    );
}
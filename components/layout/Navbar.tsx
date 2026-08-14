"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products & Services", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Clients", href: "/clients" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="
                sticky
                top-0
                z-50
                w-full
                border-b
                border-slate-200/70
                bg-white/90
                shadow-[0_10px_30px_rgba(8,27,51,0.06)]
                backdrop-blur-xl
            "
        >
            <div className="container-custom">

                <div
                    className="
                        flex
                        h-16
                        items-center
                        justify-between
                        sm:h-18
                        lg:h-20
                    "
                >

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        className="shrink-0"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/logo.png"
                            alt="Lakhdataar Associates"
                            width={260}
                            height={70}
                            priority
                            className="
                                h-10
                                w-auto
                                sm:h-12
                                lg:h-14
                            "
                        />
                    </Link>


                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <nav
                        className="
                            hidden
                            items-center
                            gap-8
                            xl:flex
                        "
                    >
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    relative
                                    pb-1
                                    text-[15px]
                                    font-medium
                                    tracking-[0.01em]
                                    transition-all
                                    duration-300

                                    ${index === 0
                                        ? `
                                                text-brand

                                                after:absolute
                                                after:left-0
                                                after:-bottom-1
                                                after:h-0.5
                                                after:w-full
                                                after:bg-gold
                                            `
                                        : `
                                                text-slate-700
                                                hover:text-brand
                                            `
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>


                    {/* ================= DESKTOP GET QUOTE ================= */}
                    <div className="hidden xl:block">

                        <Link
                            href="/contact"
                            className="
                                inline-flex
                                items-center
                                justify-center

                                rounded-full

                                bg-brand

                                px-6
                                py-2.5

                                text-sm
                                font-semibold
                                text-white

                                shadow-lg
                                shadow-black/10

                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:bg-[#0b294f]
                                hover:shadow-xl
                            "
                        >
                            Get Quote
                        </Link>

                    </div>


                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            rounded-full
                            border
                            border-slate-200
                            bg-slate-50
                            p-2.5
                            text-brand
                            transition
                            hover:bg-slate-100
                            xl:hidden
                        "
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>

                </div>
            </div>


            {/* ================= MOBILE MENU ================= */}
            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    xl:hidden

                    ${isOpen
                        ? "max-h-[32rem]"
                        : "max-h-0"
                    }
                `}
            >

                <div
                    className="
                        border-t
                        border-slate-200
                        bg-white
                        shadow-[0_20px_40px_rgba(8,27,51,0.08)]
                    "
                >

                    <nav
                        className="
                            container-custom
                            flex
                            flex-col
                            py-5
                        "
                    >

                        {/* MOBILE NAV LINKS */}
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="
                                    border-b
                                    border-slate-100
                                    py-4
                                    text-[15px]
                                    font-medium
                                    text-slate-700
                                    transition
                                    hover:text-brand
                                "
                            >
                                {item.name}
                            </Link>
                        ))}


                        {/* MOBILE GET QUOTE */}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="
                                mt-6

                                rounded-full

                                bg-brand

                                py-3.5

                                text-center
                                text-sm
                                font-semibold
                                text-white

                                transition

                                hover:bg-[#0b294f]
                            "
                        >
                            Get Quote
                        </Link>

                    </nav>
                </div>

            </div>

        </header>
    );
}
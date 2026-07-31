"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Products & Services", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Clients", href: "#clients" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="container-custom">

                <div className="flex h-20 lg:h-24 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Lakhdataar Associates"
                            width={260}
                            height={70}
                            priority
                            className="h-12 w-auto lg:h-14"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative pb-1 text-[16px] font-medium transition-colors duration-300
                  ${index === 0
                                        ? "text-brand after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gold"
                                        : "text-slate-700 hover:text-brand"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden xl:block">
                        <button className="rounded-lg bg-brand px-7 py-3 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b294f] hover:shadow-xl">
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden rounded-lg border p-2 text-brand transition hover:bg-gray-100"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px]" : "max-h-0"
                    }`}
            >
                <div className="border-t bg-white shadow-lg">

                    <nav className="container-custom flex flex-col py-6">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-gray-100 py-4 text-lg font-medium text-slate-700 transition hover:text-brand"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button className="mt-6 rounded-lg bg-brand py-4 text-white font-semibold transition hover:bg-[#0b294f]">
                            Get Quote
                        </button>

                    </nav>
                </div>
            </div>
        </header>
    );
}
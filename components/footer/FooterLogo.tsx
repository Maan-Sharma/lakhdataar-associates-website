"use client";

import Link from "next/link";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function FooterLogo() {
    return (
        <div>

            {/* Logo */}

            <Link
                href="/"
                className="flex items-center gap-4"
            >
                <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gold/30
                    bg-white/5
                "
                >
                    <span className="text-2xl font-black text-gold">
                        L
                    </span>
                </div>

                <div>

                    <h3 className="text-xl font-black uppercase tracking-wide">
                        Lakhdataar
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gold">
                        Associates India LLP
                    </p>

                </div>

            </Link>

            {/* Description */}

            <p
                className="
                mt-8
                max-w-sm
                text-[16px]
                leading-8
                text-white/70
            "
            >
                Fueling Industries. Powering Growth.

                Trusted supplier of coal, billets,
                MS scrap and industrial raw materials
                across India since 2017.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">
                <SocialButton
                    href="#"
                    icon={<FaLinkedinIn size={18} />}
                />

                <SocialButton
                    href="#"
                    icon={<FaFacebookF size={18} />}
                />

                <SocialButton
                    href="#"
                    icon={<FaXTwitter size={18} />}
                />

                <SocialButton
                    href="#"
                    icon={<FaInstagram size={18} />}
                />

            </div>

        </div>
    );
}

type SocialButtonProps = {
    href: string;
    icon: React.ReactNode;
};

function SocialButton({
    href,
    icon,
}: SocialButtonProps) {
    return (
        <Link
            href={href}
            className="
                group

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                border
                border-white/10

                bg-white/5

                text-white/70

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-gold
                hover:bg-gold
                hover:text-brand
            "
        >
            {icon}
        </Link>
    );
}
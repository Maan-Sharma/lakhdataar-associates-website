"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".footer-column", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

            gsap.from(".footer-bottom", {
                opacity: 0,
                y: 30,
                duration: 0.8,

                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="
                bg-[#081B33]
                text-white
                overflow-hidden
            "
        >
            <div className="container-width">

                <div
                    className="
                        grid
                        gap-14

                        py-20

                        sm:grid-cols-2

                        lg:grid-cols-4
                    "
                >
                    <div className="footer-column">
                        <FooterLogo />
                    </div>

                    <div className="footer-column">
                        <FooterLinks
                            title="Quick Links"
                            type="quick"
                        />
                    </div>

                    <div className="footer-column">
                        <FooterLinks
                            title="Our Services"
                            type="services"
                        />
                    </div>

                    <div className="footer-column">
                        <FooterContact />
                    </div>
                </div>

                <FooterBottom />

            </div>
        </footer>
    );
}

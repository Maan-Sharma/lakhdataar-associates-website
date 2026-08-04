"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
    value: string;
    label: string;
};

export default function StatCard({ value, label }: Props) {
    const numberRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!numberRef.current) return;

        const numeric = parseInt(value.replace(/\D/g, ""));

        const counter = { val: 0 };

        gsap.to(counter, {
            val: numeric,
            duration: 2,
            ease: "power3.out",
            onUpdate: () => {
                if (!numberRef.current) return;
                numberRef.current.innerHTML =
                    Math.floor(counter.val) + value.replace(/[0-9]/g, "");
            },
        });
    }, [value]);

    return (
        <div className="group flex flex-col items-center justify-center py-12 transition-all duration-500 hover:-translate-y-2">
            <h3
                ref={numberRef}
                className="text-5xl md:text-6xl font-black text-gold"
            >
                0
            </h3>

            <div className="mt-4 h-px w-12 bg-gold/30 transition-all group-hover:w-20" />

            <p className="mt-4 text-center text-sm uppercase tracking-[0.25em] text-white/80">
                {label}
            </p>
        </div>
    );
}
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export function useHeroAnimation() {
    useGSAP(() => {

        const split = new SplitType(".hero-title", {
            types: "chars,words"
        });

        gsap.set(split.chars, {
            opacity: 0,
            y: 120,
            rotateX: -90,
            filter: "blur(10px)"
        });

        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out"
            }
        });

        tl.from(".hero-badge", {
            y: 40,
            opacity: 0,
            duration: 0.7
        })

            .to(split.chars, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                stagger: 0.025,
                duration: 1.2
            })

            .from(".hero-desc", {
                opacity: 0,
                y: 40,
                duration: 0.8
            }, "-=0.7")

            .from(".hero-buttons", {
                opacity: 0,
                y: 30,
                duration: 0.7
            }, "-=0.5");

    });
}
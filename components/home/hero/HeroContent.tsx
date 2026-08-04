"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import HeroButtons from "./HeroButtons";


export default function HeroContent() {

    const titleRef = useRef<HTMLHeadingElement>(null);


    useEffect(() => {

        if (!titleRef.current) return;


        // Respect reduced motion users
        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }


        const split = new SplitType(titleRef.current, {
            types: "lines,words,chars",
        });


        gsap.set(split.chars, {

            yPercent: 100,
            opacity: 0,

        });



        const timeline = gsap.timeline({

            defaults: {
                ease: "power4.out",
            }

        });



        timeline
            .from(".hero-badge", {

                opacity: 0,
                y: 20,
                duration: .5,

            })

            .to(split.chars, {

                yPercent: 0,
                opacity: 1,
                stagger: .015,
                duration: .8,

            }, "-=.2")


            .from(".hero-desc", {

                opacity: 0,
                y: 20,
                duration: .5,

            }, "-=.4")


            .from(".hero-marquee", {

                opacity: 0,
                y: 20,
                duration: .5,

            }, "-=.3")


            .from(".hero-buttons", {

                opacity: 0,
                y: 20,
                duration: .5,

            }, "-=.3");



        return () => {

            timeline.kill();

            split.revert();

        };


    }, []);



    return (

        <div
            className="
                w-full

                max-w-3xl

                px-1

                sm:px-0
            "
        >



            {/* Badge */}

            <div
                className="
                    hero-badge

                    inline-flex
                    items-center

                    gap-2

                    rounded-full

                    border
                    border-white/15

                    bg-white/5

                    backdrop-blur-md


                    px-4
                    py-2


                    sm:px-5
                    sm:py-2.5
                "
            >

                <span
                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-gold
                    "
                />


                <span
                    className="
                        text-[10px]

                        font-medium

                        uppercase

                        tracking-[0.25em]

                        text-gold


                        sm:text-xs
                    "
                >

                    TRUSTED SINCE 2017

                </span>


            </div>




            {/* Heading */}


            <h1

                ref={titleRef}

                className="
                    hero-title


                    mt-5


                    font-black


                    tracking-[-0.045em]

                    leading-[0.92]


                    text-white



                    text-[clamp(2.2rem,8vw,3rem)]



                    sm:text-[clamp(3rem,6vw,4rem)]


                    lg:text-[clamp(4rem,5vw,5.5rem)]

                "

            >

                LAKHDATAAR

                <br />


                <span className="text-gold">

                    ASSOCIATES

                </span>


                <br />


                INDIA LLP


            </h1>





            {/* Description */}


            <p

                className="
                    hero-desc

                    mt-5

                    max-w-md


                    text-sm

                    leading-6

                    text-white/75



                    sm:max-w-lg

                    sm:text-base

                    sm:leading-7



                    lg:max-w-xl

                    lg:text-lg

                    lg:leading-8
                "

            >

                India's trusted supplier of coal, billets, MS scrap and
                industrial raw materials with dependable pan-India logistics.

            </p>





            {/* Marquee */}



            <div

                className="
                    hero-marquee

                    mt-6


                    overflow-hidden


                    border-y

                    border-white/10


                    py-3


                    sm:mt-8

                "

            >


                <div

                    className="
                        marquee-track

                        flex

                        w-max

                        whitespace-nowrap

                    "

                >


                    <div className="flex items-center">


                        <div className="flex items-center">
                            <span
                                className="
            mx-4
            text-[10px]
            uppercase
            font-medium
            tracking-[0.22em]
            text-white/60
            sm:mx-6
            sm:text-sm
            lg:text-lg
        "
                            >
                                Fueling Industries

                                <span className="mx-3 text-gold">
                                    •
                                </span>

                                Powering Growth

                                <span className="mx-3 text-gold">
                                    •
                                </span>
                            </span>
                        </div>



                    </div>


                </div>


            </div>





            {/* Buttons */}



            <div

                className="
                    hero-buttons

                    mt-6

                    sm:mt-8

                "

            >

                <HeroButtons />


            </div>




        </div>

    );

}
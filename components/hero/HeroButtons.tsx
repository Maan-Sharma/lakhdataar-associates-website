import { ArrowRight, Phone } from "lucide-react";

export default function HeroButtons() {
    return (
        <div
            className="
                flex
                w-full
                flex-col
                gap-3

                sm:flex-row
                sm:gap-4

                lg:gap-5
            "
        >

            {/* Request Quote */}

            <button
                aria-label="Request a Quote"
                className="
                    group

                    flex
                    w-full
                    sm:w-auto

                    min-h-[52px]

                    items-center
                    justify-center

                    gap-3

                    rounded-xl

                    bg-gold

                    px-6
                    py-3.5

                    text-sm
                    font-semibold

                    text-brand

                    shadow-lg
                    shadow-black/10

                    transition-all
                    duration-300

                    active:scale-95

                    sm:min-w-[190px]

                    lg:px-8
                    lg:py-4
                    lg:text-base


                    hover:-translate-y-1
                    hover:shadow-2xl

                    motion-safe:hover:-translate-y-1
                "
            >

                <span className="whitespace-nowrap">
                    Request a Quote
                </span>


                <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="
                        shrink-0

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                    "
                />

            </button>



            {/* Explore Products */}

            <button
                aria-label="Explore Products"
                className="
                    group

                    flex
                    w-full
                    sm:w-auto

                    min-h-[52px]

                    items-center
                    justify-center

                    gap-3

                    rounded-xl

                    border
                    border-white/20

                    bg-white/10

                    px-6
                    py-3.5


                    text-sm
                    font-medium

                    text-white

                    backdrop-blur-md


                    transition-all
                    duration-300


                    active:scale-95


                    sm:min-w-[190px]


                    lg:px-8
                    lg:py-4
                    lg:text-base



                    hover:bg-white/20

                "
            >

                <Phone
                    size={18}
                    strokeWidth={2}
                    className="
                        shrink-0
                    "
                />


                <span className="whitespace-nowrap">
                    Explore Products
                </span>


            </button>


        </div>
    );
}
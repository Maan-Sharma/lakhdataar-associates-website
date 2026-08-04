import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-105 overflow-hidden sm:h-115 lg:h-130">

            {/* Background Image */}

            <Image
                src="/aboutmain.jpg"
                alt="About Lakhdataar"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-[#081B33]/75" />

            {/* Gradient */}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(8,27,51,.72) 0%, rgba(8,27,51,.48) 40%, rgba(8,27,51,.18) 75%, rgba(8,27,51,0) 100%)",
                }}
            />
            <div className="relative z-10 flex h-full items-center">

                <div className="container-custom">

                    <div className="max-w-4xl">

                        <div className="inline-flex rounded-full border border-gold/40 bg-white/5 px-4 py-2 backdrop-blur-md sm:px-5">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
                                About Us
                            </span>

                        </div>

                        <h1
                            className="
                            mt-6

                            text-[2rem]

                            font-black

                            leading-none

                            tracking-tight

                            text-white

                            sm:mt-8

                            sm:text-5xl

                            lg:text-6xl
                        "
                        >
                            Fueling India's
                            <br />
                            Industrial Engine.
                        </h1>

                        <p
                            className="
                            mt-5

                            max-w-2xl

                            text-sm

                            leading-7

                            text-white/80

                            sm:mt-7

                            sm:text-base

                            sm:leading-8

                            lg:text-lg
                        "
                        >
                            A story of trust, transparency and relentless
                            commitment to industrial excellence since 2017.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
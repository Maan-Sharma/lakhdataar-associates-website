import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[520px] overflow-hidden lg:h-[620px]">

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

                        <div className="inline-flex rounded-full border border-gold/40 bg-white/5 px-5 py-2 backdrop-blur-md">

                            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                                About Us
                            </span>

                        </div>

                        <h1
                            className="
                            mt-8

                            text-[2.8rem]

                            font-black

                            leading-[0.95]

                            tracking-tight

                            text-white

                            sm:text-6xl

                            lg:text-7xl
                        "
                        >
                            Fueling India's
                            <br />
                            Industrial Engine.
                        </h1>

                        <p
                            className="
                            mt-8

                            max-w-2xl

                            text-lg

                            leading-9

                            text-white/80

                            lg:text-2xl
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
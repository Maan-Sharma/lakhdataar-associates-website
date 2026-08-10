import Image from "next/image";

export default function IndustriesHero() {
    return (
        <section className="relative min-h-[420px] overflow-hidden bg-[#09203d] sm:min-h-[460px] lg:min-h-[500px]">

            {/* Background Image */}

            <Image
                src="/IndustriesHero.png"
                alt="Industries served"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-[#071d39]/50" />

            {/* Left-to-right gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#071d39]/95 via-[#0b2949]/75 to-[#071d39]/30" />

            {/* Content */}

            <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[460px] sm:px-8 lg:min-h-[500px] lg:px-10">

                <div className="max-w-6xl">

                    {/* Badge */}

                    <div className="mb-6 inline-flex rounded-full border border-[#D4A81E]/70 bg-[#0b2949]/40 px-4 py-2 sm:mb-7">

                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A81E] sm:text-xs">
                            Industries Served
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="max-w-6xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">

                        Powering India’s core sectors.

                    </h1>

                    {/* Description */}

                    <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 md:text-xl">

                        From power grids to steel mills, our raw materials keep
                        India’s critical infrastructure moving.

                    </p>

                </div>

            </div>

        </section>
    );
}
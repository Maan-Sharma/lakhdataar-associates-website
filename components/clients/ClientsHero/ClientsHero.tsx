import Image from "next/image";

export default function ClientsHero() {
    return (
        <section
            className="
                relative
                min-h-[360px]
                w-full
                overflow-hidden
                sm:min-h-[400px]
                lg:min-h-[430px]
            "
        >
            {/* Background Image */}

            <Image
                src="/steel.png"
                alt="Industrial operations"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Dark Navy Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[#071d39]/50
                "
            />

            {/* Additional gradient */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#071d39]
                    via-[#071d39]/80
                    to-[#071d39]/35
                "
            />

            {/* Content */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[360px]
                    max-w-[1400px]
                    items-center
                    px-6
                    py-16
                    sm:min-h-[400px]
                    sm:px-10
                    lg:min-h-[430px]
                    lg:px-16
                "
            >
                <div className="max-w-[1150px]">

                    {/* Label */}

                    <div
                        className="
                            mb-5
                            inline-flex
                            rounded-full
                            border
                            border-[#D4A81E]
                            px-3
                            py-1.5
                            sm:px-4
                            sm:py-2
                        "
                    >
                        <span
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#D4A81E]
                                sm:text-xs
                            "
                        >
                            Our Clients
                        </span>
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                            max-w-[1150px]
                            text-4xl
                            font-extrabold
                            leading-[1.05]
                            tracking-[-0.03em]
                            text-white
                            sm:text-5xl
                            lg:text-[58px]
                            xl:text-[62px]
                        "
                    >
                        Trusted by India’s industrial leaders.
                    </h1>

                    {/* Description */}

                    <p
                        className="
                            mt-5
                            max-w-[650px]
                            text-base
                            leading-7
                            text-white/75
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        A growing family of 500+ clients across power,
                        steel, cement, and manufacturing sectors.
                    </p>

                </div>
            </div>
        </section>
    );
}
import Image from "next/image";

export default function ProductHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="relative h-[380px] sm:h-[450px] lg:h-[520px] w-full">

                <Image
                    src="/aboutourstory.jpg"   // change to your hero image
                    alt="Products Hero"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#081B33]/15" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#081B33] via-[#081B33]/80 to-transparent" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-8">

                    <div className="max-w-4xl">

                        {/* Badge */}

                        <span
                            className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-[#D4A017]/40
                            px-4
                            py-2
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-[#D4A017]
                            sm:text-xs
                        "
                        >
                            Products & Services
                        </span>

                        {/* Heading */}

                        <h1
                            className="
                            mt-6
                            max-w-5xl
                            text-4xl
                            font-bold
                            leading-tight
                            text-white

                            sm:text-5xl

                            lg:text-7xl
                        "
                        >
                            A single-window industrial supply partner.
                        </h1>

                        {/* Description */}

                        <p
                            className="
                            mt-6
                            max-w-3xl
                            text-base
                            leading-8
                            text-white/80

                            sm:text-lg
                        "
                        >
                            Coal, billets, MS scrap and end-to-end logistics —
                            delivered with quality, transparency and speed.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}
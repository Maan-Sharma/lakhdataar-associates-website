import Image from "next/image";

export default function ContactHero() {
    return (
        <section className="relative min-h-[420px] w-full overflow-hidden bg-[#071d38] sm:min-h-[460px] lg:min-h-[500px]">

            {/* Background Image */}
            <Image
                src="/manufacture.png"
                alt="Industrial logistics and port operations"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Dark blue overlay */}
            <div className="absolute inset-0 bg-[#061c38]/75" />

            {/* Left-to-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061c38]/95 via-[#071f3d]/75 to-[#061c38]/30" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1280px] items-center px-6 py-16 sm:min-h-[460px] sm:px-8 lg:min-h-[500px] lg:px-10">

                <div className="max-w-[900px]">

                    {/* Label */}
                    <div className="mb-5 inline-flex items-center rounded-full border border-[#d9aa17] px-4 py-1.5 sm:mb-6">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0b21e] sm:text-xs">
                            Contact
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-[900px] text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]">
                        Let’s power your operations.
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-[700px] text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                        Reach out for quotes, partnerships or general enquiries.
                        Our team responds within 24 hours.
                    </p>

                </div>

            </div>
        </section>
    );
}
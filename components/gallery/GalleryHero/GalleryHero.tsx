import Image from "next/image";

export default function GalleryHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}

            <div className="relative h-[300px] sm:h-[380px] lg:h-[520px]">

                <Image
                    src="/hero.png"
                    alt="Gallery Banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/90 via-[#081B33]/75 to-[#081B33]/35" />

                {/* Content */}

                <div className="absolute inset-0 flex items-center">

                    <div className="container-custom w-full">

                        <div className="max-w-4xl">

                            {/* Badge */}

                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    border
                                    border-gold/40
                                    bg-gold/10
                                    px-5
                                    py-2
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.35em]
                                    text-gold

                                    sm:text-xs
                                "
                            >
                                Gallery
                            </span>

                            {/* Heading */}

                            <h1
                                className="
                                    mt-6

                                    text-4xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-white

                                    sm:text-5xl

                                    lg:text-7xl
                                "
                            >
                                A glimpse of our
                                <br />
                                operations.
                            </h1>

                            {/* Description */}

                            <p
                                className="
                                    mt-6
                                    max-w-2xl

                                    text-base
                                    leading-8
                                    text-white/75

                                    sm:text-lg

                                    lg:text-2xl
                                    lg:leading-10
                                "
                            >
                                Explore images from our coal stockyards,
                                dispatch centers, manufacturing facilities
                                and logistics operations across India.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
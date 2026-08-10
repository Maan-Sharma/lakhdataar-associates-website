import Image from "next/image";
import { industries } from "./data";

export default function IndustryGrid() {
    return (
        <section className="w-full bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[1400px]">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {industries.map((industry) => {
                        const Icon = industry.icon;

                        return (
                            <article
                                key={industry.id}
                                className="
                                    group
                                    relative
                                    h-[340px]
                                    overflow-hidden
                                    rounded-xl
                                    bg-[#09213d]
                                    shadow-[0_8px_25px_rgba(7,29,57,0.15)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_15px_35px_rgba(7,29,57,0.25)]
                                    sm:h-[350px]
                                    lg:h-[360px]
                                "
                            >

                                {/* IMAGE */}

                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    priority={industry.id <= 3}
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                    "
                                />

                                {/* DARK OVERLAY */}

                                <div className="absolute inset-0 bg-[#071d39]/10" />

                                {/* BOTTOM GRADIENT */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#071d39]
                                        via-[#071d39]/75
                                        via-45%
                                        to-transparent
                                    "
                                />

                                {/* CONTENT */}

                                <div
                                    className="
                                        absolute
                                        inset-x-0
                                        bottom-0
                                        z-10
                                        p-7
                                        sm:p-6
                                        lg:p-7
                                    "
                                >

                                    {/* ICON */}

                                    <div
                                        className="
                                            mb-5
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-[#D8AA1E]
                                            shadow-md
                                        "
                                    >
                                        <Icon
                                            size={29}
                                            strokeWidth={1.8}
                                            className="text-[#071d39]"
                                        />
                                    </div>

                                    {/* TITLE */}

                                    <h2
                                        className="
                                            text-[24px]
                                            font-extrabold
                                            leading-tight
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        {industry.title}
                                    </h2>

                                    {/* DESCRIPTION */}

                                    <p
                                        className="
                                            mt-3
                                            max-w-[500px]
                                            text-[15px]
                                            font-medium
                                            leading-6
                                            text-white/75
                                        "
                                    >
                                        {industry.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
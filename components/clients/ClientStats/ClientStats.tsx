const stats = [
    {
        value: "50+",
        label: "Trusted Clients",
    },
    {
        value: "15+",
        label: "States Covered",
    },
    {
        value: "500k+",
        label: "Tonnes Delivered",
    },
];

export default function ClientStats() {
    return (
        <section
            className="
                w-full
                bg-white
                px-5
                py-14
                sm:px-8
                sm:py-16
                lg:px-10
                lg:py-20
            "
        >
            <div className="mx-auto max-w-[1400px]">

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-3
                        sm:gap-6
                    "
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                                flex
                                min-h-[140px]
                                flex-col
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#09213d]
                                px-5
                                py-8
                                text-center
                                sm:min-h-[140px]
                                lg:min-h-[140px]
                            "
                        >
                            <span
                                className="
                                    text-4xl
                                    font-extrabold
                                    leading-none
                                    tracking-tight
                                    text-[#F0C94A]
                                    sm:text-[44px]
                                    lg:text-[48px]
                                "
                            >
                                {stat.value}
                            </span>

                            <span
                                className="
                                    mt-4
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.14em]
                                    text-white/75
                                    sm:text-sm
                                "
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
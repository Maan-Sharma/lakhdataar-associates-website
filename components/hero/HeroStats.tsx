const stats = [
    {
        number: "7+",
        label: "Years",
    },
    {
        number: "50+",
        label: "Clients",
    },
    {
        number: "500K+",
        label: "Tonnes",
    },
    {
        number: "24/7",
        label: "Support",
    },
];

export default function HeroStats() {
    return (
        <div className="mt-20 flex flex-wrap gap-16">

            {stats.map((item) => (
                <div
                    key={item.label}
                    className="border-l-2 border-gold pl-5"
                >
                    <h3 className="text-5xl font-black text-white">

                        {item.number}

                    </h3>

                    <p className="mt-2 text-lg uppercase tracking-wider text-white/70">

                        {item.label}

                    </p>
                </div>
            ))}

        </div>
    );
}
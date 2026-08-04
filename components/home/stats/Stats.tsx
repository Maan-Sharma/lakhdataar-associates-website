import StatCard from "./StatCard";

const stats = [
    {
        value: "7+",
        label: "Years of Excellence",
    },
    {
        value: "50+",
        label: "Trusted Clients",
    },
    {
        value: "500K+",
        label: "Tonnes Supplied",
    },
    {
        value: "15+",
        label: "States Covered",
    },
];

export default function Stats() {
    return (
        <section className="bg-brand">
            <div className="container-width">

                <div
                    className="
          grid
          grid-cols-2
          lg:grid-cols-4
          divide-white/10
          border-y
          border-white/10
          "
                >
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="
              border-white/10
              even:border-l
              lg:border-l
              first:border-l-0
              "
                        >
                            <StatCard {...item} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
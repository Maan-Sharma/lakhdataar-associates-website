import TeamCard from "./TeamCard";
import { teamMembers } from "./data";

export default function Team() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">

            <div className="container-custom">

                <div className="mx-auto max-w-3xl text-center">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-gold/10
                            px-5
                            py-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-gold
                        "
                    >
                        Leadership
                    </span>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-black
                            text-brand
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Meet the leadership.
                    </h2>

                    <p className="mt-6 text-lg text-slate-500">
                        A team of industry veterans dedicated to fueling your success.
                    </p>

                </div>

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.name}
                            member={member}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}
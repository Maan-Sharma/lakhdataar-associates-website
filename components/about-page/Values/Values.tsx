import ValueCard from "./ValueCard";
import { values } from "./data";

export default function Values() {
    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="container-custom">

                <div className="mx-auto max-w-4xl text-center">

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
                        Core Values
                    </span>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-black
                            leading-tight
                            text-brand
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        The principles that
                        <br />
                        power us.
                    </h2>

                </div>

                <div
                    className="
                        mt-20
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-5
                    "
                >
                    {values.map((item) => (

                        <ValueCard
                            key={item.title}
                            item={item}
                        />

                    ))}
                </div>

            </div>

        </section>
    );
}
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
    "Assured Quality",
    "Timely Delivery",
    "Transparent Pricing",
    "Pan-India Reach",
];

export default function about() {
    return (
        <section
            id="about"
            className="bg-white py-24 lg:py-32"
        >
            <div className="container-custom">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="relative">

                        <div className="overflow-hidden rounded-3xl shadow-2xl">

                            <Image
                                src="/about.jpg"
                                alt="Coal Mining"
                                width={900}
                                height={900}
                                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[700px]"
                            />

                        </div>

                        {/* Floating Card */}

                        <div
                            className="
              absolute
              -bottom-8
              right-6

              rounded-3xl
              bg-gold
              p-8

              shadow-2xl

              lg:right-10
            "
                        >
                            <h3 className="text-6xl font-black text-brand">
                                2017
                            </h3>

                            <p className="mt-3 max-w-[180px] text-lg font-medium leading-7 text-brand">
                                Founded with a vision to power India's industries.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        {/* Badge */}

                        <div className="inline-flex rounded-full bg-gold/10 px-5 py-2">

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                                About Us
                            </span>

                        </div>

                        {/* Heading */}

                        <h2
                            className="
              mt-6

              text-4xl
              font-bold
              leading-tight
              tracking-tight

              text-brand

              md:text-5xl

              xl:text-6xl
              "
                        >
                            Powering India's
                            <br />

                            industrial ambition,
                            <br />

                            one delivery at a time.
                        </h2>

                        {/* Description */}

                        <p
                            className="
              mt-8

              text-lg
              leading-9

              text-slate-600
              "
                        >
                            LAKHDATAAR ASSOCIATES INDIA LLP is a trusted supplier of coal,
                            billets, MS scrap and industrial raw materials. For over seven
                            years we have partnered with steel manufacturers, power plants,
                            cement industries and infrastructure companies across India,
                            delivering dependable materials backed by reliable logistics and
                            long-term relationships.
                        </p>

                        {/* Features */}

                        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">

                            {features.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-gold" />

                                    <span className="text-lg font-medium text-brand">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* CTA */}

                        <button
                            className="
              group

              mt-12

              flex
              items-center
              gap-3

              text-xl
              font-semibold

              text-brand
              "
                        >
                            Learn More

                            <ArrowRight
                                className="transition-transform duration-300 group-hover:translate-x-2"
                            />

                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}
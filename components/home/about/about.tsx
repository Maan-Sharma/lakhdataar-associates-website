"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
    "Assured Quality",
    "Timely Delivery",
    "Transparent Pricing",
    "Pan-India Reach",
];

export default function about() {
    const router = useRouter();

    return (
        <section
            id="about"
            className="bg-white py-16 sm:py-20 lg:py-32"
        >
            <div className="container-custom">

                <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT */}

                    <div className="relative">

                        <div className="overflow-hidden rounded-3xl shadow-2xl">

                            <Image
                                src="/about.jpg"
                                alt="Coal Mining"
                                width={900}
                                height={900}
                                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] lg:h-[700px]"
                            />

                        </div>

                        {/* Floating Card */}

                        <div
                            className="
              absolute
              -bottom-5
              right-3

              rounded-3xl
              bg-gold
              p-5

              shadow-2xl

              sm:-bottom-8
              sm:right-6
              sm:p-8

              lg:right-10
            "
                        >
                            <h3 className="text-4xl font-black text-brand sm:text-5xl lg:text-6xl">
                                2017
                            </h3>

                            <p className="mt-3 max-w-[150px] text-sm font-medium leading-6 text-brand sm:max-w-[180px] sm:text-lg sm:leading-7">
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

              text-[clamp(2rem,5vw,3.5rem)]
              font-bold
              leading-tight
              tracking-tight

              text-brand
              "
                        >
                            DELIVERING QUALITY
                            <br />

                            RAW MATERIALS & BUILDING,
                            <br />

                            STRONGER INDUSTRIES.
                        </h2>

                        {/* Description */}

                        <p
                            className="
              mt-8

              text-sm
              leading-7

              text-slate-600

              sm:text-base
              sm:leading-8

              lg:text-lg
              lg:leading-9
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

                        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">

                            {features.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-gold" />

                                    <span className="text-base font-medium text-brand sm:text-lg">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* CTA */}

                        <button
                            onClick={() => router.push("/about")}
                            className="
              group

              mt-10

              flex
              items-center
              gap-3

              text-lg
              font-semibold

              text-brand

              sm:mt-12
              sm:text-xl
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
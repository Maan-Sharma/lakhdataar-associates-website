import Image from "next/image";
import StoryStats from "./StoryStats";

export default function OurStory() {
    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="container-custom">

                <div className="mx-auto max-w-6xl">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">

                        {/* LEFT */}

                        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:justify-self-center lg:text-left">

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
                                tracking-[0.30em]
                                text-gold
                            "
                            >
                                Our Story
                            </span>

                            <h2
                                className="
                                mt-6
                                text-4xl
                                font-black
                                leading-tight
                                tracking-tight
                                text-brand
                                sm:text-5xl
                                lg:text-6xl
                            "
                            >
                                Seven years.
                                <br />
                                Millions of tonnes.
                                <br />
                                One promise.
                            </h2>

                            <p
                                className="
                                mt-8
                                text-lg
                                leading-9
                                text-slate-600
                            "
                            >
                                Founded in <strong>2017</strong>, LAKHDATAAR
                                ASSOCIATES INDIA LLP has grown into one of Eastern
                                India's trusted suppliers of coal, billets, MS
                                scrap and industrial raw materials.

                                We proudly serve steel plants, cement industries,
                                power producers and infrastructure companies across
                                India with dependable sourcing and logistics.
                            </p>

                            <p
                                className="
                                mt-6
                                text-lg
                                leading-9
                                text-slate-600
                            "
                            >
                                Our success is built on long-term partnerships,
                                transparent pricing, consistent quality and timely
                                deliveries. Every truck we dispatch and every rake
                                we coordinate reflects our commitment to powering
                                India's industrial growth.
                            </p>

                            <StoryStats />

                        </div>

                        {/* RIGHT */}

                        <div className="relative mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

                            <Image
                                src="/aboutourstory.jpg"
                                alt="Industrial Facility"
                                width={700}
                                height={850}
                                className="
                                h-162.5
                                w-full
                                rounded-3xl
                                object-cover
                                shadow-2xl
                            "
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
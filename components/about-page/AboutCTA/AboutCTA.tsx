import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="bg-brand py-24 lg:py-32">

            <div className="container-custom">

                <div className="mx-auto max-w-4xl text-center">

                    <h2
                        className="
                            text-4xl
                            font-black
                            leading-tight
                            text-white

                            sm:text-5xl

                            lg:text-6xl
                        "
                    >
                        Ready to partner with us?
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-white/70
                        "
                    >
                        Let's discuss how we can fuel your operations with
                        dependable raw material sourcing and logistics
                        solutions across India.
                    </p>

                    <Link
                        href="/contact"
                        className="
                            group
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-gold
                            px-10
                            py-5
                            text-lg
                            font-bold
                            text-brand
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-2xl
                        "
                    >
                        Contact Us

                        <ArrowRight
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-2
                            "
                        />
                    </Link>

                </div>

            </div>

        </section>
    );
}
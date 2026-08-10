import { Building2, Award } from "lucide-react";
import { clients } from "./data";

export default function ClientList() {
    return (
        <section
            className="
                w-full
                bg-white
                px-5
                py-16
                sm:px-8
                sm:py-20
                lg:px-10
                lg:py-24
            "
        >
            <div className="mx-auto max-w-[1400px]">

                {/* HEADER */}

                <div className="mb-10 text-center sm:mb-12">

                    {/* Label */}

                    <div
                        className="
                            mb-4
                            inline-flex
                            rounded-full
                            bg-[#F8F4E9]
                            px-3
                            py-1.5
                            sm:px-4
                            sm:py-2
                        "
                    >
                        <span
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#C99B16]
                                sm:text-xs
                            "
                        >
                            Our Clientele
                        </span>
                    </div>

                    {/* Heading */}

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            leading-tight
                            tracking-[-0.03em]
                            text-[#06204A]
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Names we proudly serve.
                    </h2>

                </div>

                {/* CLIENT GRID */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >

                    {clients.map((client) => (
                        <article
                            key={client.id}
                            className="
                                overflow-hidden
                                rounded-lg
                                border
                                border-gray-200
                                bg-white
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_15px_35px_rgba(7,29,57,0.12)]
                            "
                        >

                            {/* TOP NAVY AREA */}

                            <div
                                className="
                                    flex
                                    h-[145px]
                                    items-center
                                    justify-center
                                    bg-[#102F57]
                                    sm:h-[155px]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        text-[#D8AA1E]
                                    "
                                >
                                    <Building2
                                        size={52}
                                        strokeWidth={1.8}
                                    />
                                </div>

                            </div>

                            {/* CONTENT */}

                            <div
                                className="
                                    flex
                                    min-h-[165px]
                                    flex-col
                                    items-center
                                    px-6
                                    py-6
                                    text-center
                                "
                            >

                                {/* CLIENT NAME */}

                                <h3
                                    className="
                                        text-[17px]
                                        font-extrabold
                                        leading-6
                                        text-[#06204A]
                                    "
                                >
                                    {client.name}
                                </h3>

                                {/* DESCRIPTION */}

                                <p
                                    className="
                                        mt-3
                                        max-w-[380px]
                                        text-[14px]
                                        leading-6
                                        text-[#71809A]
                                    "
                                >
                                    {client.description}
                                </p>

                                {/* VALUED PARTNER */}

                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-center
                                        gap-1.5
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.14em]
                                        text-[#C99B16]
                                    "
                                >
                                    <Award
                                        size={14}
                                        strokeWidth={1.8}
                                    />

                                    <span>
                                        Valued Partner
                                    </span>
                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}
"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "./data";

export default function FooterContact() {
    return (
        <div>

            {/* Heading */}

            <h3
                className="
                    text-lg
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                "
            >
                Contact Us
            </h3>

            <div className="mt-8 space-y-8">

                {/* Address */}

                <div className="flex items-start gap-4">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-white/5
                            text-gold
                        "
                    >
                        <MapPin size={20} />
                    </div>

                    <div>

                        <p className="mb-2 font-semibold text-white">
                            Office
                        </p>

                        {contact.address.map((line) => (
                            <p
                                key={line}
                                className="text-sm leading-7 text-white/70"
                            >
                                {line}
                            </p>
                        ))}

                    </div>

                </div>

                {/* Phone */}

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-white/5
                            text-gold
                        "
                    >
                        <Phone size={20} />
                    </div>

                    <div>

                        <p className="mb-1 font-semibold text-white">
                            Phone
                        </p>

                        <a
                            href={`tel:${contact.phone}`}
                            className="
                                text-white/70
                                transition-colors
                                duration-300
                                hover:text-gold
                            "
                        >
                            {contact.phone}
                        </a>

                    </div>

                </div>

                {/* Email */}

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-white/5
                            text-gold
                        "
                    >
                        <Mail size={20} />
                    </div>

                    <div>

                        <p className="mb-1 font-semibold text-white">
                            Email
                        </p>

                        <a
                            href={`mailto:${contact.email}`}
                            className="
                                break-all
                                text-white/70
                                transition-colors
                                duration-300
                                hover:text-gold
                            "
                        >
                            {contact.email}
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}
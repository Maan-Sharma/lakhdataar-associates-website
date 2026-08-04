import Image from "next/image";
import { TeamMember } from "./types";

interface Props {
    member: TeamMember;
}

export default function TeamCard({ member }: Props) {
    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            {/* Top */}

            <div
                className="
                    flex
                    h-72
                    items-center
                    justify-center
                    bg-brand
                "
            >
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={180}
                        height={180}
                        className="
                            h-44
                            w-44
                            rounded-full
                            border-4
                            border-gold
                            object-cover
                        "
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-32
                            w-32
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            border-gold
                            bg-white/10
                            text-6xl
                            font-black
                            text-gold
                        "
                    >
                        {member.initial}
                    </div>
                )}
            </div>

            {/* Bottom */}

            <div className="p-8">

                <h3 className="text-3xl font-black text-brand">
                    {member.name}
                </h3>

                <p className="mt-2 text-lg font-semibold text-gold">
                    {member.role}
                </p>

                <p className="mt-6 text-base leading-8 text-slate-600">
                    {member.description}
                </p>

            </div>

        </div>
    );
}
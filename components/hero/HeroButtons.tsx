import { ArrowRight, Phone } from "lucide-react";

export default function HeroButtons() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row">

            <button
                className="
                group
                flex
                h-12
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-gold
                px-8
                text-sm
                font-semibold
                text-brand
                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl

                sm:h-14
                sm:text-base
                "
            >
                Request a Quote

                <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </button>

            <button
                className="
                flex
                h-12
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                border-white/20
                bg-white/10
                px-8
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300

                hover:bg-white/20

                sm:h-14
                sm:text-base
                "
            >
                <Phone size={18} />
                Explore Products
            </button>

        </div>
    );
}
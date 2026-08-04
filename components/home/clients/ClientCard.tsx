type ClientCardProps = {
    name: string;
};

export default function ClientCard({
    name,
}: ClientCardProps) {
    return (
        <div
            className="
                group

                flex

                h-28
                w-[280px]

                shrink-0

                items-center
                justify-center

                rounded-2xl

                border
                border-slate-200

                bg-white

                px-8

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-gold/40
                hover:shadow-2xl
                hover:shadow-slate-200/60

                md:h-32
                md:w-[320px]
            "
        >
            <h3
                className="
                    text-center

                    text-xl

                    font-extrabold

                    uppercase

                    leading-snug

                    tracking-wide

                    text-slate-600

                    transition-colors
                    duration-300

                    group-hover:text-brand
                "
            >
                {name}
            </h3>
        </div>
    );
}
import { ValueItem } from "./types";

interface Props {
    item: ValueItem;
}

export default function ValueCard({ item }: Props) {
    const Icon = item.icon;

    return (
        <div
            className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-gold/30
                hover:shadow-2xl
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gold/10
                    transition-all
                    duration-300
                    group-hover:bg-gold
                "
            >
                <Icon
                    size={34}
                    className="
                        text-gold
                        transition-colors
                        duration-300
                        group-hover:text-brand
                    "
                />
            </div>

            <h3 className="mt-8 text-3xl font-black text-brand">
                {item.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
                {item.description}
            </p>
        </div>
    );
}
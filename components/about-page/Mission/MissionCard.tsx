import { MissionItem } from "./types";

interface Props {
    item: MissionItem;
}

export default function MissionCard({ item }: Props) {
    const Icon = item.icon;

    return (
        <div
            className="
                rounded-3xl
                bg-white
                p-10
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-brand
                "
            >
                <Icon
                    size={30}
                    className="text-gold"
                />
            </div>

            <h3 className="mt-8 text-4xl font-black text-brand">
                {item.title}
            </h3>

            <p className="mt-5 text-lg leading-9 text-slate-600">
                {item.description}
            </p>
        </div>
    );
}
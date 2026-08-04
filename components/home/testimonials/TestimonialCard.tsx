type Testimonial = {
    quote: string;
    name: string;
    role: string;
    company: string;
};

type Props = {
    item: Testimonial;
};

export default function TestimonialCard({ item }: Props) {
    return (
        <div
            className="
            h-full
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition-all
            duration-500

            hover:-translate-y-2
            hover:shadow-2xl
        "
        >
            <div className="mb-6 flex text-gold text-xl">
                ★★★★★
            </div>

            <p className="text-lg leading-9 italic text-slate-600">
                "{item.quote}"
            </p>

            <div className="my-8 border-t border-slate-200" />

            <h4 className="text-2xl font-bold text-brand">
                {item.name}
            </h4>

            <p className="mt-2 text-gold">
                {item.role}
            </p>

            <p className="text-slate-500">
                {item.company}
            </p>
        </div>
    );
}
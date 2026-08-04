import { storyStats } from "./data";

export default function StoryStats() {
    return (
        <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {storyStats.map((item) => (

                <div
                    key={item.label}
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-8
                        py-8
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-gold/40
                        hover:shadow-xl
                    "
                >

                    <h3 className="text-4xl font-black text-brand">
                        {item.value}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                        {item.label}
                    </p>

                </div>

            ))}

        </div>
    );
}
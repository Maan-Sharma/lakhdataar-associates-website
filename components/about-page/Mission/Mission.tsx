import MissionCard from "./MissionCard";
import { missionData } from "./data";

export default function Mission() {
    return (
        <section className="bg-slate-100 py-20 lg:py-28">

            <div className="container-custom">

                <div className="grid gap-8 lg:grid-cols-2">

                    {missionData.map((item) => (

                        <MissionCard
                            key={item.title}
                            item={item}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}
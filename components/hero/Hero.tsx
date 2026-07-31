import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <section
            id="home"
            className="
relative
isolate
min-h-screen
lg:min-h-[920px]
overflow-hidden
bg-brand
"        >
            {/* Background */}
            <HeroBackground />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/90 via-[#081B33]/70 to-[#081B33]/40" />

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081B33] to-transparent" />

            <div className="relative z-20 flex h-full items-center">
                <div className="container-custom w-full">

                    <div
                        className="
            grid
            lg:grid-cols-12
            items-center

            pt-20
            pb-10

            sm:pt-24
            md:pt-28
            lg:pt-12
            "
                    >
                        <div className="lg:col-span-7 xl:col-span-6">

                            <HeroContent />

                            <div className="mt-8 lg:mt-10">
                                <HeroStats />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <ScrollIndicator />
        </section>
    );
}
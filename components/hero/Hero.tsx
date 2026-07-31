import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-brand"
        >
            {/* Background */}
            <HeroBackground />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/90 via-[#081B33]/65 to-[#081B33]/30" />

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#081B33] to-transparent" />

            <div className="relative z-20 container-custom">
                <div
                    className="
          grid
          min-h-[calc(100vh-130px)]
          grid-cols-1
          items-center

          py-16

          md:py-24

          lg:grid-cols-12
          lg:gap-12
          lg:py-32
          "
                >
                    {/* LEFT */}

                    <div
                        className="
            lg:col-span-7
            xl:col-span-6
            "
                    >
                        <HeroContent />

                        <div className="mt-16">
                            <HeroStats />
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div
                        className="
            hidden

            lg:col-span-5

            lg:flex

            items-center

            justify-center
            "
                    >
                        {/* Reserved for Future Video / Floating Cards */}
                    </div>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}
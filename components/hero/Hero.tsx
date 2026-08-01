import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";


export default function Hero() {

    return (

        <section
            className="
                relative
                isolate

                flex
                min-h-[100svh]
                items-center

                overflow-hidden

                pt-16

                sm:min-h-screen
                sm:pt-20

                lg:min-h-[calc(100svh-4rem)]
                lg:pt-12
                lg:pb-12
            "
        >


            {/* Background */}

            <HeroBackground />



            {/* Content */}

            <div
                className="
                    relative
                    z-10

                    container-custom

                    w-full
                "
            >


                <div
                    className="
                        max-w-3xl

                        py-6

                        sm:py-10

                        lg:py-0
                    "
                >


                    <HeroContent />


                    <HeroStats />


                </div>


            </div>



            {/* Scroll */}

            <ScrollIndicator />


        </section>

    );
}
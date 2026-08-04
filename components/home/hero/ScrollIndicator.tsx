export default function ScrollIndicator() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none

                absolute

                bottom-5

                left-1/2

                -translate-x-1/2



                sm:bottom-8



                lg:bottom-10
            "
        >

            <div
                className="
                    flex

                    h-10
                    w-6

                    items-start

                    justify-center


                    rounded-full


                    border

                    border-white/40


                    backdrop-blur-sm



                    sm:h-12

                    sm:w-7

                "
            >

                <div
                    className="
                        mt-2


                        h-3

                        w-1


                        rounded-full


                        bg-gold



                        animate-bounce



                        motion-reduce:animate-none

                    "
                />

            </div>


        </div>
    );
}
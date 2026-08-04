const stats = [
    {
        number: "7+",
        label: "Years",
    },
    {
        number: "50+",
        label: "Clients",
    },
    {
        number: "500K+",
        label: "Tonnes",
    },
    {
        number: "24/7",
        label: "Support",
    },
];


export default function HeroStats() {

    return (

        <div
            className="
                mt-10

                grid

                grid-cols-2

                gap-x-4
                gap-y-8


                sm:mt-14

                sm:grid-cols-4

                sm:gap-6


                lg:mt-20

                lg:gap-10
            "
        >


            {stats.map((item) => (


                <div

                    key={item.label}

                    className="
                        group

                        border-l-2

                        border-gold


                        pl-4


                        transition-all

                        duration-300



                        sm:pl-5



                        hover:-translate-y-1

                    "

                >



                    <h3

                        className="
                            font-black

                            leading-none

                            tracking-tight

                            text-white



                            text-[clamp(2rem,5vw,3rem)]



                            lg:text-[clamp(3rem,4vw,4rem)]

                        "

                    >

                        {item.number}


                    </h3>





                    <p

                        className="
                            mt-2


                            text-[10px]


                            font-medium


                            uppercase


                            tracking-[0.22em]


                            text-white/70



                            sm:text-xs



                            lg:text-sm


                        "

                    >

                        {item.label}


                    </p>



                </div>


            ))}


        </div>

    );

}
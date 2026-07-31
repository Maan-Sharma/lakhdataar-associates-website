import { BadgeCheck, Mail, Phone } from "lucide-react";

export default function TopBar() {
    return (
        <div className="w-full bg-brand text-white border-b border-white/10">
            <div className="container-custom">

                <div className="flex h-10 lg:h-11 items-center justify-between">

                    {/* Left */}

                    <div className="flex items-center gap-4 sm:gap-6">

                        <a
                            href="tel:+919903811311"
                            className="flex items-center gap-2 text-xs sm:text-sm transition-colors hover:text-gold"
                        >
                            <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                            <span>+91 99038 11311</span>
                        </a>

                        {/* Hide email on very small screens */}
                        <a
                            href="mailto:Sales.lakhdataat@gmail.com"
                            className="hidden md:flex items-center gap-2 text-sm transition-colors hover:text-gold"
                        >
                            <Mail className="h-4 w-4 text-gold" />
                            <span>Sales.lakhdataat@gmail.com</span>
                        </a>

                    </div>

                    {/* Right */}

                    <div className="hidden lg:flex items-center gap-6">

                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                            <BadgeCheck className="h-4 w-4 text-gold" />
                            GST
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                            <BadgeCheck className="h-4 w-4 text-gold" />
                            MSME
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                            <BadgeCheck className="h-4 w-4 text-gold" />
                            ISO 9001
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
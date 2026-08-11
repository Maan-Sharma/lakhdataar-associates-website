"use client";

export default function ContactMap() {
    return (
        <section className="w-full bg-white px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
            <div className="mx-auto max-w-[1350px] overflow-hidden rounded-xl border border-slate-200 shadow-sm">

                <iframe
                    title="Lakhdatar Associates India LLP Location"
                    src="https://www.google.com/maps?q=ARCH+SQUARE+X2,+EP+Block,+Sector+V,+Bidhannagar,+Kolkata,+West+Bengal+700091&output=embed"
                    className="h-[350px] w-full border-0 sm:h-[420px] lg:h-[500px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
        </section>
    );
}
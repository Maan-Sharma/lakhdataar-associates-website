export default function HeroBackground() {
    return (
        <div
            className="
                absolute
                inset-0
                overflow-hidden
                -z-10
            "
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,55,0.24),transparent_32%)]" />
            <div className="hero-grid absolute inset-0 opacity-25" />

            <div className="absolute inset-0 bg-cover bg-center sm:hidden" style={{ backgroundImage: "url('/hero.png')" }} />

            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero.png"
                className="
                    absolute
                    inset-0
                    hidden
                    h-full
                    w-full
                    object-cover
                    object-center
                    sm:block
                "
            >
                <source
                    src="/poster.mp4"
                    type="video/mp4"
                />
            </video>

            <div
                className="
                    absolute
                    inset-0
                    hero-overlay
                    bg-brand/45
                "
            />
        </div>
    );
}
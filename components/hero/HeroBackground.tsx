import Image from "next/image";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0">
            <Image
                src="/hero.png"
                alt="Industrial Mining"
                fill
                priority
                quality={90}
                className="object-cover"
            />
        </div>
    );
}
{/* <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/images/hero.jpg"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video> */}
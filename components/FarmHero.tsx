import Image from "next/image";

export default function FarmHero() {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-96">
      <Image
        src="/imagesfarm.jpg"
        alt="Royal Group farm — green fields and integrated agricultural operations"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-leaf/50 via-transparent to-transparent" />
    </div>
  );
}

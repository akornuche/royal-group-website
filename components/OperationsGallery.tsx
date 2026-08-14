import Image from "next/image";

const GALLERY = [
  {
    image: "/broilers.jpeg",
    alt: "Broiler chickens",
  },
  {
    image: "/broilers2.jpeg",
    alt: "Broiler operation",
  },
  {
    image: "/layers.jpeg",
    alt: "Layer chickens",
  },
  {
    image: "/piggery.jpeg",
    alt: "Piggery operation",
  },
  {
    image: "/piglets.jpeg",
    alt: "Piglets",
  },
  {
    image: "/pigs.jpeg",
    alt: "Pigs",
  },
  {
    image: "/poultry.jpeg",
    alt: "Poultry farm",
  },
  {
    image: "/storehouse.jpeg",
    alt: "Storage facility",
  },
  {
    image: "/turkey.jpeg",
    alt: "Turkey farm",
  },
];

export default function OperationsGallery() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {GALLERY.map((item, idx) => (
        <div
          key={idx}
          className="group relative h-64 overflow-hidden rounded-2xl border border-gold/20 shadow-md transition-all hover:shadow-xl hover:border-gold/60"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}

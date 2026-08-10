import Image from "next/image";

const GALLERY = [
  {
    title: "Poultry Production",
    image: "/poultry.jpg",
    alt: "Chickens in a modern poultry farm",
  },
  {
    title: "Fish Farming",
    image: "/fish-farming.jpg",
    alt: "Commercial aquaculture fish farming",
  },
  {
    title: "Livestock",
    image: "/livestock.jpg",
    alt: "Cattle grazing on green pasture",
  },
  {
    title: "Cassava Processing",
    image: "/cassava.jpg",
    alt: "Cassava crop and processing",
  },
  {
    title: "Cold Storage",
    image: "/cold-storage.jpg",
    alt: "Modern cold storage facility",
  },
  {
    title: "Training Programs",
    image: "/training.jpg",
    alt: "Farmers in agricultural training",
  },
];

export default function OperationsGallery() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {GALLERY.map((op) => (
        <div
          key={op.title}
          className="group relative h-52 overflow-hidden rounded-2xl border border-gold/20 shadow-md transition-all hover:shadow-xl hover:border-gold/60"
        >
          <Image
            src={op.image}
            alt={op.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-base font-semibold text-parchment">
              {op.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

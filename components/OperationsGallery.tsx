"use client";

import Image from "next/image";

export default function OperationsGallery() {
  const operations = [
    {
      title: "Poultry Production",
      image: "https://images.unsplash.com/photo-1485104849641-c3123dd79b67?w=400&h=300&fit=crop",
      alt: "Chickens in poultry farm",
    },
    {
      title: "Fish Farming",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      alt: "Aquaculture fish farming",
    },
    {
      title: "Livestock",
      image: "https://images.unsplash.com/photo-1500595046891-89c1e3c3abe8?w=400&h=300&fit=crop",
      alt: "Cattle grazing on green pasture",
    },
    {
      title: "Crop Processing",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop",
      alt: "Agricultural crop processing",
    },
    {
      title: "Cold Storage",
      image: "https://images.unsplash.com/photo-1488459716781-6f3ee72e94b4?w=400&h=300&fit=crop",
      alt: "Modern cold storage facility",
    },
    {
      title: "Training Programs",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      alt: "Farmers in training session",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {operations.map((op) => (
        <div
          key={op.title}
          className="group relative h-48 overflow-hidden rounded-2xl border border-gold/20 shadow-lg transition-all hover:shadow-xl hover:border-gold/50"
        >
          <Image
            src={op.image}
            alt={op.alt}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-leaf/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-lg font-semibold text-parchment">
              {op.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

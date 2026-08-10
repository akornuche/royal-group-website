"use client";

import Image from "next/image";

export default function FarmHero() {
  // Unsplash free images - royalty free
  const heroImage = "https://images.unsplash.com/photo-1500595046891-89c1e3c3abe8?w=1200&h=600&fit=crop";
  
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl">
      <Image
        src={heroImage}
        alt="Sustainable farm landscape with green fields"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-leaf/60 via-transparent to-transparent" />
    </div>
  );
}

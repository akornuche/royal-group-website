import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sustainability | Royal Group",
  description:
    "How Royal Group integrates environmentally responsible practices across its agro-allied operations.",
};

const COMMITMENTS = [
  {
    title: "Climate-smart agriculture",
    detail:
      "Production practices across our farms are adapted to build resilience against a changing climate while protecting yields.",
  },
  {
    title: "Efficient resource utilisation",
    detail:
      "Feed, water and land are managed for efficiency across every operation in the value chain, from hatchery to cold storage.",
  },
  {
    title: "Waste recycling",
    detail:
      "By-products from processing and livestock operations are captured and returned into the system rather than discarded.",
  },
  {
    title: "Renewable energy opportunities",
    detail:
      "We continue to evaluate renewable energy sources to power farm and processing infrastructure sustainably.",
  },
  {
    title: "Circular economy principles",
    detail:
      "Our integrated model is designed so that outputs from one operation become inputs for another wherever possible.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Resilient systems, not just higher yields."
        intro="We believe agriculture is more than food production — it's a catalyst for industrialisation, job creation and wealth generation, built to last."
      />

      {/* Hero Image */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-gold/20 shadow-lg">
            <Image
              src="/sustainability.jpg"
              alt="Sustainable green farm landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-leaf/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl divide-y divide-ink/10">
          {COMMITMENTS.map((c, i) => (
            <div key={c.title} className="grid gap-2 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
              <span className="font-mono text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 max-w-2xl font-body text-ink/70">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

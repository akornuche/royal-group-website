import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company, objectives } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Royal Group",
  description:
    "Royal Group's mission, vision and objectives as a Nigerian agro-allied enterprise headquartered in Delta State.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built for Nigeria's agricultural transformation."
        intro={`Established in ${company.founded}, ${company.name} is a leading Nigerian agro-allied enterprise headquartered in ${company.hq}, committed to advancing sustainable agriculture through integrated farming, agro-processing, innovation and human capital development.`}
        image="/livestock.jpg"
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Vision</p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
              To become Africa&apos;s leading integrated agro-allied enterprise,
              driving food security, agricultural innovation, industrial
              value addition, and sustainable economic growth.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/20 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Mission</p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
              To produce premium agricultural products through modern
              integrated farming systems while empowering farmers,
              developing youth capacity, and delivering sustainable
              agricultural solutions that improve livelihoods.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-parchment-dim px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-widest text-gold">Our objectives</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink">
            Seven commitments that guide every operation.
          </h2>

          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {objectives.map((o, i) => (
              <li
                key={o}
                className="flex gap-4 border-b border-ink/10 pb-6 last:border-b-0"
              >
                <span className="font-mono text-sm font-medium text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-ink/80">{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

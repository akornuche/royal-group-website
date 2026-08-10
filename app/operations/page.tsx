import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { operations, stageOrder, stageLabel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Operations | Royal Group",
  description:
    "Explore Royal Group's integrated value chain: feed mill, hatcheries, piggery, fishery, poultry, turkey, cattle, cassava processing, cold storage and training.",
};

export default function OperationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Operations"
        title="Eleven operations. One value chain."
        intro="Each business line is built to feed the next — from the inputs we raise ourselves through to the training that grows the next generation of agripreneurs."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {stageOrder.map((stage, i) => {
            const items = operations.filter((o) => o.stage === stage);
            return (
              <div key={stage}>
                <div className="flex items-baseline gap-3 border-b border-ink/15 pb-4">
                  <span className="font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                    {stageLabel[stage]}
                  </h2>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((op) => (
                    <div
                      key={op.slug}
                      className="rounded-2xl border border-gold/20 p-6 transition-colors hover:border-gold"
                    >
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {op.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                        {op.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

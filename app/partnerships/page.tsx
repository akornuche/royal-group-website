import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { partners, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partnerships | Royal Group",
  description:
    "Royal Group welcomes partnerships with government agencies, development partners, financial institutions, cooperatives, academia, investors and off-takers.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Collaborations that scale the whole value chain."
        intro="These partnerships are designed to expand agricultural production, strengthen value chains, promote innovation, improve farmer livelihoods, and accelerate agro-industrial development."
        image="/cold-storage.jpg"
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="bg-parchment p-6">
                <p className="font-body text-sm font-medium leading-snug text-ink">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink px-8 py-10 text-parchment md:flex-row md:items-center md:px-12">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Have a partnership proposal?
              </h2>
              <p className="mt-2 max-w-md font-body text-parchment/90">
                Reach our team directly on WhatsApp or by phone to start the conversation.
              </p>
            </div>
            <a
              href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                "Hello Royal Group, our organisation is interested in a partnership."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-parchment px-6 py-3 font-body text-sm font-semibold text-ink hover:bg-gold-light"
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

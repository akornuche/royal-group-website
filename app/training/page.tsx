import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agro Innovation & Training | Royal Group",
  description:
    "Practical agribusiness training programmes for youths, farmers, cooperatives and agripreneurs from Royal Group.",
};

const AUDIENCES = [
  {
    title: "Youths",
    detail: "Hands-on introduction to modern farming and agribusiness as a viable, commercial career path.",
  },
  {
    title: "Farmers",
    detail: "Upskilling in improved technologies, climate-smart techniques and post-harvest management.",
  },
  {
    title: "Cooperatives",
    detail: "Group-level training on production standards, value addition and market access.",
  },
  {
    title: "Agripreneurs",
    detail: "Business management, value-chain thinking and mentorship for scaling an agricultural venture.",
  },
];

const FOCUS_AREAS = [
  "Modern farming techniques",
  "Agribusiness management",
  "Value addition & processing",
  "Climate-smart agriculture",
  "Adoption of innovative technologies",
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Agro Innovation & Training"
        title="Building the next generation of agripreneurs."
        intro="We provide practical training programmes for youths, farmers, cooperatives and agricultural stakeholders — transferring the same knowledge that runs our own integrated operations."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-widest text-gold">Who we train</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="rounded-2xl border border-gold/20 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-soil px-6 py-16 text-parchment md:py-24">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Focus areas</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
              Knowledge transfer and mentorship, grounded in real operations.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {FOCUS_AREAS.map((f) => (
              <li key={f} className="flex gap-3 font-body text-parchment/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-gold/20 p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Interested in a training cohort or partnership?
            </h2>
            <p className="mt-2 font-body text-ink/70">
              Tell us about your group and goals — we&apos;ll follow up directly.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                "Hello Royal Group, I'd like to enquire about your Agro Innovation & Training programme."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-leaf px-6 py-3 font-body text-sm font-semibold text-parchment hover:bg-leaf"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-ink/20 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-clay hover:text-gold"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

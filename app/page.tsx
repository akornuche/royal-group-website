import Link from "next/link";
import { company, advantages } from "@/lib/content";
import ValueChain from "@/components/ValueChain";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain-bg relative overflow-hidden bg-soil px-6 pb-20 pt-16 text-parchment md:pb-28 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="stamp inline-flex items-center gap-2 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-gold">
            Est. {company.founded} &middot; {company.hq}
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.03] md:text-7xl">
            From soil to shelf,
            <br />
            one integrated enterprise.
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-parchment/75 md:text-xl">
            {company.name} runs the full agricultural value chain &mdash;
            livestock, aquaculture, cassava processing, cold storage and
            farmer training &mdash; under one roof in {company.hq}.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/operations"
              className="rounded-full bg-clay px-6 py-3 font-body text-sm font-semibold text-parchment transition-colors hover:bg-clay-dark"
            >
              See our operations
            </Link>
            <a
              href={`https://wa.me/${company.phoneIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-parchment/30 px-6 py-3 font-body text-sm font-semibold text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Value chain signature */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-widest text-clay">
            How it fits together
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            One farm-to-market chain, five stages, eleven operations.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-ink/70">
            Every business line feeds the next. Inputs raised on-site supply
            our own farms; what we farm, we process; what we process, we
            store and move to market &mdash; with training that keeps the
            whole chain growing.
          </p>

          <div className="mt-10">
            <ValueChain />
          </div>
        </div>
      </section>

      {/* Why Royal Group */}
      <section className="bg-parchment-dim border-y border-ink/10 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-clay">
              Why partners choose us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink">
              Competitive advantage, built on integration.
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {advantages.map((a) => (
              <li key={a} className="flex gap-3 font-body text-sm leading-relaxed text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-2xl bg-leaf px-8 py-12 text-parchment md:flex-row md:items-center md:px-14">
          <div>
            <h2 className="max-w-md font-display text-3xl font-bold leading-tight">
              Let&apos;s grow something together.
            </h2>
            <p className="mt-3 max-w-md font-body text-parchment/85">
              Government agencies, cooperatives, investors and off-takers &mdash;
              reach our team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:+${company.phoneIntl}`}
              className="rounded-full bg-parchment px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-gold"
            >
              Call {company.phoneDisplay}
            </a>
            <Link
              href="/partnerships"
              className="rounded-full border border-parchment/40 px-6 py-3 font-body text-sm font-semibold text-parchment transition-colors hover:border-parchment"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

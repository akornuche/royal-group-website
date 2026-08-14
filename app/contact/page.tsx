import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Royal Group",
  description: "Reach Royal Group by WhatsApp, phone, or the contact form below.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our team."
        intro="The fastest way to reach us is WhatsApp. For everything else, call or send a message below."
        image="/broilers.jpeg"
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <a
              href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                "Hello Royal Group, I'd like to get in touch."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-leaf p-6 text-parchment transition-colors hover:bg-leaf-dark"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-parchment text-leaf">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.36.68 4.55 1.86 6.4L4 29l7.79-1.83A11.9 11.9 0 0 0 16.01 27C22.63 27 28 21.63 28 15S22.63 3 16.01 3Z" />
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">
                  Chat on WhatsApp
                </span>
                <span className="block font-body text-sm text-parchment/80">
                  {company.phoneDisplay} &middot; usually replies fast
                </span>
              </span>
            </a>

            <a
              href={`tel:+${company.phoneIntl}`}
              className="flex items-center gap-4 rounded-2xl border border-gold/20 p-6 transition-colors hover:border-gold"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-ink">Call the office</span>
                <span className="block font-body text-sm text-ink/70">{company.phoneDisplay}</span>
              </span>
            </a>

            <div className="rounded-2xl border border-gold/20 p-6">
              <p className="font-display text-lg font-semibold text-ink">Follow us</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {socials
                  .filter((s) => s.label !== "WhatsApp")
                  .map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink/15 px-4 py-1.5 font-body text-sm text-ink/80 hover:border-gold hover:text-gold"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
              </ul>
              <p className="mt-3 font-mono text-[11px] text-ink/40">
                Update these links in lib/content.ts once profiles are live.
              </p>
            </div>

            <div className="rounded-2xl border border-gold/20 p-6">
              <p className="font-display text-lg font-semibold text-ink">Head office</p>
              <p className="mt-2 font-body text-sm text-ink/70">{company.hq}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gold/20 p-8">
            <p className="font-display text-lg font-semibold text-ink">Send a message</p>
            <p className="mt-1 font-body text-sm text-ink/60">
              We&apos;ll get back to you by email or WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

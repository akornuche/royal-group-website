import Link from "next/link";
import { company, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="grain-bg bg-soil text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-bold">{company.name}</span>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-parchment/70">
              An integrated agro-allied enterprise headquartered in {company.hq}.
              Established {company.founded}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">
              Site
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/80">
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/operations" className="hover:text-gold">Our Operations</Link></li>
              <li><Link href="/training" className="hover:text-gold">Training</Link></li>
              <li><Link href="/sustainability" className="hover:text-gold">Sustainability</Link></li>
              <li><Link href="/partnerships" className="hover:text-gold">Partnerships</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">
              Reach us
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/80">
              <li>
                <a href={`tel:+${company.phoneIntl}`} className="hover:text-gold">
                  {company.phoneDisplay}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-parchment/15 pt-6 font-body text-xs text-parchment/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono">FARM &rarr; PROCESS &rarr; STORE &rarr; MARKET</p>
        </div>
      </div>
    </footer>
  );
}

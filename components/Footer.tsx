import Link from "next/link";
import Image from "next/image";
import { company, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="grain-bg bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Royal Group logo"
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-gold/50"
              />
              <span className="font-display text-xl font-bold text-parchment">{company.name}</span>
            </div>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-parchment/60">
              An integrated agro-allied enterprise headquartered in {company.hq}.
              Established {company.founded}.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Site</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/operations" className="hover:text-gold transition-colors">Our Operations</Link></li>
              <li><Link href="/training" className="hover:text-gold transition-colors">Training</Link></li>
              <li><Link href="/sustainability" className="hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link href="/partnerships" className="hover:text-gold transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Reach us</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/70">
              <li>
                <a href={`tel:+${company.phoneIntl}`} className="hover:text-gold transition-colors">
                  {company.phoneDisplay}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-parchment/10 pt-6 font-body text-xs text-parchment/40 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono text-gold/60">Est. {company.founded} &middot; {company.hq}</p>
          <p className="font-mono">FARM &rarr; PROCESS &rarr; STORE &rarr; MARKET</p>
        </div>
      </div>
    </footer>
  );
}

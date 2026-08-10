import { operations, stageOrder, stageLabel } from "@/lib/content";

export default function ValueChain() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0">
        {stageOrder.map((stage, i) => {
          const items = operations.filter((o) => o.stage === stage);
          const isLast = i === stageOrder.length - 1;
          return (
            <div key={stage} className="relative flex-1 md:min-w-0">
              <div className="flex h-full flex-col border border-gold/20 bg-parchment p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink">
                  {stageLabel[stage]}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item.slug}
                      className="font-body text-sm text-ink/70"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 rotate-90 items-center justify-center text-gold md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

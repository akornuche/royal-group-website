export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="grain-bg border-b border-gold/20 bg-leaf px-6 py-16 text-parchment md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-parchment/75">
          {intro}
        </p>
      </div>
    </section>
  );
}

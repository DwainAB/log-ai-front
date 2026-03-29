export function BottomCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-primary/5 blur-[120px]"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface">
          Ready to master your infrastructure?
        </h2>
        <p className="mb-12 text-xl text-on-surface-variant">
          Start your 14-day free trial today. No credit card required.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <button className="font-headline w-full rounded-2xl bg-primary px-10 py-5 font-extrabold text-on-primary shadow-xl shadow-primary/20 transition-all hover:scale-[1.05] md:w-auto">
            Get your API key
          </button>
          <button className="font-headline w-full rounded-2xl border border-outline-variant bg-transparent px-10 py-5 font-extrabold text-on-surface transition-all hover:bg-surface-container-high md:w-auto">
            Talk to an Engineer
          </button>
        </div>
      </div>
    </section>
  );
}

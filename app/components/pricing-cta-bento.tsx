export function PricingCtaBento() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="group relative flex h-64 flex-col justify-center overflow-hidden rounded-xl bg-surface-container-low p-10">
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
        <h4 className="font-headline relative z-10 mb-4 text-2xl font-bold">
          Need a sandbox?
        </h4>
        <p className="font-body relative z-10 mb-6 text-on-surface-variant">
          Deploy Obsidian AI in minutes on your local cluster for testing. No
          credit card required for the Free Tier.
        </p>
        <a
          className="relative z-10 flex items-center gap-2 font-bold text-primary transition-all group-hover:gap-4"
          href="#"
        >
          Get started for free
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="group flex h-64 items-center justify-between overflow-hidden rounded-xl bg-surface-container-low p-10">
        <div>
          <h4 className="font-headline mb-4 text-2xl font-bold">
            Enterprise Compliance
          </h4>
          <p className="font-body text-on-surface-variant">
            SOC2 Type II, HIPAA, and GDPR compliant infrastructure for
            high-security sectors.
          </p>
        </div>
        <span className="material-symbols-outlined text-6xl text-on-surface/5 transition-colors group-hover:text-primary/20">
          security
        </span>
      </div>
    </div>
  );
}

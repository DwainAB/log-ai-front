const FREE_FEATURES = [
  { label: "Up to 1GB logs/day", included: true },
  { label: "7-day retention", included: true },
  { label: "1 server instance", included: true },
  { label: "Priority AI alerts", included: false },
];

const PRO_FEATURES = [
  "10GB logs/day",
  "30-day retention",
  "Unlimited servers",
  "Priority AI alerts",
];

const ENTERPRISE_FEATURES = [
  "Unlimited log volume",
  "Custom retention period",
  "24/7 Priority Support",
  "Dedicated AI models",
];

function CheckIcon({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className="material-symbols-outlined text-lg text-primary"
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      check_circle
    </span>
  );
}

function FreeTierCard() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-8 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-8">
        <span className="font-label mb-2 block text-xs uppercase tracking-widest text-outline">
          Developer
        </span>
        <h3 className="font-headline text-2xl font-bold text-on-surface">
          Free Tier
        </h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-on-surface">$0</span>
          <span className="font-label text-sm text-on-surface-variant">
            / forever
          </span>
        </div>
      </div>

      <ul className="mb-10 flex-grow space-y-4">
        {FREE_FEATURES.map(({ label, included }) => (
          <li
            key={label}
            className={`font-body flex items-center gap-3 text-sm ${
              included ? "text-on-surface-variant" : "text-on-surface-variant/40"
            }`}
          >
            {included ? (
              <span className="material-symbols-outlined text-lg text-secondary">
                check_circle
              </span>
            ) : (
              <span className="material-symbols-outlined text-lg">cancel</span>
            )}
            {label}
          </li>
        ))}
      </ul>

      <button className="font-headline w-full rounded-lg bg-surface-container-highest px-6 py-3 font-bold text-on-surface transition-colors hover:bg-surface-bright">
        Select Plan
      </button>
    </div>
  );
}

function ProTierCard() {
  return (
    <div className="relative rounded-xl bg-surface-container p-1">
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary to-primary-container opacity-20 blur-xl" />
      <div className="flex h-full flex-col rounded-[0.6rem] border border-primary/20 bg-surface-container p-8">
        <div className="relative mb-8">
          <span className="absolute -right-4 -top-12 rounded-full bg-primary px-3 py-1 font-label text-[10px] font-bold uppercase tracking-tighter text-on-primary-container">
            Most Popular
          </span>
          <span className="font-label mb-2 block text-xs uppercase tracking-widest text-primary">
            Scalable
          </span>
          <h3 className="font-headline text-2xl font-bold text-on-surface">
            Pro Tier
          </h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-on-surface">$49</span>
            <span className="font-label text-sm text-on-surface-variant">
              / month
            </span>
          </div>
        </div>

        <ul className="mb-10 flex-grow space-y-4">
          {PRO_FEATURES.map((label) => (
            <li
              key={label}
              className="font-body flex items-center gap-3 text-sm text-on-surface"
            >
              <CheckIcon filled />
              {label}
            </li>
          ))}
        </ul>

        <button className="font-headline w-full rounded-lg bg-gradient-to-r from-primary to-primary-container px-6 py-3 font-bold text-on-primary-container shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all hover:brightness-110 active:scale-[0.98]">
          Select Plan
        </button>
      </div>
    </div>
  );
}

function EnterpriseTierCard() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-8 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-8">
        <span className="font-label mb-2 block text-xs uppercase tracking-widest text-outline">
          Monolith
        </span>
        <h3 className="font-headline text-2xl font-bold text-on-surface">
          Enterprise
        </h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-on-surface">
            Custom
          </span>
        </div>
      </div>

      <ul className="mb-10 flex-grow space-y-4">
        {ENTERPRISE_FEATURES.map((label) => (
          <li
            key={label}
            className="font-body flex items-center gap-3 text-sm text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-lg text-tertiary">
              verified
            </span>
            {label}
          </li>
        ))}
      </ul>

      <button className="font-headline w-full rounded-lg bg-surface-container-highest px-6 py-3 font-bold text-on-surface transition-colors hover:bg-surface-bright">
        Contact Sales
      </button>
    </div>
  );
}

export function PricingCards() {
  return (
    <section className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-3">
      <FreeTierCard />
      <ProTierCard />
      <EnterpriseTierCard />
    </section>
  );
}

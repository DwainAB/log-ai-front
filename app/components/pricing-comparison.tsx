const ROWS = [
  {
    feature: "Log volume",
    free: "1GB / day",
    pro: "10GB / day",
    enterprise: "Unlimited",
  },
  {
    feature: "Data Retention",
    free: "7 days",
    pro: "30 days",
    enterprise: "Custom (up to 2yr)",
  },
  {
    feature: "User Seats",
    free: "1 User",
    pro: "Up to 10",
    enterprise: "Unlimited",
  },
  {
    feature: "API Calls / min",
    free: "100",
    pro: "2,000",
    enterprise: "Uncapped",
  },
  {
    feature: "SSO Integration",
    free: null,
    pro: "SAML v2",
    enterprise: "All IdPs",
  },
  {
    feature: "AI Model Training",
    free: null,
    pro: "Standard",
    enterprise: "Dedicated Private",
  },
];

function UnavailableCell() {
  return (
    <span className="material-symbols-outlined text-error/30">close</span>
  );
}

export function PricingComparison() {
  return (
    <section className="mb-32">
      <h2 className="font-headline mb-12 text-center text-3xl font-bold">
        Detailed Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-outline-variant/20 bg-surface-container-low">
              <th className="font-headline p-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Features
              </th>
              <th className="font-headline p-6 text-base font-bold text-on-surface">
                Free
              </th>
              <th className="font-headline p-6 text-base font-bold text-primary">
                Pro
              </th>
              <th className="font-headline p-6 text-base font-bold text-tertiary">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="font-body text-sm">
            {ROWS.map(({ feature, free, pro, enterprise }) => (
              <tr
                key={feature}
                className="transition-colors hover:bg-surface-bright/50"
              >
                <td className="border-b border-outline-variant/10 p-6 text-on-surface-variant">
                  {feature}
                </td>
                <td className="font-label border-b border-outline-variant/10 p-6 text-on-surface">
                  {free ?? <UnavailableCell />}
                </td>
                <td className="font-label border-b border-outline-variant/10 p-6 text-on-surface">
                  {pro ?? <UnavailableCell />}
                </td>
                <td className="font-label border-b border-outline-variant/10 p-6 text-on-surface">
                  {enterprise ?? <UnavailableCell />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

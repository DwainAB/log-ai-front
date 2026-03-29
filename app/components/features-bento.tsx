import Image from "next/image";

export function FeaturesBento() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-headline text-4xl font-extrabold text-on-surface">
          Precision Intelligence
        </h2>
        <p className="font-body text-on-surface-variant">
          Everything you need to debug at scale.
        </p>
      </div>
      <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
        <div className="md:col-span-8 flex flex-col justify-between rounded-3xl border border-transparent bg-surface-container-low p-8 transition-all duration-500 hover:border-outline-variant/20">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <span className="material-symbols-outlined text-primary">
                monitoring
              </span>
            </div>
            <h3 className="mb-3 font-headline text-2xl font-bold text-on-surface">
              Real-time Log Collection
            </h3>
            <p className="max-w-md leading-relaxed text-on-surface-variant">
              Streaming logs from your K8s clusters, Lambda functions, or bare
              metal servers with sub-millisecond latency. Zero data loss
              architecture.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-highest p-4">
            <pre className="font-label text-xs text-primary/80">
              <code>{`$ obsidian init --api-key=obs_7f2x...
[SYSTEM] Agent connected to ap-southeast-1
[LOG] Scanning process hierarchy...
[AI] Baseline established for 14 microservices`}</code>
            </pre>
          </div>
        </div>

        <div className="md:col-span-4 rounded-3xl border border-transparent bg-surface-container p-8 transition-all duration-500 hover:border-outline-variant/20">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
            <span className="material-symbols-outlined text-secondary">radar</span>
          </div>
          <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
            AI Error Detection
          </h3>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Our proprietary LLM analyzes patterns to distinguish between routine
            noise and critical system failures automatically.
          </p>
        </div>

        <div className="md:col-span-4 rounded-3xl border border-transparent bg-surface-container-low p-8 transition-all duration-500 hover:border-outline-variant/20">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10">
            <span className="material-symbols-outlined text-tertiary">api</span>
          </div>
          <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
            Easy Integration
          </h3>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Direct SDKs for Node.js, Go, Python, and Rust. Native OpenTelemetry
            support for zero-lock-in observability.
          </p>
        </div>

        <div className="relative md:col-span-8 flex items-center gap-8 overflow-hidden rounded-3xl border border-transparent bg-surface-container p-8 transition-all duration-500 hover:border-outline-variant/20">
          <div className="flex-1">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10">
              <span className="material-symbols-outlined text-primary-container">
                dashboard
              </span>
            </div>
            <h3 className="mb-3 font-headline text-2xl font-bold text-on-surface">
              Centralized Dashboard
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              A single source of truth for your entire stack. Correlate logs,
              metrics, and traces in a unified view designed for high-density
              information.
            </p>
          </div>
          <div className="hidden w-1/3 lg:block">
            <Image
              alt="Dashboard Preview"
              className="rounded-2xl opacity-50 grayscale transition-all duration-700 hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVxuc6jIMb8g_-zMoP_s9h_picxM0gx9Z_fyzsYqh5GJVj-A8pBh9IjjeMBWB9pnfuRpnf1IgERih9xFiX3OPZxlfbiuvFvATcjCQjpXsPlCBj_TFyA2OZqEBh17DIXR-RbQ8UQjfZ9BCXWgV0YLN8xWDOJmXighbUeishF684u6sgAGDI_lVnK8OFULKNqnBF0jVTGXARdmNxeLDgPh4BkHItgCkd1AiaKgfizJSI84oL3Q_5i_U045tcPQ3ho4NIEbroWBm-l64"
              width={420}
              height={260}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

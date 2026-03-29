import Image from "next/image";

export function WorkflowSection() {
  return (
    <section className="bg-surface-container-lowest py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 font-headline text-4xl font-extrabold text-on-surface">
              Deployment in seconds, <br />
              insights for a lifetime.
            </h2>
            <div className="space-y-12">
              <div className="group flex gap-6">
                <div className="font-label flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-highest font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  1
                </div>
                <div>
                  <h4 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    Connect server via SDK
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Drop a single line of code into your application or install
                    our lightweight sidecar agent for infrastructure-wide
                    coverage.
                  </p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="font-label flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-highest font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  2
                </div>
                <div>
                  <h4 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    Logs analyzed by AI
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Our engine automatically clusters similar log lines,
                    identifies structural changes, and highlights statistical
                    outliers in real-time.
                  </p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="font-label flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-highest font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  3
                </div>
                <div>
                  <h4 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    Receive alerts &amp; insights
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Get paged only for what matters. We integrate with Slack,
                    PagerDuty, and Discord to deliver actionable resolutions
                    directly to your team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-tr from-surface-container-high to-surface-container p-1 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  alt="Infrastructure"
                  className="h-full w-full object-cover opacity-20 contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApxIqATssABH9KLa91-srVoM4Z_2REGHo5KOvLRbfZUHh0jfp2yAXtVTRefM4fLh68_Ey5ca8gdVCgJr-fCpUe2lX9BpTBWkx4lWJ0dzA3Oda4casjDx4QcSpRb0N0F98_cpO2wvS-zKmKV90JFf0_NP77vE0J2It1KXINy1lINPfA6KxPEuyIu6rQbD6mWs3y0DNiYo-CR6BNWBhxbheG05Vae-zHYW1htZq_tGKSBhB7oGHT4KxANK2KMuSzpwlJNdiDBJ_PVDo"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="font-label w-full space-y-4">
                    <div className="glass animate-pulse rounded-xl border border-white/5 bg-surface/80 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="text-[10px] tracking-widest text-on-surface-variant uppercase">
                          Processing
                        </span>
                      </div>
                      <div className="h-2 w-3/4 rounded-full bg-on-surface-variant/20"></div>
                    </div>
                    <div className="glass translate-x-8 rounded-xl border border-white/5 bg-surface/80 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] tracking-widest text-on-surface-variant uppercase">
                          Clustering
                        </span>
                      </div>
                      <div className="h-2 w-1/2 rounded-full bg-on-surface-variant/20"></div>
                    </div>
                    <div className="glass -translate-x-4 rounded-xl border border-white/5 bg-surface/80 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tertiary"></div>
                        <span className="text-[10px] tracking-widest text-on-surface-variant uppercase">
                          Alert Dispatched
                        </span>
                      </div>
                      <div className="h-2 w-2/3 rounded-full bg-on-surface-variant/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

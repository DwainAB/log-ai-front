import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(75,142,255,0.1),transparent_50%)]"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-12">
        <div className="z-10 lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-3 py-1 text-primary">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span className="font-label text-sm font-medium tracking-wide uppercase">
              V2.0 Now Live
            </span>
          </div>
          <h1 className="mb-8 font-headline text-6xl leading-[1.1] font-extrabold tracking-tight text-on-surface md:text-7xl">
            Analyze your server <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              logs with AI
            </span>{" "}
            in real time
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-on-surface-variant">
            The modern monolith for developer observability. Monitor traffic,
            detect anomalies, and resolve infrastructure bottlenecks before they
            impact your users.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="font-headline rounded-xl bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-lg font-bold text-on-primary-container shadow-[0_4px_20px_rgba(173,198,255,0.2)] transition-transform hover:scale-[1.02]">
              Get Started Free
            </button>
            <button className="font-headline rounded-xl border border-outline-variant/30 bg-surface-container px-8 py-4 text-lg font-bold text-on-surface transition-colors hover:bg-surface-container-high">
              See Pricing
            </button>
          </div>
          <div className="mt-12 flex items-center gap-4 font-label text-sm tracking-wide text-on-surface-variant">
            <div className="-space-x-3 flex">
              <Image
                alt="User 1"
                className="h-8 w-8 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA06GQWVnczIRlwM5tWqrV33l0TV4h5rFIxdwJB4Y8p_tf1IIQ_YvIl--826miHjR0fxKvvH7YbD_RMrAqAtbblTMpyUYfeD3VX1RbzN1nxqLSxE0v1fOGFGPGaJ6_y5UIL5FITdBSfmoefuihR3zMqGtmeOPI3oWohsA-mN1s0NkQ8v6jRC_pzXg1JcIKwVui9napOIcyRu_fITOHVe88evADkYOaabpIWQdHmmvDBpc6J7BRRMxUjzLskIGy3CoUfHPH2zckZVM"
                width={32}
                height={32}
              />
              <Image
                alt="User 2"
                className="h-8 w-8 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtnD_9SK5ADkJkRl-4R1YYBb8lytLWft5OWJEyri0ewHlJqGaKNDZZTRVSMLOwxgbtopac469Icsj0QfwwMOR_VAvCCq4I0-KaZvnVhg9RjG00jNVchR-wOQpksGSSI24UUG4dpRANRvRAa4bf6SAkzeRazfOtVnUslgFWJZDf1znuDP1CqY7kSF-i_UQIAjEK2_tYHR2aEiQGOLlA3tDLuGtNejYoVetp8FuFg8c8Cwl1TxcAaECFEiXI9-K0RCDzscXpm9hSv28"
                width={32}
                height={32}
              />
              <Image
                alt="User 3"
                className="h-8 w-8 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxrr3iFXO68IPErzz20hBqvzBYsXWXYJXN-Pf6WMkfUJrofIssGtvQII59ddd5EXWUiE2KBI3lxgROtDhoVL7gKCyu3jQ6GzB-TA16ia-GWKtnrv9gnElVeJ9TCfAPxvO_7FP1BK9WdduhU0hN1TpkY8xiS1H7FvdzSpCVYxDppM1ssa0jFSbrz2HQ0bFivlo5cQoiLU6qTh33uGNyjeDeFlhTE7j_nU_jTglqhElkF9J_QndFeGkvVGX8Qi9DVs52035EKnNX7AI"
                width={32}
                height={32}
              />
            </div>
            <span>Trusted by 2,000+ DevOps Teams</span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-low shadow-2xl">
            <Image
              alt="AI Analysis Visual"
              className="h-full w-full object-cover opacity-40 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRv_eVXkuFbG30ljd4ZDoxQwbmuve9_7ITikKDR9WWEmab8tDWXWWj9d7kpOTwu_s3zUAJuERCW71E82fVEc-3FMK1rcUWJPwBPJjOVe_YfuNpHIpmc69FNC5idkYHAWOnqhpYpd1m5W3L-_9ZFnjL-9kyJ7jt2TZBdW0oBaD_YO3KN-fiq3cXyIDhkrYcTl0rISH41-oVwucJBNr-GZF3lwCp2h3pJipYaQj_qQFL4ARSq3_l57UGRKier6gLfTKJNilSgavCTwA"
              fill
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="flex justify-between">
                <div className="h-2 w-32 rounded-full bg-primary/30"></div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-secondary"></div>
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                </div>
              </div>
              <div className="translate-y-4 rounded-2xl border border-outline-variant/30 bg-surface-container-highest/80 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    psychology
                  </span>
                  <span className="font-label text-sm font-bold text-secondary">
                    AI INSIGHT
                  </span>
                </div>
                <p className="mb-4 font-label text-xs leading-relaxed text-on-surface-variant">
                  Anomaly detected in{" "}
                  <span className="text-on-surface">auth-worker-04</span>.
                  Latency increased by 400ms. Potential database lock suspected.
                </p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
                  <div className="h-full w-3/4 bg-secondary"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
}

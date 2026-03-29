export default function Home() {
  return (
    <div className="font-body text-on-surface selection:bg-primary/30">
      <nav className="fixed top-0 z-50 mx-auto flex h-20 w-full max-w-full items-center justify-between bg-surface/60 bg-gradient-to-b from-[#1e2023]/10 to-transparent px-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <span className="font-headline text-2xl font-black tracking-tighter text-[#f0f0f5]">
            Obsidian AI
          </span>
          <div className="hidden items-center gap-6 font-headline font-bold tracking-tight md:flex">
            <a className="border-b-2 border-[#adc6ff] pb-1 text-[#adc6ff]" href="#">
              Features
            </a>
            <a className="text-[#c1c6d7] transition-colors hover:text-[#f0f0f5]" href="#">
              Pricing
            </a>
            <a className="text-[#c1c6d7] transition-colors hover:text-[#f0f0f5]" href="#">
              Docs
            </a>
            <a className="text-[#c1c6d7] transition-colors hover:text-[#f0f0f5]" href="#">
              Changelog
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-headline px-5 py-2 font-bold text-[#c1c6d7] transition-colors hover:text-[#f0f0f5]">
            Login
          </button>
          <button className="font-headline rounded-lg bg-primary-container px-6 py-2.5 font-bold text-on-primary-container transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
            Sign Up
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <section className="mx-auto flex min-h-[50vh] max-w-7xl items-center px-8">
          <p className="font-label text-sm tracking-wide text-on-surface-variant">
            Etape suivante: Hero section
          </p>
        </section>
      </main>
    </div>
  );
}

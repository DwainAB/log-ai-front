export function SiteFooter() {
  return (
    <footer className="border-t border-[#1e2023] bg-[#111316] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <span className="font-headline text-xl font-bold text-[#c1c6d7]">
            Obsidian AI
          </span>
          <p className="font-label text-xs tracking-wider text-[#c1c6d7]/60">
            © 2024 Obsidian AI. Built for the high-concurrency era.
          </p>
        </div>
        <div className="font-label flex gap-8 text-xs tracking-wider">
          <a className="text-[#c1c6d7]/60 transition-colors hover:text-[#adc6ff]" href="#">
            Status
          </a>
          <a className="text-[#c1c6d7]/60 transition-colors hover:text-[#adc6ff]" href="#">
            Privacy
          </a>
          <a className="text-[#c1c6d7]/60 transition-colors hover:text-[#adc6ff]" href="#">
            Terms
          </a>
          <a className="text-[#c1c6d7]/60 transition-colors hover:text-[#adc6ff]" href="#">
            Security
          </a>
          <a className="text-[#c1c6d7]/60 transition-colors hover:text-[#adc6ff]" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

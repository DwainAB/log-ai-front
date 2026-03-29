const NAV_LINKS = [
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "#" },
  { label: "Changelog", href: "#" },
];

interface NavbarProps {
  activePage?: string;
}

export function Navbar({ activePage = "Features" }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 mx-auto flex h-20 w-full max-w-full items-center justify-between bg-surface/60 bg-gradient-to-b from-[#1e2023]/10 to-transparent px-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="flex items-center gap-8">
        <a href="/" className="font-headline text-2xl font-black tracking-tighter text-[#f0f0f5]">
          Obsidian AI
        </a>
        <div className="hidden items-center gap-6 font-headline font-bold tracking-tight md:flex">
          {NAV_LINKS.map(({ label, href }) =>
            label === activePage ? (
              <a
                key={label}
                className="border-b-2 border-[#adc6ff] pb-1 text-[#adc6ff]"
                href={href}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                className="text-[#c1c6d7] transition-colors hover:text-[#f0f0f5]"
                href={href}
              >
                {label}
              </a>
            )
          )}
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
  );
}

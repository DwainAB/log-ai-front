import { Navbar } from "@/app/components/navbar";
import { PricingHero } from "@/app/components/pricing-hero";
import { SiteFooter } from "@/app/components/site-footer";

export default function PricingPage() {
  return (
    <div className="font-body text-on-surface selection:bg-primary/30">
      <Navbar activePage="Pricing" />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <PricingHero />
      </main>

      <SiteFooter />
    </div>
  );
}

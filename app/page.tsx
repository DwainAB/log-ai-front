import { BottomCta } from "@/app/components/bottom-cta";
import { FeaturesBento } from "@/app/components/features-bento";
import { HeroSection } from "@/app/components/hero-section";
import { Navbar } from "@/app/components/navbar";
import { SiteFooter } from "@/app/components/site-footer";
import { WorkflowSection } from "@/app/components/workflow-section";

export default function Home() {
  return (
    <div className="font-body text-on-surface selection:bg-primary/30">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesBento />
        <WorkflowSection />
        <BottomCta />
      </main>

      <SiteFooter />
    </div>
  );
}

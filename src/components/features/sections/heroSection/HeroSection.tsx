import { MobileHero } from "@/components/features/sections/heroSection/MobileHero";
import { DesktopHero } from "@/components/features/sections/heroSection/DesktopHero";
import { useScreenStore } from "@/store/useScreenStore";
import { useSectionRefs } from "@/store/useSectionRefsStore";

export const HeroSection = () => {
  const heroRef = useSectionRefs((s) => s.refs.hero);
  const screen = useScreenStore((s) => s.screen);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative snap-start h-screen w-full pointer-events-none"
    >
      {/* Hero content on top */}
      <div className="relative z-10">
        {screen === "desktop" ? <DesktopHero /> : <MobileHero />}
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";
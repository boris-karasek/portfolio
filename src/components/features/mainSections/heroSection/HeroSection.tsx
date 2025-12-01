// HeroSection.tsx
import useIsMobile from "@/hooks/useIsMobile";
import { MobileHero } from "@/components/features/mainSections/heroSection/MobileHero";
import { DesktopHero } from "@/components/features/mainSections/heroSection/DesktopHero";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHero /> : <DesktopHero />;
};

HeroSection.displayName = "HeroSection";
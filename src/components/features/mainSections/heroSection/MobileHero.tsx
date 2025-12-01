import { HeroContent } from "@/components/features/mainSections/heroSection/HeroContent";

export const MobileHero = () => {
  return (
    <section
      id="hero"
      className="pt-[30vh] px-6 py-10 bg-transparent" 
      // ↑ pushes below the prism (adjust as needed)
    >
      <HeroContent />
    </section>
  );
};

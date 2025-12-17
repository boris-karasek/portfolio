import { HeroSection } from "@/components/features/sections/heroSection/HeroSection";
import { AboutMeSection } from "@/components/features/sections/aboutSection/AboutMeSection";
import { ProjectsSection } from "@/components/features/sections/projectsSection/ProjectsSection";
import { ContactSection } from "@/components/features/sections/contactSection/ContactSection";

export const Home: React.FC = () => {
  return (
    <div className="snap-y">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

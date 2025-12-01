import { useScroll, useTransform, motion } from "framer-motion";
import { HeroSection } from "@/components/features/mainSections/heroSection/HeroSection";
import { AboutMeSection } from "@/components/features/mainSections/aboutSection/AboutMeSection";
import { useOutletContext } from "react-router-dom";
import { ProjectsSection } from "@/components/features/mainSections/projectsSection/ProjectsSection";
import { ContactSection } from "@/components/features/mainSections/contactSection/ContactSection";

export const Home: React.FC = () => {
  const { heroRef, aboutRef, projectsRef, contactRef } = useOutletContext<{
    heroRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }>();

  // Hero scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [0, -24]);

  return (
    <main className="text-white snap-y snap-mandatory h-screen overflow-y-scroll relative z-20 scroll-container">
      <motion.div
        style={{ opacity, y: translateY }}
        ref={heroRef}
        className="snap-start min-h-screen"
      >
        <HeroSection />
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div ref={aboutRef} className="snap-start min-h-screen">
        <AboutMeSection />
      </motion.div>

      {/* PROJECTS SECTION */}
      <motion.div ref={projectsRef} className="snap-start min-h-screen">
        <ProjectsSection />
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.div ref={contactRef} className="snap-start min-h-screen">
        <ContactSection />
      </motion.div>
    </main>
  );
};

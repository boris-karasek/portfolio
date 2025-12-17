import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { PrismBackground } from "@/components/features/background/PrismBackground";
import { MobileNavigation } from "@/components/features/mobileNavigation/MobileNavigation";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { Toaster } from "../ui/sonner";
import { useScreenListener } from "@/hooks/useScreenListener";
import { useScreenStore } from "@/store/useScreenStore";
import { useUIStore } from "@/store/useUIStore";
import { PrismProjectSelector } from "../features/sections/projectsSection/PrismProjectSelector";
import { PrismTriangles } from "../features/sections/heroSection/PrismTriangles";
import { AnimatePresence, motion } from "framer-motion";
import type { SectionId } from "@/store/useUIStore";
import { scrollToSection } from "@/lib/scrollToSection";
import { usePrismStore } from "@/store/usePrismStore";

export const Layout: React.FC = () => {
  useScreenListener();
  const screen = useScreenStore((s) => s.screen);
  const sectionFullyVisible = useUIStore((s) => s.sectionFullyVisible);
  const projectsVisible = sectionFullyVisible["projects"] === true;
  const heroVisible = sectionFullyVisible["hero"] === true;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const initialize = usePrismStore((s) => s.initialize);

  useSectionObserver();

  useEffect(() => {
    function updateDimensions() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = w * 0.55;
      initialize(w, h);
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleSelect = (section: SectionId) => {
    scrollToSection(section);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`absolute top-0 left-0 w-full z-10 pointer-events-none 
          ${screen !== "desktop" ? "h-[30vh]" : "h-screen"} md:h-[50vh] xl:h-screen`}
      >
        <PrismBackground />
      </div>

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        {screen !== "desktop" && (
          <div className="pointer-events-auto">
            <MobileNavigation />
          </div>
        )}
      </div>

      {projectsVisible && (
        <div
          className={`absolute top-0 left-0 w-full z-20 pointer-events-none 
          ${screen !== "desktop" ? "h-[30vh]" : "h-screen"} md:h-[50vh] xl:h-screen`}
        >
          <PrismProjectSelector />
        </div>
      )}

      <AnimatePresence>
        {screen === "desktop" && heroVisible && (
          <motion.div
        className={`absolute top-0 left-0 w-full z-10 pointer-events-none 
          ${screen !== "desktop" ? "h-[30vh]" : "h-screen"} md:h-[50vh] xl:h-screen`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1 ,
              transition: {
                delay: 0.5,
                duration: 0.3,
                ease: "easeOut",
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              transition: { duration: 0.25, ease: "easeInOut" },
            }}
          >
            <div className="pointer-events-auto">
              <PrismTriangles onSelect={handleSelect} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main
        id="scroll-root"
        className="relative z-0 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-black"
      >
        <Outlet />
      </main>

      <Toaster />
    </>
  );
};

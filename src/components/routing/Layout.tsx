
import { Outlet } from "react-router-dom";
import { useUIStore, type SectionId } from "@/store/useUIStore";
import { PrismBackground } from "@/components/features/background/PrismBackground";
import { PrismTriangles } from "@/components/features/mainSections/heroSection/PrismTriangles";
import useIsMobile from "@/hooks/useIsMobile";
import { MobileNavigation } from "@/components/features/mobileNavigation/MobileNavigation";
import { useRef } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { PrismProjectSelector } from "../features/mainSections/projectsSection/PrismProjectSelector";

export const Layout: React.FC = () => {
  const isMobile = useIsMobile();

  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections: { id: SectionId; ref: React.RefObject<HTMLElement | null > }[] = [
    { id: "hero", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "projects", ref: projectsRef },
    { id: "contact", ref: contactRef },
  ]

  useSectionObserver(sections);

  const sectionFullyVisible = useUIStore((s) => s.sectionFullyVisible);
  const showTriangles = !isMobile && sectionFullyVisible["hero"] === true;

  const prismHeights = "h-[30vh] sm:h-[50vh] md:h-screen";

  return (
    <div id="scroll-root" className="relative min-h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black">
      {/* Fixed background */}
      <div className={`fixed inset-0 ${prismHeights} pointer-events-none z-0`}>
        <PrismBackground className="absolute inset-0 w-full h-full" />
      </div>

      {/* Triangles / mobile nav */}
      <div className={`fixed inset-0 ${prismHeights} z-30 pointer-events-none`}>
        {isMobile ? (
          <div className="pointer-events-auto">
            <MobileNavigation />
          </div>
        ) : (
          showTriangles && <PrismTriangles />
        )}
      </div>

      {/* Prism selector for projects */}
      {sectionFullyVisible["projects"]  && (
        <div className={`fixed inset-0 ${prismHeights} z-40 pointer-events-none`}>
          <PrismProjectSelector />
        </div>
      )}

      {/* Main scrollable content */}
      <div className="relative z-10">
        <Outlet context={{heroRef, aboutRef, projectsRef,contactRef}}/>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";
import type { SectionId } from "@/store/useUIStore";

export function useSectionObserver(sections: { id: SectionId; ref: React.RefObject<HTMLElement | null> }[]) {
  const setCurrentSection = useUIStore(s => s.setCurrentSection);
  const setSectionFullyVisible = useUIStore(s => s.setSectionFullyVisible);

  useEffect(() => {
    const root = document.querySelector("#scroll-root");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = sections.find((s) => s.ref.current === entry.target);
          if (!section) return;

          const visible = entry.intersectionRatio > 0.55;

          if (visible) setCurrentSection(section.id);
          setSectionFullyVisible(section.id, visible);
        });
      },
      {
        root,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));

    return () => observer.disconnect();
  }, []);
}

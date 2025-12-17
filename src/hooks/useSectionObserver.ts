import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";
import type { SectionId } from "@/store/useUIStore";
import { useSectionRefs } from "@/store/useSectionRefsStore";

export function useSectionObserver() {
  const refs = useSectionRefs((s) => s.refs);
  const setCurrentSection = useUIStore((s) => s.setCurrentSection);
  const setSectionFullyVisible = useUIStore((s) => s.setSectionFullyVisible);

  useEffect(() => {
    const root = document.querySelector("#scroll-root");
    if(!root) return;

    const sections: {id: SectionId; node: HTMLElement}[] = (Object.keys(refs) as SectionId[])
      .map((id) => ({id, node: refs[id].current}))
      .filter((s): s is {id: SectionId; node: HTMLElement} => !!s.node);

    if(sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const found = sections.find((s) => s.node === entry.target);
          if (!found) return;

          const visible = entry.intersectionRatio > 0.3;

          if (visible) setCurrentSection(found.id);
          setSectionFullyVisible(found.id, visible);
        });
      },
      {
        root,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s.node));

    return () => observer.disconnect();
  }, [refs, setCurrentSection, setSectionFullyVisible]);
}

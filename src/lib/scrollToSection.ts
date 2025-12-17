import { useSectionRefs } from "@/store/useSectionRefsStore";
import { useUIStore, type SectionId } from "@/store/useUIStore";

export function scrollToSection(
    section: SectionId,
    behavior: ScrollBehavior = "smooth"
) {
    const refs = useSectionRefs.getState().refs;
    const node = refs[section]?.current;

    if(!node) return;

    node.scrollIntoView({
        behavior,
        block: "start",
    });

    useUIStore.getState().setCurrentSection(section);
}
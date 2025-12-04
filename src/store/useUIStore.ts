import { create } from "zustand";

export type SectionId = "hero" | "about" | "projects" | "contact"

interface UIState {
    currentSection: SectionId;
    activeProject: "project1" | "project2" | null;
    sectionFullyVisible: Record<string,boolean>;
    setCurrentSection: (section: UIState["currentSection"]) => void;
    setActiveProject: (project: UIState["activeProject"]) => void;
    setSectionFullyVisible: (s: string, v: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
    currentSection: "hero",
    activeProject: "project1",
    sectionFullyVisible: {},
    setCurrentSection: (section) => set({currentSection: section}),
    setActiveProject: (project) => set({ activeProject: project }),
    setSectionFullyVisible: (section, visible) =>
    set((state) => ({
        sectionFullyVisible: {
        ...state.sectionFullyVisible,
        [section]: visible,
        },
    })),
}))
import React from "react";
import { create } from "zustand";
import type { SectionId } from "./useUIStore";

type RefsMap = Record<SectionId, React.RefObject<HTMLElement | null>>;

export const useSectionRefs = create<{
    refs: RefsMap;
}>(() => ({
    refs: {
        hero: React.createRef<HTMLElement>(),
        about: React.createRef<HTMLElement>(),
        projects: React.createRef<HTMLElement>(),
        contact: React.createRef<HTMLElement>(),
    },
}))
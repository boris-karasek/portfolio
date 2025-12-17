import { create } from "zustand";

export type Screen = "mobile" | "medium" | "desktop";

interface ScreenStore {
    screen: Screen;
    setScreen: (screen: Screen) => void;
}

export const useScreenStore = create<ScreenStore>((set) => ({
    screen: "desktop",
    setScreen: (screen) => set({screen})
}));
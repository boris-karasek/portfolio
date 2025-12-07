import { create } from "zustand";

interface MobileNavStore {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export const useMobileNavStore = create<MobileNavStore>((set) => ({
  open: false,
  toggle: () => {
    set((state) => ({ open: !state.open }));
    if (navigator.vibrate) navigator.vibrate(15);
  },
  close: () => {
    set({ open: false });
    if (navigator.vibrate) navigator.vibrate(10);
  },
}));

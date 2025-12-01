
import { create } from "zustand";
import { computePrismGeometry } from "@/components/lib/prism/computePrismGeometry";
import { computeBeamGeometry } from "@/components/lib/prism/computeBeamGeometry";
import type { PrismGeometry, BeamGeometry } from "@/components/lib/prism/prismTypes";

interface PrismState {
  prism: PrismGeometry | null;
  beams: BeamGeometry | null;

  initialize: (w: number, h: number) => void;
}

export const usePrismStore = create<PrismState>((set) => ({
  prism: null,
  beams: null,

  initialize: (w, h) => {
    const prism = computePrismGeometry(w, h);
    const beams = computeBeamGeometry(prism);
    set({ prism, beams });
  },
}));

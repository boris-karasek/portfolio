import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";

import { useUIStore } from "@/store/useUIStore";
import { usePrismStore } from "@/store/usePrismStore";

import { StarsBackground } from "@/components/features/background/StarsBackground";
import { PrismFacesGroup } from "@/components/features/background/PrismFaces";
import { RainbowBeams } from "@/components/features/background/RainbowBeams";
import { WhiteBeam } from "@/components/features/background/WhiteBeam";
import { PrismDefs } from "@/components/features/background/PrismDefs";

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 600;

interface PrismBackgroundProps {
  className?: string;
}

export const PrismBackground: React.FC<PrismBackgroundProps> = ({
  className,
}) => {
  const initialize = usePrismStore((state) => state.initialize);
  const prism = usePrismStore((state) => state.prism);
  const beams = usePrismStore((state) => state.beams);

  const isAboutVisible = useUIStore(
    (state) => state.sectionFullyVisible["about"]
  );

  const aboutControls = useAnimation();

  // Initialize geometry once
  useEffect(() => {
    initialize(VIEWBOX_WIDTH, VIEWBOX_HEIGHT);
  }, []);

  useEffect(() => {
    if (isAboutVisible) aboutControls.start("show");
    else aboutControls.start("hide");
  }, [isAboutVisible, aboutControls]);

  if (!prism || !beams) return null;

  const whiteBeamVariants: Variants = {
    inactive: { x: -(beams?.white.width ?? 0), opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    hide: {
      x: 0,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  };

  const rainbowBeamVariants: Variants = {
    inactive: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    show: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 0.45, ease: "anticipate", delay: 0.25 },
    },
    hide: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      transition: { duration: 0.25 },
    },
  };
    
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    >
      <PrismDefs width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} />

      <StarsBackground />

      {/* Prism faces */}
      <PrismFacesGroup />

      {/* Rainbow beams */}
      <RainbowBeams
        aboutControls={aboutControls}
        rainbowBeamVariants={rainbowBeamVariants}
      />

      {/* White beam */}
      <WhiteBeam
        aboutControls={aboutControls}
        whiteBeamVariants={whiteBeamVariants}
      />

      {/* Prism outline */}
      <polygon
        points={prism.prismPoints}
        fill="none"
        stroke="#8997a3"
        strokeWidth={2.5}
        pointerEvents="none"
      />
    </svg>
  );
};

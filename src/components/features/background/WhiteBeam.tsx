import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { usePrismStore } from "@/store/usePrismStore";

interface WhiteBeamProps {
  aboutControls: any;
  whiteBeamVariants: Variants;
}

export const WhiteBeam: React.FC<WhiteBeamProps> = ({
  aboutControls,
  whiteBeamVariants,
}) => {
  const whiteBeam = usePrismStore((state) => state.beams?.white);

  if (!whiteBeam) return null;

  return (
    <motion.rect
      x={whiteBeam.x}
      y={whiteBeam.y}
      width={whiteBeam.width}
      height={whiteBeam.height}
      fill="#fff"
      filter="url(#bloom)"
      initial="inactive"
      animate={aboutControls}
      variants={whiteBeamVariants}
      mask="url(#outsidePrismMask)"
      pointerEvents="none"
    />
  );
};

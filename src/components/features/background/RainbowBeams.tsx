import { motion } from "framer-motion";
import type { Variants, LegacyAnimationControls } from "framer-motion";
import { usePrismStore } from "@/store/usePrismStore";

interface RainbowBeamsProps {
  aboutControls: LegacyAnimationControls;
  rainbowBeamVariants: Variants;
}

export const RainbowBeams: React.FC<RainbowBeamsProps> = ({
  aboutControls,
  rainbowBeamVariants,
}) => {
  const beams = usePrismStore((state) => state.beams?.rainbow);
  const prismRotationDeg = usePrismStore((state) => state.prism?.prismRotationDeg);

  if(!beams || prismRotationDeg === undefined) return null;
  
  return(
  <g mask="url(#outsidePrismMask)" pointerEvents="none">
    {beams.map((beam) => (
      <motion.polygon
        key={beam.color}
        points={beam.points}
        fill={beam.color}
        filter="url(#bloom)"
        transform={`translate(${beam.x},${beam.y}) rotate(${prismRotationDeg})`}
        initial="inactive"
        animate={aboutControls}
        variants={rainbowBeamVariants}
      />
    ))}
  </g>
);
}

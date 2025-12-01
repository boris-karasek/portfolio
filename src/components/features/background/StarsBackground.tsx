import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

export interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface StarsBackgroundProps {
  countMultiplier?: number;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  countMultiplier,
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const isMobile = useIsMobile();

  countMultiplier = isMobile ? 20000 : 60000;

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / countMultiplier
    );

    const generated: Star[] = Array.from({ length: numberOfStars }).map(
      (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 2,
      })
    );

    setStars(generated);
  };

  useEffect(() => {
    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <g mask="url(#outsidePrismMask)">
      {stars.map((star) => (
        <motion.circle
          key={star.id}
          cx={`${star.x}%`}
          cy={`${star.y}%`}
          r={star.size}
          fill="white"
          opacity={star.opacity}
          animate={{ opacity: [star.opacity, 0.1, star.opacity] }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </g>
  );
};

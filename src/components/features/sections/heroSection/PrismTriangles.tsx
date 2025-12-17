import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { LegacyAnimationControls, Variants } from "framer-motion";
import { useUIStore, type SectionId } from "@/store/useUIStore";
import { usePrismStore } from "@/store/usePrismStore";
import type { Point } from "@/types/prismTypes";

interface PrismTrianglesProps {
  onSelect?: (section: SectionId) => void;
}

type TriangleItem = {
  id: SectionId;
  name: string;
  points: Point[];
  control: LegacyAnimationControls;
  fillId: string;
};

export const PrismTriangles: React.FC<PrismTrianglesProps> = ({ 
  onSelect 
}) => {
  const heroVisible = useUIStore(
    (s) => s.sectionFullyVisible.hero === true
  );
  const prism = usePrismStore((s) => s.prism);
  const topControl = useAnimation();
  const leftControl = useAnimation();
  const rightControl = useAnimation();

  if (!prism) return null;

  const { top, left, right } = prism;

  // Compute midpoints
  const midTR = { x: (top.x + right.x) / 2, y: (top.y + right.y) / 2 };
  const midLT = { x: (left.x + top.x) / 2, y: (left.y + top.y) / 2 };
  const midRL = { x: (right.x + left.x) / 2, y: (right.y + left.y) / 2 };

  const triangles = [
    {
      id: "about",
      name: "About",
      points: [top, midTR, midLT],
      control: topControl,
      fillId: "gradTop",
    },
    {
      id: "projects",
      name: "Projects",
      points: [left, midLT, midRL],
      control: leftControl,
      fillId: "gradLeft",
    },
    {
      id: "contact",
      name: "Contact",
      points: [right, midTR, midRL],
      control: rightControl,
      fillId: "gradRight",
    },
  ] satisfies TriangleItem[];

  // Animate triangles based on currentSection
  useEffect(() => {
    const action = heroVisible ? { opacity: 1, scale: 1, transition: { duration: 0.3 } } : { opacity: 0, scale: 0.85, transition: { duration: 0.2 } };
    topControl.start(action);
    leftControl.start(action);
    rightControl.start(action);
  }, [heroVisible]);

  const interactiveVariants: Variants = {
    hover: {
      scale: 1.12,
      rotate: [0, 2, -2, 0],
      transition: { duration: 0.5 },
    },
    tap: { scale: 0.95 },
  };

  const handleClick = (section: SectionId) => {
    console.log("Clicked:", section);
    onSelect?.(section);
  };

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      <svg
        viewBox={`0 0 ${prism.width} ${prism.height}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="gradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A7DFF" />
            <stop offset="50%" stopColor="#6FFFEF" />
            <stop offset="100%" stopColor="#1C52D0" />
          </linearGradient>
          <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3E7F" />
            <stop offset="50%" stopColor="#FFD300" />
            <stop offset="100%" stopColor="#C2285A" />
          </linearGradient>
          <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16E0A5" />
            <stop offset="50%" stopColor="#0AA7FF" />
            <stop offset="100%" stopColor="#0EBE8C" />
          </linearGradient>
        </defs>

        <g>
          {triangles.map((t) => {
            const pointsStr = t.points.map((p) => `${p.x},${p.y}`).join(" ");
            const centroid = {
              x: (t.points[0].x + t.points[1].x + t.points[2].x) / 3,
              y: (t.points[0].y + t.points[1].y + t.points[2].y) / 3,
            };

            return (
              <motion.g
                key={t.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={t.control}
                variants={interactiveVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ cursor: "pointer", pointerEvents: "auto" }}
                onClick={() => handleClick(t.id)}
              >
                {/* main triangle */}
                <polygon
                  points={pointsStr}
                  fill={`url(#${t.fillId})`}
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth={1.5}
                />

                {/* subtle inner sheen */}
                <polygon points={pointsStr} fill="#fff" opacity={0.04} />

                {/* label */}
                <text
                  x={centroid.x}
                  y={centroid.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize={20}
                  fontFamily="Inter, system-ui, sans-serif"
                  pointerEvents="none"
                >
                  {t.name}
                </text>
              </motion.g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useUIStore } from "@/store/useUIStore";

interface PrismTrianglesProps {
  mobileMode?: boolean;
}

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 600;

// Desktop full prism coordinates
const desktopPrism = {
  top: { x: VIEWBOX_WIDTH / 2, y: VIEWBOX_HEIGHT * 0.07 },
  left: { x: VIEWBOX_WIDTH * 0.25, y: VIEWBOX_HEIGHT * 0.93 },
  right: { x: VIEWBOX_WIDTH * 0.75, y: VIEWBOX_HEIGHT * 0.93 },
};

// Mobile top triangle coordinates (base triangle)
const mobilePrism = {
  top: { x: VIEWBOX_WIDTH / 2, y: VIEWBOX_HEIGHT * 0.1 },
  left: { x: VIEWBOX_WIDTH * 0.35, y: VIEWBOX_HEIGHT * 0.5 },
  right: { x: VIEWBOX_WIDTH * 0.65, y: VIEWBOX_HEIGHT * 0.5 },
};

export const PrismTriangles: React.FC<PrismTrianglesProps> = ({ mobileMode }) => {
  const currentSection = useUIStore((s) => s.currentSection);
  const topControl = useAnimation();
  const leftControl = useAnimation();
  const rightControl = useAnimation();

  const prism = mobileMode ? mobilePrism : desktopPrism;

  // Animate triangles based on currentSection
  useEffect(() => {
    if (currentSection === "hero") {
      topControl.start({ opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.28 } });
      leftControl.start({ opacity: 1, scale: 1, transition: { delay: 0.25, duration: 0.28 } });
      rightControl.start({ opacity: 1, scale: 1, transition: { delay: 0.35, duration: 0.28 } });
    } else {
      rightControl.start({ opacity: 0, scale: 0.85, transition: { duration: 0.18 } });
      leftControl.start({ opacity: 0, scale: 0.85, transition: { duration: 0.18 } });
      topControl.start({ opacity: 0, scale: 0.85, transition: { duration: 0.18 } });
    }
  }, [currentSection]);

  const heroTriangleVariants: Variants = {
    hover: { scale: 1.12, rotate: [0, 2, -2, 0], transition: { duration: 0.5 } },
    tap: { scale: 0.95 },
  };

  // Compute midpoints for triangles
  const midTopRight = { x: (prism.top.x + prism.right.x) / 2, y: (prism.top.y + prism.right.y) / 2 };
  const midLeftTop = { x: (prism.left.x + prism.top.x) / 2, y: (prism.left.y + prism.top.y) / 2 };
  const midRightLeft = { x: (prism.right.x + prism.left.x) / 2, y: (prism.right.y + prism.left.y) / 2 };

  const triangles = [
    { name: "About", points: [prism.top, midTopRight, midLeftTop], control: topControl, fillId: "gradTop" },
    { name: "Projects", points: [prism.left, midLeftTop, midRightLeft], control: leftControl, fillId: "gradLeft" },
    { name: "Contact", points: [prism.right, midTopRight, midRightLeft], control: rightControl, fillId: "gradRight" },
  ];

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
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

      <g style={{ pointerEvents: mobileMode ? "none" : "all" }}>
        {triangles.map((t) => {
          const pointsStr = t.points.map((p) => `${p.x},${p.y}`).join(" ");
          const centroid = {
            x: (t.points[0].x + t.points[1].x + t.points[2].x) / 3,
            y: (t.points[0].y + t.points[1].y + t.points[2].y) / 3,
          };

          return (
            <motion.g
              key={t.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={t.control}
              variants={heroTriangleVariants}
              whileHover={mobileMode ? undefined : "hover"}
              whileTap={mobileMode ? undefined : "tap"}
              style={{ cursor: mobileMode ? "default" : "pointer" }}
              onClick={mobileMode ? undefined : () => console.log(`${t.name} clicked`)}
            >
              {/* main triangle */}
              <polygon points={pointsStr} fill={`url(#${t.fillId})`} stroke="rgba(255,255,255,0.85)" strokeWidth={1.5} />

              {/* subtle inner sheen */}
              <polygon points={pointsStr} fill="#fff" opacity={0.04} />

              {/* label */}
              <text
                x={centroid.x}
                y={centroid.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#fff"
                fontSize={mobileMode ? 14 : 20}
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
  );
};

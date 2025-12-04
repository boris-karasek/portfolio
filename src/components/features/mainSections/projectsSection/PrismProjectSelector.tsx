import { usePrismStore } from "@/store/usePrismStore";
import { useUIStore } from "@/store/useUIStore";
import { motion } from "framer-motion";

export const PrismProjectSelector = () => {
  const prism = usePrismStore((state) => state.prism);
  const activeProject = useUIStore((state) => state.activeProject);
  const setActiveProject = useUIStore((state) => state.setActiveProject);

  if (!prism) return null;

  const { left, top, right, width, height } = prism;

  const centerX = (left.x + right.x) / 2;

  const leftTrianglePoints = [
    [top.x, top.y],
    [left.x, left.y],
    [centerX, left.y],
  ]
    .map((p) => p.join(","))
    .join(" ");

  const rightTrianglePoints = [
    [top.x, top.y],
    [centerX, right.y],
    [right.x, right.y],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      role="presentation"
    >
      <defs>
        {/* Gradient for text fill */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#3A7DFF" />
          <stop offset="50%" stopColor="#6FFFEF" />
          <stop offset="100%" stopColor="#0EBE8C" />
        </linearGradient>

        {/* Optional: gradient stroke width highlight */}
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#3A7DFF" />
          <stop offset="50%" stopColor="#6FFFEF" />
          <stop offset="100%" stopColor="#0EBE8C" />
        </linearGradient>
      </defs>
      <motion.g
        pointerEvents="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Triangle */}
        <polygon
          points={leftTrianglePoints}
          fill={
            activeProject === "project1"
              ? "rgba(255,255,255,0.20)"
              : "rgba(255,255,255,0.05)"
          }
          stroke={
            activeProject === "project1"
              ? "url(#strokeGradient)"
              : "rgba(255,255,255,0.25)"
          }
          strokeWidth={activeProject === "project1" ? 2 : 1}
          style={{ cursor: "pointer", pointerEvents: "auto" }}
          onClick={() => setActiveProject("project1")}
        />
        <text
          x={(left.x + centerX) / 2}
          y={left.y - 10}
          fill={activeProject === "project1" ? "url(#textGradient)" : "white"}
          fontSize="20"
          fontWeight="bold"
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
        >
          Project One
        </text>

        {/* Right Triangle */}
        <polygon
          points={rightTrianglePoints}
          fill={
            activeProject === "project2"
              ? "rgba(255,255,255,0.20)"
              : "rgba(255,255,255,0.05)"
          }
          stroke={
            activeProject === "project2"
              ? "url(#strokeGradient)"
              : "rgba(255,255,255,0.25)"
          }
          strokeWidth={activeProject === "project2" ? 2 : 1}
          style={{ cursor: "pointer", pointerEvents: "auto" }}
          onClick={() => setActiveProject("project2")}
        />
        <text
          x={(centerX + right.x) / 2}
          y={right.y - 10}
          fill={activeProject === "project2" ? "url(#textGradient)" : "white"}
          fontSize="20"
          fontWeight="bold"
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
        >
          Project Two
        </text>
      </motion.g>
    </svg>
  );
};

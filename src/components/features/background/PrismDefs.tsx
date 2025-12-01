import { usePrismStore } from "@/store/usePrismStore";

interface PrismDefsProps {
  width: number;
  height: number;
}

export const PrismDefs: React.FC<PrismDefsProps> = ({ width, height }) => {
  const prismOutline = usePrismStore((state) => state.prism?.prismPoints);

  return (
    <defs>
      {/* 3D gradients */}
      <linearGradient id="prismFace1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff20" />
        <stop offset="100%" stopColor="#00000050" />
      </linearGradient>

      <linearGradient id="prismFace2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff15" />
        <stop offset="100%" stopColor="#00000040" />
      </linearGradient>

      <linearGradient id="prismFace3" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#ffffff10" />
        <stop offset="100%" stopColor="#00000030" />
      </linearGradient>

      {/* Bloom filter */}
      <filter id="bloom" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation={8} result="b1" />
        <feGaussianBlur stdDeviation={14} result="b2" />
        <feMerge>
          <feMergeNode in="b2" />
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Mask: hide anything inside the prism */}
      <mask id="outsidePrismMask">
        <rect width={width} height={height} fill="white" />
        <polygon points={prismOutline} fill="black" />
      </mask>
    </defs>
  );
};

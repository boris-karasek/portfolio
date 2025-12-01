import React from "react";
import { usePrismStore } from "@/store/usePrismStore";

export const PrismFacesGroup: React.FC = () => {
  const prismFaces = usePrismStore((state) => state.prism?.prismFaces);

  if (!prismFaces) return null;

  return (
    <g opacity={0.7}>
      <polygon points={prismFaces.top} fill="url(#prismFace1)" />
      <polygon points={prismFaces.left} fill="url(#prismFace2)" />
      <polygon points={prismFaces.right} fill="url(#prismFace3)" />
    </g>
  );
};

import type { PrismGeometry, Point } from "@/types/prismTypes";

const PRISM_SCALE = 0.7;

export function computePrismGeometry(
  VIEWBOX_WIDTH: number,
  VIEWBOX_HEIGHT: number
): PrismGeometry {

  const w = VIEWBOX_WIDTH * PRISM_SCALE;
  const h = VIEWBOX_HEIGHT * PRISM_SCALE;

  const offsetX = (VIEWBOX_WIDTH - w) / 2;
  const offsetY = (VIEWBOX_HEIGHT - h) / 2;

  // --- Prism points ------------------------------------
  const top: Point = { x: offsetX + w / 2,        y: offsetY + h * 0.07 };
  const right: Point = { x: offsetX + w * 0.75,   y: offsetY + h * 0.93 };
  const left: Point = { x: offsetX + w * 0.25,    y: offsetY + h * 0.93 };

  const toPointString = (p: Point) => `${p.x},${p.y}`;
  const toPolygonString = (pts: Point[]) => pts.map(toPointString).join(" ");

  const prismPoints = toPolygonString([top, right, left]);

  const prismFaces = {
    top: toPolygonString([top, right, left]),
    left: toPolygonString([left, top, right]),
    right: toPolygonString([right, left, top]),
  };

  // --- Angle of right prism face (for beam rotation) ----
  const prismAngleRad = Math.atan2(right.y - top.y, right.x - top.x);
  const prismRotationDeg = (prismAngleRad * -90) / Math.PI;

  // --- Beam interpolation helpers -----------------------
  const rightEdgeLength = right.y - top.y;

  const usableStartY = top.y + rightEdgeLength * 0.1;
  const usableEndY = top.y + rightEdgeLength * 0.9;
  const usableHeight = usableEndY - usableStartY;

  // Interpolate X position on right edge for a given Y
  const interpXAtY = (y: number) =>
    ((y - top.y) / (right.y - top.y)) * (right.x - top.x) + top.x;

  return {
    width: VIEWBOX_WIDTH,
    height: VIEWBOX_HEIGHT,

    top,
    left,
    right,

    prismPoints,
    prismFaces,

    prismAngleRad,
    prismRotationDeg,

    interpXAtY,

    usableStartY,
    usableEndY,
    usableHeight,
  };
}

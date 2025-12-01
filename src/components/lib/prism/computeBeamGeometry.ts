
import type { PrismGeometry, BeamGeometry, BeamPolygon } from "@/components/lib/prism/prismTypes";


export function computeBeamGeometry(prism: PrismGeometry): BeamGeometry {
  const {
    interpXAtY,
    usableStartY,
    usableHeight,
    top,
    left,
    width,
    height,
  } = prism;

  // === Constants ============================================
  const beamLength = width * 0.73;
  const nearThickness = height * 0.07;
  const farThickness = height * 0.18;

  const baseAngle = 12;
  const colors = [
    "#e3001b",
    "#ff6a00",
    "#ffd300",
    "#00b33c",
    "#0aa7ff",
    "#5b2db1",
    "#8b2aa8",
  ];

  const spread = 40;
  const angleStep = spread / (colors.length - 1);

  // === Rainbow beams =======================================
  const rainbow: BeamPolygon[] = colors.map((color, i) => {
    const y = usableStartY + (i / (colors.length - 1)) * usableHeight;
    const x = interpXAtY(y);

    const angleDeg = baseAngle - spread / 2 + i * angleStep;
    const angleRad = (angleDeg * Math.PI) / 180;

    const dx = Math.cos(angleRad) * beamLength;
    const dy = Math.sin(angleRad) * beamLength;

    const points = [
      [0, -nearThickness],
      [0, nearThickness],
      [dx, dy + farThickness],
      [dx, dy - farThickness],
    ]
      .map((p) => p.join(","))
      .join(" ");

    return { color, points, x, y };
  });

  // === White beam ==========================================
  const whiteHitX = (left.x + top.x) / 2;
  const whiteHitY = (left.y + top.y) / 2;

  const whiteThickness = height * 0.03;
  const whiteLength = width * 0.5;

  const white = {
    x: whiteHitX - whiteLength + width * 0.04,
    y: whiteHitY - whiteThickness / 2,
    width: whiteLength,
    height: whiteThickness,
  };

  return { rainbow, white };
}

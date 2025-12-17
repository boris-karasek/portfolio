
export interface Point {
  x: number;
  y: number;
}

export interface PrismGeometry {
  width: number;
  height: number;

  top: Point;
  left: Point;
  right: Point;

  prismPoints: string;
  prismFaces: {
    top: string;
    left: string;
    right: string;
  };

  prismAngleRad: number;
  prismRotationDeg: number;

  // interpolation helper
  interpXAtY: (y: number) => number;

  // used for mapping rainbow beams
  usableStartY: number;
  usableEndY: number;
  usableHeight: number;
}

export interface BeamPolygon {
  color: string;
  points: string; // polygon string
  x: number;
  y: number;
}

export interface BeamGeometry {
  rainbow: BeamPolygon[];

  white: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

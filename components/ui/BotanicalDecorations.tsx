"use client";

import React from "react";
import {
  ShapeRosetteMandala,
  ShapeCurvedStar,
  ShapeRippleRings,
  ShapeSunburstStar,
  ShapeRadialBlossom,
  ShapeZenCircle,
  ShapePetalBlossom,
} from "./ShapesGallery";

interface ShapeProps {
  className?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

export const LotusLineArt: React.FC<ShapeProps> = (props) => (
  <ShapePetalBlossom {...props} />
);

export const OrganicWaveLine: React.FC<ShapeProps> = (props) => (
  <ShapeRippleRings {...props} />
);

export const AyurvedicLeafSprig: React.FC<ShapeProps> = (props) => (
  <ShapeRadialBlossom {...props} />
);

export const DotMatrixAccent: React.FC<ShapeProps> = (props) => (
  <ShapeCurvedStar {...props} />
);

export const MandalaCornerAccent: React.FC<ShapeProps> = (props) => (
  <ShapeRosetteMandala {...props} />
);


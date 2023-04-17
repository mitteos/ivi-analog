import React from "react";

export default interface CustomSliderProps {
  children: React.ReactNode[];
  id: string | number;
  buttonsPosition: ButtonsPositionType;
  slidesWidth: SlidesWidthType;
  lastSlide?: React.ReactNode;
}

export type SizeType = "small" | "default";
export type ButtonsPositionType = "inside" | "outside";
export type SlidesWidthType = "same" | "unknown";

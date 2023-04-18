import React from "react";

export default interface CustomSliderProps {
  children: React.ReactNode[];
  id: string | number;
  buttonsPosition: ButtonsPositionType;
  lastSlide?: React.ReactNode;
  slidesPerView: SlidesPerViewType;
}

export type SizeType = "small" | "default";
export type ButtonsPositionType = "inside" | "outside";
export type SlidesPerViewType = number | "auto";

import React from "react";

export default interface CustomSliderProps {
  children: React.ReactNode[];
  step?: number;
  size: "small" | "default";
}

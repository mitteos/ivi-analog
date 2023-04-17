import { type } from "os";
import React from "react";

export default interface CustomSliderProps {
  children: React.ReactNode[];
  size: SizeType;
  id: string | number;
}

export type SizeType = "small" | "default";

import React from "react";
import { IoMdAdd } from "react-icons/io";
import CustomButtonProps from "./types";

const getColors = (colorType: string) => {
  switch (colorType) {
    case "gradient":
      return;
    default:
      return "text-white border-2 border-white rounded-full";
  }
};

const getIcon = (iconType: string | undefined) => {
  switch (iconType) {
    case "plus":
      return <IoMdAdd size={20} />;

    default:
      return null;
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({
  colorType,
  children,
  icon,
}) => {
  return (
    <button
      className={`${getColors(
        colorType
      )} flex px-5 py-2 items-center justify-center gap-1 `}
    >
      {getIcon(icon)}
      <p>{children}</p>
    </button>
  );
};

export default CustomButton;

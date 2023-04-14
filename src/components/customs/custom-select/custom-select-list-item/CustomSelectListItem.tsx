import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import CustomSelectListItemProps from "./types";

const CustomSelectListItem: React.FC<CustomSelectListItemProps> = ({
  label,
  icon,
}) => {
  return (
    <li className="w-full mt-[12px] flex justify-between group/list-item cursor-pointer">
      <p>{label}</p>
      {icon === "check" ? (
        <BsCheckLg className="transition opacity-0 group-hover/list-item:opacity-100" />
      ) : (
        <BiRadioCircle />
      )}
    </li>
  );
};

export default CustomSelectListItem;

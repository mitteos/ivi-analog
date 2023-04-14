import React, { forwardRef } from "react";
import CustomSelectListItem from "../custom-select-list-item/CustomSelectListItem";
import CustomSelectCarusel from "../../custom-slider/CustomSlider";
import CustomSelectListProps from "./types";

const listPositionStyles = (size: string | undefined) => {
  switch (size) {
    case "big":
      return `md:group-odd/list:-left-[70%] md:group-even/list:-right-[70%] 
              md:group-first/list:!left-0 md:group-last/list:!right-0
              w-full h-auto sm:w-[420px] md:w-[630px]
            `;

    default:
      return "";
  }
};

const listItemsLayout = (size: string | undefined, visible: boolean) => {
  if (visible) {
    switch (size) {
      case "big":
        return "sm:grid sm:gap-x-[40px] sm:grid-cols-2 md:grid-cols-3";

      default:
        return "";
    }
  }
};

const CustomSelectList = forwardRef<HTMLDivElement, CustomSelectListProps>(
  ({ visible, size, options }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          flex flex-col p-4 w-full
          ${visible ? "block" : "hidden"} 
          absolute bg-[#312b45] top-[58px] rounded-md z-10 
          sm:group-odd/list:left-0 sm:group-even/list:right-0
          ${listPositionStyles(size)}
        `}
      >
        <CustomSelectCarusel visible={visible} />
        <ul
          className={`
            transition text-[#d9d7e0cc] list-none
            flex flex-col flex-wrap
            ${listItemsLayout(size, visible)}
          `}
        >
          {options.map((i, idx) => (
            <CustomSelectListItem key={idx} label={i} icon="check" />
          ))}
        </ul>
      </div>
    );
  }
);

CustomSelectList.displayName = "CustomSelectList";
export default CustomSelectList;

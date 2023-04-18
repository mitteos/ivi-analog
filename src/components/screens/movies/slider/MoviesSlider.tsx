import React from "react";
import Link from "next/link";
import CustomSlider from "@/components/customs/custom-slider/CustomSlider";
import { MoviesSliderProps } from "./type";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const MoviesSlider: React.FC<MoviesSliderProps> = ({
  title,
  id,
  children,
  link,
  lastSlide,
  slidesPerView,
}) => {
  return (
    <div>
      <div className="pl-[12px] mb-[12px] text-xl font-semibold text-white">
        {link ? (
          <Link href={link} className=" flex items-center">
            <h3>{title}</h3>
            <ChevronRightIcon className="w-[35px]" />
          </Link>
        ) : (
          <h3>{title}</h3>
        )}
      </div>

      <CustomSlider
        slidesPerView={slidesPerView}
        lastSlide={lastSlide}
        id={id}
        buttonsPosition="outside"
      >
        {children}
      </CustomSlider>
    </div>
  );
};

export default MoviesSlider;

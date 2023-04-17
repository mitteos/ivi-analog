import React from "react";
import SwiperCore, { Navigation, Swiper as SwiperClass, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/navigation";
import CustomSliderProps, { SizeType } from "./types";

SwiperCore.use([Navigation, Virtual]);

const breakpoints = (size: "small" | "default"): {} => {
  if (size === "small") return {};
  if (size === "default")
    return {
      501: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      745: {
        slidesPerView: 5,
        slidesPerGroup: 4,
      },
      921: {
        slidesPerView: 6,
        slidesPerGroup: 5,
      },
      1096: {
        slidesPerView: 7,
        slidesPerGroup: 6,
      },
    };
  return {};
};

const slideStyle = (size: SizeType) => {
  return size === "small" ? "!w-auto" : size === "default" ? "" : "";
};

const buttonsStyle = (
  size: SizeType,
  direction: "prev" | "next",
  id: number | string
) => {
  let style =
    "absolute outline-none cursor-pointer h-full flex items-center w-[30px] z-20 top-0";
  if (size === "small") {
    style += " bg-[#312b45]";
    return direction === "prev"
      ? style + ` custom-swiper-prev-small-${id} -left-[3px]`
      : style + ` custom-swiper-next-small-${id} -right-[3px]`;
  }
  if (size === "default") {
    style += " bg-transparent";
    return direction === "prev"
      ? style + ` custom-swiper-prev-${id} -left-[20px]`
      : style + ` custom-swiper-next-${id} -right-[20px]`;
  }
};

const navBubbton = (
  size: SizeType,
  direction: "prev" | "next",
  id: number | string
) => {
  if (size === "small") {
    return direction === "prev"
      ? `.custom-swiper-prev-small-${id}`
      : `.custom-swiper-next-small-${id}`;
  }
  if (size === "default") {
    return direction === "prev"
      ? `.custom-swiper-prev-${id}`
      : `.custom-swiper-next-${id}`;
  }
};

const SwiperComponent: React.FC<CustomSliderProps> = ({
  children,
  size,
  id,
}) => {
  return (
    <div className="relative mt-10 mb-10">
      <div className={buttonsStyle(size, "prev", id)}>
        <ChevronLeftIcon className="text-white w-full" />
      </div>
      <div className={buttonsStyle(size, "next", id)}>
        <ChevronRightIcon className="text-white w-full" />
      </div>
      <Swiper
        className="!static !pl-[1.5%]"
        spaceBetween={10}
        allowTouchMove={false}
        slidesPerView={size == "small" ? "auto" : 2}
        navigation={{
          nextEl: navBubbton(size, "next", id),
          prevEl: navBubbton(size, "prev", id),
        }}
        breakpoints={breakpoints(size)}
      >
        {Array.from(children).map((child, index) => (
          <SwiperSlide
            className={`swiper-slide ${slideStyle(size)}`}
            key={index}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

import React from "react";
import SwiperCore, { Navigation, Swiper as SwiperClass, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/navigation";
import CustomSliderProps, {
  ButtonsPositionType,
  SlidesWidthType,
} from "./types";

SwiperCore.use([Navigation, Virtual]);

const breakpoints = (width: SlidesWidthType): {} => {
  if (width === "unknown") return {};
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
};

const slideStyle = (width: SlidesWidthType) => {
  return width === "unknown" ? "!w-auto" : "pt-2";
};

const buttonsStyle = (
  position: ButtonsPositionType,
  direction: "prev" | "next",
  id: number | string
) => {
  let style =
    "absolute outline-none cursor-pointer h-full flex items-center w-[30px] z-20 top-0";
  if (position === "inside") {
    style += " bg-[#312b45]";
    return direction === "prev"
      ? style + ` custom-swiper-prev-${id} -left-[3px]`
      : style + ` custom-swiper-next-${id} -right-[3px]`;
  }
  if (position === "outside") {
    style += " bg-transparent";
    return direction === "prev"
      ? style + ` custom-swiper-prev-${id} -left-[25px]`
      : style + ` custom-swiper-next-${id} -right-[25px]`;
  }
};

const navBubbton = (direction: "prev" | "next", id: number | string) =>
  direction === "prev"
    ? `.custom-swiper-prev-${id}`
    : `.custom-swiper-next-${id}`;

const SwiperComponent: React.FC<CustomSliderProps> = ({
  children,
  id,
  buttonsPosition,
  slidesWidth,
  lastSlide,
}) => {
  return (
    <div className="relative">
      <div className={buttonsStyle(buttonsPosition, "prev", id)}>
        <ChevronLeftIcon className="text-white w-full" />
      </div>
      <div className={buttonsStyle(buttonsPosition, "next", id)}>
        <ChevronRightIcon className="text-white w-full" />
      </div>
      <Swiper
        className={`!static ${slidesWidth === "same" ? "!pl-[1%]" : ""}`}
        spaceBetween={10}
        allowTouchMove={false}
        slidesPerView="auto"
        navigation={{
          nextEl: navBubbton("next", id),
          prevEl: navBubbton("prev", id),
        }}
        breakpoints={breakpoints(slidesWidth)}
      >
        {Array.from(children).map((child, index) => (
          <SwiperSlide
            className={`swiper-slide ${slideStyle(slidesWidth)}`}
            key={index}
          >
            {child}
          </SwiperSlide>
        ))}
        {lastSlide && (
          <SwiperSlide className={`swiper-slide ${slideStyle(slidesWidth)}`}>
            {lastSlide}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

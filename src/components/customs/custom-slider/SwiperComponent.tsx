import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";
import CustomSliderProps from "./types";

SwiperCore.use([Navigation]);

const SwiperComponent: React.FC<CustomSliderProps> = ({ children, size }) => {
  const swiperRef = useRef<SwiperClass>();

  useEffect(() => {}, []);

  const [slides, setSlides] = useState(
    Array.from({ length: 50 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <div className="relative">
      <Swiper
        className="!static"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={10}
        allowTouchMove={false}
        slidesPerGroup={4}
        navigation={true}
        breakpoints={{
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
        }}
      >
        {Array.from(children).map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

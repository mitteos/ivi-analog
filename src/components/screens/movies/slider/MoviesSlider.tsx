import React from "react";
import Link from "next/link";
import CustomSlider from "@/components/customs/custom-slider/CustomSlider";
import { MoviesSliderProps } from "./type";
import PreviewFilm from "@/components/previews/preview-film/PreviewFilm";

const MoviesSlider: React.FC<MoviesSliderProps> = ({ title, data, id }) => {
  return (
    <div>
      <Link href="#" className="text-white">
        <h3>{title}</h3>
      </Link>
      <CustomSlider id={id} size="default">
        {data.map((i, idx) => (
          <PreviewFilm
            country="Франция"
            acception="Бесплатно"
            duration={140}
            genre="Комедия"
            year={2012}
            ratio={9.5}
            title="Один плюс один"
            key={idx}
          />
        ))}
      </CustomSlider>
    </div>
  );
};

export default MoviesSlider;

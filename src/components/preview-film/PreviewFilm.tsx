import React from "react";
import Image from "next/image";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesIconSolid } from "@heroicons/react/24/solid";
import { SparklesIcon as SparklesIconOutline } from "@heroicons/react/24/outline";
import { NoSymbolIcon as NoSymbolIconSolid } from "@heroicons/react/24/solid";
import { NoSymbolIcon as NoSymbolIconOutline } from "@heroicons/react/24/outline";
import { PreviewFilmProps } from "./types";

const PreviewFilm: React.FC<PreviewFilmProps> = ({
  ratio,
  year,
  duration,
  country,
  genre,
  z,
}) => {
  return (
    <div
      style={{ zIndex: z }}
      className={`flex-shrink-0 w-[180px] h-[280px] cursor-pointer transition hover:scale-[1.05] group/preview mt-10 overflow-visible`}
    >
      <div className="relative">
        <Image
          src="/images/one-plus-one.jpg"
          alt="one-plus-one"
          width={180}
          height={280}
          className="rounded-md"
        />

        <div
          className="
          absolute transition 
          w-full h-full top-0 left-0 flex flex-col p-5 
          opacity-0 group-hover/preview:opacity-100 rounded-md
          group-hover/preview:bg-[rgba(0,0,0,0.5)] z-20
        "
        >
          <div className="flex justify-between">
            <div className="text-white flex items-end text-[22px]">{ratio}</div>
            <div className="flex flex-col gap-2">
              <span
                data-title="Смотреть позже"
                className="
                    hover:after:content-[attr(data-title)] hover:after:block relative
                    after:-top-10 after:-translate-x-2 after:text-white after:absolute after:hidden
                    after:w-[140px] after:bg-[#1f1b2e] after:rounded-md after:p-[6px] after:z-50
                  "
              >
                <BookmarkIconOutline className="text-white w-7 stroke-[3]" />
              </span>
              <span
                data-title="Похожее"
                className="
                    hover:after:content-[attr(data-title)] hover:after:block relative
                     after:-top-10 after:-translate-x-2 after:text-white after:absolute after:hidden
                     after:min-w-[80px] after:bg-[#1f1b2e] after:rounded-md after:p-[6px] after:z-50
                   "
              >
                <SparklesIconOutline className="text-white w-7 stroke-[2]" />
              </span>

              <span
                data-title="Уже смотрел, оценить"
                className="
                  hover:after:content-[attr(data-title)] hover:after:block relative
                  after:-top-10 after:-translate-x-2 after:text-white after:absolute after:hidden
                  after:w-[190px] after:bg-[#1f1b2e] after:rounded-md after:p-[6px] after:z-50
                 "
              >
                <StarIconOutline className="text-white w-7 stroke-[3]" />
              </span>
              <span
                data-title="Не нравится такое"
                className="
                  hover:after:content-[attr(data-title)] hover:after:block relative
                  after:-top-10 after:-translate-x-2 after:text-white after:absolute after:hidden
                  after:w-[160px] after:bg-[#1f1b2e] after:rounded-md after:p-[6px] after:z-50
                 "
              >
                <NoSymbolIconOutline className="text-white w-7 stroke-[3]" />
              </span>
            </div>
          </div>

          <div className="text-white flex flex-col gap-1">
            <span>
              сюжет
              <span></span>
            </span>
            <span>
              {year},{country}
            </span>
            <span>{genre}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewFilm;

import React, { MouseEventHandler, useEffect, useRef } from "react";
import Image from "next/image";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesIconOutline } from "@heroicons/react/24/outline";
import { NoSymbolIcon as NoSymbolIconOutline } from "@heroicons/react/24/outline";
import { PreviewFilmProps } from "./types";

const PreviewFilm: React.FC<PreviewFilmProps> = ({
  ratio,
  year,
  duration,
  country,
  genre,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tooltipElem: HTMLDivElement | null;

    const mouseoverHandler = function (e: MouseEvent) {
      const target = e.target as HTMLDivElement;
      const tooltipHtml = target?.dataset.title;
      if (!tooltipHtml) return;

      tooltipElem = document.createElement("div");
      tooltipElem.className =
        "absolute rounded-md p-2 bg-[#1f1b2e] text-white z-20 text-[14px]";
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      const coords = target!.getBoundingClientRect();
      const left = coords.left;
      const top = coords.top - tooltipElem.offsetHeight - 5;

      tooltipElem.style.left = left + "px";
      tooltipElem.style.top = top + "px";
    };

    const mouseoutHandler = (e: MouseEvent) => {
      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }
    };

    const icons = ref.current
      ? (Array.from(ref.current?.children) as HTMLDivElement[])
      : [];
    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", mouseoverHandler);
      icon.addEventListener("mouseleave", mouseoutHandler);
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", mouseoverHandler);
        icon.removeEventListener("mouseleave", mouseoutHandler);
      });
    };
  }, []);

  return (
    <div
      className={`relative w-full cursor-pointer transition hover:scale-[1.05] group/preview mt-10`}
    >
      <div className="relative">
        <Image
          src="/images/one-plus-one.jpg"
          alt="film-preview"
          width={180}
          height={248}
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
            <div className="flex flex-col gap-2" ref={ref}>
              <div data-title="Смотреть позже">
                <BookmarkIconOutline className="text-white w-7 stroke-[3]" />
              </div>
              <div data-title="Похожее">
                <SparklesIconOutline className="text-white w-7 stroke-[2]" />
              </div>
              <div data-title="Уже смотрел, оценить">
                <StarIconOutline className="text-white w-7 stroke-[3]" />
              </div>
              <div data-title="Не травится такое">
                <NoSymbolIconOutline className="text-white w-7 stroke-[3]" />
              </div>
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

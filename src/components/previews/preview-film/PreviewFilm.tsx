import React, { useEffect, useRef } from "react";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesIconOutline } from "@heroicons/react/24/outline";
import { NoSymbolIcon as NoSymbolIconOutline } from "@heroicons/react/24/outline";
import { PreviewAccessType, PreviewFilmProps } from "./types";

const accessColor = (access: PreviewAccessType) => {
  switch (access) {
    case "buy":
      return "text-[#00a5ff]";
    case "free":
      return "opacity-90";
    case "sub":
      return "text-[#ea003d]";
    default:
      break;
  }
};
const accessText = (access: PreviewAccessType) => {
  switch (access) {
    case "buy":
      return "Покупка";
    case "free":
      return "Бесплатно";
    case "sub":
      return "Подписка";
    default:
      break;
  }
};

const PreviewFilm: React.FC<PreviewFilmProps> = ({
  ratio,
  year,
  duration,
  country,
  genre,
  title,
  access,
  img,
  iviChoice,
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
        "absolute rounded-md p-1 bg-[#1f1b2e] text-white z-20 text-[14px]";
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      const coords = target!.getBoundingClientRect();
      const left = coords.left;
      const top = coords.top - tooltipElem.offsetHeight - 5 + window.scrollY;

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
    <div className="flex flex-col w-auto">
      {/* Постер */}
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className={`relative w-[150px] h-[230px] cursor-pointer 
         transition hover:scale-[1.05] group/preview rounded-md bg-cover bg-center
      `}
      >
        {/* плашка "выбор иви" */}
        {iviChoice && (
          <div className="absolute top-2 -left-2 text-sm font-bold py-[2px] z-[3] px-2 rounded-full text-white bg-[#ea003d] shadow-[0_2px_8px_rgba(234,0,61,.8)]">
            выбор Иви
          </div>
        )}
        {/* Дополнительная информация */}
        <div
          className="
          absolute transition 
          w-full h-full top-0 left-0 flex flex-col 
          opacity-0 group-hover/preview:opacity-100 rounded-md
          group-hover/preview:bg-[rgba(0,0,0,0.5)] z-[2] p-3
        "
        >
          {/* Кнопки на постере */}
          <div className="flex justify-between">
            <div className="text-white flex items-end text-[22px]">{ratio}</div>
            <div className="flex flex-col gap-2" ref={ref}>
              <div data-title="Смотреть позже">
                <BookmarkIconOutline className="text-white w-6 stroke-[3]" />
              </div>
              <div data-title="Похожее">
                <SparklesIconOutline className="text-white w-6 stroke-[2]" />
              </div>
              <div data-title="Оценить">
                <StarIconOutline className="text-white w-6 stroke-[3]" />
              </div>
              <div data-title="Не нравится">
                <NoSymbolIconOutline className="text-white w-6 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Описание */}
          <div className="text-white flex flex-col text-[13px]">
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
      {/* Название */}
      <div className="text-white mt-2">
        <p className="font-semibold leading-[22px]">{title}</p>
        <p className={`leading-[16px] text-[15px] ${accessColor(access)}`}>
          {accessText(access)}
        </p>
      </div>
    </div>
  );
};

export default PreviewFilm;

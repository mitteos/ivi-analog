import React from "react";
import { PreviewActorProps } from "./types";
import plural from "plural-ru";

const PreviewActor: React.FC<PreviewActorProps> = ({
  firstName,
  secondName,
  films,
  img,
}) => {
  return (
    <div className="flex flex-col w-auto">
      {/* аватарка актера */}
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className={`
          relative  h-[150px] w-[150px] rounded-full cursor-pointer bg-cover bg-no-repeat
          transition hover:scale-[1.05] group/preview  bg-center
        `}
      >
        <span
          className="
          relative top-[82%] bg-[#a869f0] text-white z-20 h-[30px] rounded-sm text-[15px]
          font-semibold py-[5px] px-[8px]
        "
        >
          {films}
          <span className="absolute top-[-2px] bg-[rgba(168,105,240,.64)] left-[3px] right-[3px] bottom-[100%] rounded-sm" />
        </span>
      </div>

      {/* Имя и количество фильмов */}
      <div className="text-white mt-2">
        <p className="font-semibold leading-[22px]">{firstName}</p>
        <p className="font-semibold leading-[22px]">{secondName}</p>
        <p className="opacity-70 leading-[16px] text-[15px]">
          <span>{films}</span>
          {plural(films, "фильм", "фильма", "фильмов")}
        </p>
      </div>
    </div>
  );
};

export default PreviewActor;

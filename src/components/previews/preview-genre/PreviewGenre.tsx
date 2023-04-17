import React from "react";
import { PreviewGenreProps } from "./types";

const PreviewGenre: React.FC<PreviewGenreProps> = ({ icon, title }) => {
  return (
    <div
      className="
        h-[110px] w-[150px] rounded-md bg-[#1f1b2e] cursor-pointer 
        transition hover:opacity-100 opacity-90 flex justify-center items-center"
    >
      <div className="opacity-100 text-white flex flex-col justify-center items-center gap-1">
        <div>{icon}</div>
        <p className="text-[13px]">{title}</p>
      </div>
    </div>
  );
};

export default PreviewGenre;

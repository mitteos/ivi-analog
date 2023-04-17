import Image from "next/image";
import React from "react";
import { PreviewCollectionProps } from "./types";
import Link from "next/link";

const PreviewCollection: React.FC<PreviewCollectionProps> = ({
  link,
  title,
  img,
}) => {
  return (
    <Link href={link}>
      <div
        className="
        h-[200px] w-[290px] rounded-md bg-[#1f1b2e]  p-2
        flex justify-center items-center"
      >
        <Image
          alt="коллекция"
          src={img}
          width={290}
          height={200}
          className="rounded-sm"
        />
      </div>
      <p className="mt-2 text-white text-[15px] font-semibold">{title}</p>
    </Link>
  );
};

export default PreviewCollection;

import Image from "next/image";
import React from "react";
import { PreviewCollectionProps } from "./types";
import Link from "next/link";

const PreviewCollection: React.FC<PreviewCollectionProps> = ({
  link,
  title,
  img,
}) => {
  // h-[185px] w-[275px]
  return (
    <Link href={link}>
      <div
        className="
        rounded-md bg-[#1f1b2e]  p-2
        flex justify-center items-center"
      >
        <Image
          alt="коллекция"
          src={img}
          width={295}
          height={185}
          className="rounded-sm"
        />
      </div>
      <p className="mt-2 text-white text-[15px] font-semibold">{title}</p>
    </Link>
  );
};

export default PreviewCollection;

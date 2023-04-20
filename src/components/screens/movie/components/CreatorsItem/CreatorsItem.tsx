import React from "react";
import Image from "next/image";
import CreatorIcon from "@/assets/images/creatorIcon.jpg";
import Link from "next/link";

interface CreatorsItemProps {
  isMore?: boolean;
  isModal?: boolean;

}

export const CreatorsItem: React.FC<CreatorsItemProps> = ({
  isMore = false,
  isModal = false
}) => {
  if (isMore)
    return (
      <Link
        href="/"
        className="flex items-center justify-center rounded-full w-[88px] h-[88px] group bg-[#1F1B2E] hover:bg-[#1F1B2E]"
      >
        <p className="group-hover:text-gray-400 transition-colors duration-300 text-gray-500">
          Ещё
        </p>
      </Link>
    );
  return (
    <Link href="/actor/1" className={`group ${isModal ? 'max-w-[128px]' : 'max-w-[88px]'}`}>
      <div>
        <Image
          className={`${isModal ? 'w-[128px] h-[128px]' : 'w-[88px] h-[88px]'} object-cover rounded-full mb-1`}
          src={CreatorIcon}
          alt="creator name"
        />
        <p className={`${isModal ? 'text-[16px] font-bold' : 'text-[14px]'} text-gray-400 transition-colors duration-300 group-hover:text-gray-200 leading-[100%]`}>
          Питер Фаррелли
        </p>
        <p className="text-gray-500 text-[13px]">режисёр</p>
      </div>
    </Link>
  );
};

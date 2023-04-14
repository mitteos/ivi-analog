import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import CustomButton from "../custom-button/CustomButton";
import CustomSliderProps from "./types";

const caruselData = [
  "Россия",
  "США",
  "Франция",
  "Китай",
  "Корея",
  "Великобритания",
  "Испания",
  "Италия",
  "Бразилия",
  "Индия",
];

const CustomSlider: React.FC<CustomSliderProps> = ({ visible }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleNextClick = useCallback(() => {
    setCurrentPosition((curr) => {
      if (sliderContentRef.current && sliderRef.current) {
        if (
          sliderRef.current.offsetWidth + 50 >
          sliderRef.current.scrollWidth
        ) {
          setShowNextButton(false);
        }

        if (sliderRef.current.offsetWidth < sliderRef.current.scrollWidth) {
          curr -= 50;
          sliderContentRef.current.style.transform = `translateX(${curr}px)`;
          setShowPrevButton(true);
        }
      }
      return curr;
    });
  }, []);

  const handlePrevClick = useCallback(() => {
    setCurrentPosition((curr) => {
      if (sliderContentRef.current && sliderRef.current) {
        if (curr + 50 === 0) setShowPrevButton(false);
        if (curr < 0) {
          curr += 50;
          sliderContentRef.current.style.transform = `translateX(${curr}px)`;
          setShowNextButton(true);
        }
      }
      return curr;
    });
  }, []);

  // определяем нужны копки или нет
  useEffect(() => {
    if (visible) {
      if (sliderRef.current) {
        if (sliderRef.current.offsetWidth < sliderRef.current.scrollWidth) {
          setShowNextButton(true);
        }
      }
    } else setCurrentPosition(0);
    // приводим в исходное состояние
    return () => {
      sliderContentRef.current!.style.transform = `translateX(${0}px)`;
      setShowPrevButton(false);
      setCurrentPosition(0);
    };
  }, [visible]);

  return (
    <div
      ref={sliderRef}
      className="z-20 w-full overflow-hidden relative border-b-2 border-b-white"
    >
      {showPrevButton && (
        <div
          onClick={handlePrevClick}
          className="absolute top-0 left-0 cursor-pointer h-full flex items-center w-[20px] bg-[#312b45] z-20"
        >
          <BsChevronCompactLeft className="text-white" size={25} />
        </div>
      )}
      <div
        ref={sliderContentRef}
        className="
          flex w-auto mt-2 pb-4  gap-2 transition
        "
      >
        {caruselData.map((data, idx) => (
          <CustomButton icon="plus" colorType="default" key={idx}>
            {data}
          </CustomButton>
        ))}
      </div>
      {showNextButton && (
        <div
          onClick={handleNextClick}
          className="absolute top-0 right-0 cursor-pointer h-full flex items-center w-[20px] bg-[#312b45] z-20"
        >
          <BsChevronCompactRight className="text-white" size={25} />
        </div>
      )}
    </div>
  );
};

export default CustomSlider;

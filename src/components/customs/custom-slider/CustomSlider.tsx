import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CustomSliderProps from "./types";

const scrollOptions: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
};

const CustomSlider: React.FC<CustomSliderProps> = ({ children, step = 2 }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  const initialAmountOfVisibleItemsRef = useRef<number>(0);
  const lastVisibleItemIndexRef = useRef<number>(0);
  const firstVisibleItemIndexRef = useRef<number>(0);
  const listOfItemsRef = useRef<HTMLCollection>();
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleNextClick = useCallback(() => {
    lastVisibleItemIndexRef.current += step;
    if (lastVisibleItemIndexRef.current < listOfItemsRef.current!.length - 1) {
      firstVisibleItemIndexRef.current += step;
      listOfItemsRef.current![lastVisibleItemIndexRef.current].scrollIntoView(
        scrollOptions
      );
      setShowPrevButton(true);
    } else {
      lastVisibleItemIndexRef.current = listOfItemsRef.current!.length - 1;
      listOfItemsRef.current![lastVisibleItemIndexRef.current].scrollIntoView(
        scrollOptions
      );
      setShowNextButton(false);

      let amountOfVisibleItems = 0;
      let summOfItemsWidth = 0;
      const sliderWidth = sliderContentRef.current!.clientWidth;
      const listOfItemsWidth = Array.from(listOfItemsRef.current!)
        .reverse()
        .map((i) => i.clientWidth + 8);

      for (const itemWidth of listOfItemsWidth) {
        summOfItemsWidth += itemWidth;
        if (summOfItemsWidth <= sliderWidth) {
          amountOfVisibleItems++;
        } else {
          firstVisibleItemIndexRef.current =
            listOfItemsRef.current!.length - amountOfVisibleItems;
          break;
        }
      }
    }
  }, []);

  const handlePrevClick = useCallback(() => {
    if (firstVisibleItemIndexRef.current - step > 0) {
      firstVisibleItemIndexRef.current -= step;
      lastVisibleItemIndexRef.current -= step;
      listOfItemsRef.current![firstVisibleItemIndexRef.current].scrollIntoView(
        scrollOptions
      );
      setShowNextButton(true);
    } else {
      firstVisibleItemIndexRef.current = 0;
      lastVisibleItemIndexRef.current =
        initialAmountOfVisibleItemsRef.current - 1;

      listOfItemsRef.current![0].scrollIntoView(scrollOptions);
      setShowPrevButton(false);
    }
  }, []);

  useEffect(() => {
    listOfItemsRef.current = sliderContentRef.current!.children;
    let amountOfVisibleItems = 0;
    let summOfItemsWidth = 0;
    const sliderWidth = sliderContentRef.current!.clientWidth;
    const listOfItemsWidth = Array.from(listOfItemsRef.current).map(
      (i) => i.clientWidth + 8
    );

    for (const itemWidth of listOfItemsWidth) {
      summOfItemsWidth += itemWidth;
      if (summOfItemsWidth <= sliderWidth) {
        amountOfVisibleItems++;
      } else {
        initialAmountOfVisibleItemsRef.current = amountOfVisibleItems;
        lastVisibleItemIndexRef.current = amountOfVisibleItems - 1;
        break;
      }
    }

    if (amountOfVisibleItems !== listOfItemsRef.current.length) {
      setShowNextButton(true);
    } else setShowNextButton(false);

    setShowPrevButton(false);

    return () => {
      listOfItemsRef.current &&
        listOfItemsRef.current[0].scrollIntoView({ block: "nearest" });
      firstVisibleItemIndexRef.current = 0;
      lastVisibleItemIndexRef.current = 0;
      initialAmountOfVisibleItemsRef.current = 0;
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="z-20 w-full relative border-b-2 border-b-white flex items-center"
    >
      {showPrevButton && (
        <div
          onClick={handlePrevClick}
          className="absolute top-0 -left-[20px] cursor-pointer h-full flex items-center w-[20px] bg-[#312b45] z-20"
        >
          <ChevronLeftIcon className="text-white w-5" />
        </div>
      )}
      <div
        ref={sliderContentRef}
        className="flex w-full mt-2 pb-4 gap-4 transition overflow-hidden"
      >
        {children}
      </div>
      {showNextButton && (
        <div
          onClick={handleNextClick}
          className="absolute top-0 -right-[20px] cursor-pointer h-full flex items-center w-[20px] bg-[#312b45] z-20"
        >
          <ChevronRightIcon className="text-white" />
        </div>
      )}
    </div>
  );
};

export default CustomSlider;

"use client";

import Image from "next/image";
import Link from "next/link";
import { SwiperData } from "./HomeData";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SwiperData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SwiperData.length);
  };
  const currentData = SwiperData[currentIndex];
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="w-[100%] flex">
        <Image
          src={currentData.src}
          className="w-[100%] rounded-xl h-[100%]"
          alt="hero-sec-img"
        />
      </div>

      <div className="grid grid-rows-3 justify-center items-center">
        <h1 className="font-bold text-7xl">{currentData.title}</h1>

        <div className="flex flex-col justify-center w-full gap-4">
          <p className="font-bold text-xl">{currentData.subtitle}</p>
          <Link
            href={currentData.link.href}
            className="bg-[#f5bb4f] hover:bg-[#e9cc98] text-xl font-bold text-black h-16 rounded-xl flex justify-center items-center"
          >
            {currentData.link.text}
          </Link>
        </div>

        <div className="grid grid-cols-2 justify-end gap-4 w-full">
          <button
            onClick={showPrevImage}
            className="flex flex-row items-center justify-center gap-2 grad bg-gradient-to-r from-[#38342d] bg-[#ebdbbe] hover:bg-[#e9cc98] text-xl font-bold text-black h-16 rounded-xl prev-swipe"
          >
            <ArrowLeft2 variant="Bold" size="24" color="#000000" />
            Prev
          </button>
          <button
            onClick={handleNext}
            className="flex flex-row items-center justify-center gap-2 grad bg-gradient-to-r from-[#ebdbbe] bg-[#38342d]  hover:bg-[#e9cc98] text-xl font-bold text-black h-16 rounded-xl next-swipe'"
          >
            Next
            <ArrowRight2 variant="Bold" size="24" color="#000000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

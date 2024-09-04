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
    <div className="flex flex-row gap-4 w-full px-6 h-[600PX]">
        <Image
          src={currentData.src}
          className="w-[32.1%] rounded-xl h-fit"
          alt="hero-sec-img"
        />
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-5xl">{currentData.slogan}</h1>
        <div className="flex flex-col justify-center w-full gap-4">
          <h1 className="font-bold text-4xl">{currentData.title}</h1>
          <p className="font-bold text-2xl">{currentData.subtitle}</p>
        </div>
        <Link
          target="_blank"
          href="/products"
          className="bg-[#f5bb4f] hover:bg-[#e9cc98] text-xl font-bold text-black h-16 rounded-xl flex justify-center items-center"
        >
          Read More & Buy Now
        </Link>
        
        <div className="grid grid-cols-2 justify-end gap-4 w-full">
          <button
            onClick={showPrevImage}
            className="flex flex-row items-center justify-center gap-2 grad bg-gradient-to-r from-[#c78b22] bg-[#ebdbbe] text-xl font-bold text-black h-16 rounded-xl prev-swipe"
          >
            <ArrowLeft2 variant="Bold" size="24" color="#000000" />
            Prev
          </button>
          <button
            onClick={handleNext}
            className="flex flex-row items-center justify-center gap-2 grad bg-gradient-to-r from-[#ebdbbe] bg-[#c78b22] text-xl font-bold text-black h-16 rounded-xl next-swipe'"
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { SwiperData } from "./HomeData";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import useWindowSize from "@/hooks/WindowSize";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowSize = useWindowSize();

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
    <div className="flex flex-row items-center justify-center gap-4 px-6 h-full">
      {/* prev btn */}
      <button onClick={showPrevImage} className="bg-[#9e9687] p-2 rounded-md ">
        <ArrowLeft2 variant="Bold" size="24" color="#000000" />
      </button>

      {/* Middle of the component*/}
      <div className="flex flex-row justify-center items-center gap-4">
        <Image
          src={currentData.src}
          className="w-fit rounded-xl h-[600px]"
          alt="hero-sec-img"
        />
        <div className="flex flex-col justify-between gap-10">
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
        </div>
      </div>
      {/* next btn */}
      <button onClick={handleNext} className="bg-[#9e9687] p-2 rounded-md ">
        <ArrowRight2 variant="Bold" size="24" color="#000000" />
      </button>
    </div>
  );
};

export default HeroSection;

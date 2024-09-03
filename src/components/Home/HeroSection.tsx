import Image from "next/image";
import React from "react";
import HeroSecImg from "@/../public/jpg/hero-sec.jpg";
import SwiperPagination from "../Common/SwiperPagination";
const HeroSection = () => {
  return (
    <div className=" ">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="w-full flex">
          <Image
            className="w-[100%] rounded-xl"
            alt="hero-sec-img"
            src={HeroSecImg}
          />
        </div>
        <div>
          <div className="flex flex-col justify-center w-full gap-4">
            <p className="font-bold text-xl">
              Let’s make the easiest coffee ice cream! It’s creamy and
              scoopable, made with roasty-toasy coffee and a mega amount of
              crumbled chocolate cookies. This is the dessert of summer that
              also sometimes doubles as dinner. Just here to introduce you to
              your newest kitchen superpower: ice cream without an ice cream
              maker. Really, this should…
            </p>
            <button className="bg-[#f5bb4f] hover:bg-[#e9cc98] text-xl font-bold text-black h-16 rounded-xl">
              Read More
            </button>
          </div>
          <SwiperPagination />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

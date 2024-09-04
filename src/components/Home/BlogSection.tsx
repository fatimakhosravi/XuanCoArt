"use client";

import React from "react";
import { BlogSectionData, SwiperData } from "./HomeData";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h1 className="text-7xl font-bold ">Blogs</h1>
      <div className="grid grid-cols-3 gap-4">
        {BlogSectionData.map((item, index) => (
          <div
            key={index}
            className=" bg-[#9e9687] rounded-xl p-4 flex flex-col items-center justify-center gap-2"
          >
            <Image
              className="w-[100%] rounded-xl h-full"
              alt="bread-img"
              src={item.src}
            />
            <h1 className="text-2xl font-bold text-black">{item.title}</h1>
            <p className="text-base font-bold text-black">{item.subtitle}</p>
            <Link
              target="_blank"
              href={item.link.href}
              className="bg-[#f5bb4f] hover:bg-[#e9cc98] text-base font-bold text-black h-16 rounded-xl flex justify-center items-center w-full"
            >
              {item.link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

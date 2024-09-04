"use client";
import Image from "next/image";
import React from "react";
import FatimaImage from "@/../public/jpg/about/fatima.jpg";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h1 className="text-7xl font-bold ">ABOUT</h1>
      <div className="grid grid-cols-2 gap-4">
        <Image
          className="w-[100%] rounded-xl h-full"
          alt="bread-img"
          src={FatimaImage}
        />
        <div className="flex flex-col justify-center items-center p-6 gap-4 grad bg-gradient-to-r from-[#5e5a52] bg-[#38342d] rounded-xl">
          <p className="text-base font-bold">
            Balancing a career in front-end development with my passion for
            baking bread may seem like two entirely different worlds, but I find
            both equally rewarding. As a front-end developer, my day-to-day
            involves creating seamless, intuitive interfaces that users love.
            It’s about writing clean code, solving puzzles, and bringing ideas
            to life on a screen. I thrive on the creative freedom of designing
            responsive layouts, making sure that each detail is pixel-perfect.
            The iterative process of coding and testing feels a lot like
            crafting something meaningful—much like baking bread.
          </p>
          <p className="text-base font-bold">
            When I step away from the keyboard and into the kitchen, the same
            principles of precision and creativity apply. Baking bread,
            particularly French bread, requires a deep understanding of how
            ingredients interact—just like the components of a website. The
            exact balance of flour, water, yeast, and salt determines the
            texture and taste, much like how HTML, CSS, and JavaScript work
            together to shape the look and feel of a web page. It’s all about
            patience, process, and the satisfaction that comes when something
            beautiful and functional emerges.
          </p>
          <p className="text-base font-bold">
            In both fields, attention to detail is everything. Whether I’m
            debugging a tricky CSS issue or making sure my baguette gets the
            perfect golden crust, I’m driven by a passion for creating something
            others can enjoy. And, interestingly, both bread and code share an
            element of artistry—while the technical side is critical, a personal
            touch brings everything together. Both pursuits offer me a way to
            experiment, refine my craft, and ultimately create something with
            lasting impact.
          </p>
          <Link
            target="_blank"
            href="/contact-us"
            className="bg-[#f5bb4f] hover:bg-[#e9cc98] text-base font-bold text-black h-16 rounded-xl flex justify-center items-center w-full"
          >
            Contact With Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

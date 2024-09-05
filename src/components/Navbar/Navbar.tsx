"use client";
import React from "react";
import { NavbarData } from "./NavbarData";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/jpg/common/bread-farm-logo.jpg";

const Navbar = () => {

  return (
    <div className="py-6">
      <div className="flex flex-row justify-center items-center gap-4 grad bg-gradient-to-r from-[#f0d88c] bg-[#eee2ba] p-4 rounded-xl w-full shadow-md shadow-[#70695c]">
        <Link className="flex flex-col items-center justify-center" href="/home">
          <Image className="w-16 rounded-md" alt="logo" src={Logo} />
          <p className="font-bold text-sm">XuanCoArt</p>
        </Link>
        {NavbarData.map((item, index) => (
          <div
            className="flex flex-row items-center justify-center"
            key={index}
          >
            <Link
              target="_blank"
              className="text-xl font-bold hover:text-[#0818A8] text-black"
              href={item.href}
            >
              {item.link_name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

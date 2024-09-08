"use client";
import React from "react";
import { NavbarData } from "./NavbarData";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/jpg/common/bread-farm-logo.jpg";
import CommonLink from "../Common/CommonLink";

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="flex flex-row justify-around items-center gap-4 grad bg-gradient-to-r from-[#f0d88c] bg-[#eee2ba] p-4 rounded-xl w-full shadow-md shadow-[#70695c]">
        {/* logo sec */}
        <Link
          className="flex flex-col items-center justify-center"
          href="/home"
        >
          <Image className="w-16 rounded-md" alt="logo" src={Logo} />
          <p className="font-bold text-sm">XuanCoArt</p>
        </Link>
        <div className="flex flex-row justify-between items-center gap-4">
          {/* links sec */}
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
        {/* authentication sec */}
        <div className="flex flex-row gap-4 ">
          <CommonLink
            class_name="w-32 text-xl !bg-[#f1c87a] hover:!bg-[#eee2ba] h-12 shadow p-4 hover:text-[#0818A8]"
            href="/sign-up"
            text_link="SignUp"
          />
          <CommonLink
            class_name="w-32 !bg-[#f1c87a] hover:!bg-[#eee2ba] text-xl !h-12 shadow p-4 hover:text-[#0818A8]"
            href="/log-in"
            text_link="LogIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

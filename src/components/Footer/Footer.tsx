"use client";

import React from "react";
import { ContactFooterData, SiteMapFooterData } from "./FooterData";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/jpg/common/bread-farm-logo.jpg";

const Footer = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-3 gap-4 grad bg-gradient-to-r from-[#f7d566] bg-[#f7e5ab] p-6 rounded-xl w-full shadow-md">
        {/* logo sec */}
        <Link className="flex flex-col " href="/home">
          <Image className="w-24 rounded-md" alt="logo" src={Logo} />
          <p className="font-bold text-lg">XuanCoArt</p>
        </Link>
        {/* site map sec */}
        <div className="grid grid-cols-2 col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-black">SITE MAP</h1>
            <div className="flex flex-col">
              {SiteMapFooterData.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  className="text-lg font-bold hover:text-[#0818A8] text-black"
                  href={item.href}
                >
                  {item.link_name}
                </Link>
              ))}
            </div>
          </div>
          {/* contact sec */}
          <div className="flex flex-col gap-4 ">
            <h1 className="font-bold text-2xl text-black">CONTACT</h1>
            <div className="flex flex-row justify-start gap-4">
              {ContactFooterData.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  className=" text-lg font-bold hover:border-b-2 border-[#0818A8]"
                  href={item.href}
                >
                  <Image className="w-12" alt="icon" src={item.src!} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

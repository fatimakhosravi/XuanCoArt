"use client";

import React from "react";
import { ContactFooterData, SiteMapFooterData } from "./FooterData";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/jpg/common/bread-farm-logo.jpg";

const Footer = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 items-start gap-4 grad bg-gradient-to-r from-[#fdd03d] bg-[#ebd489] p-6 rounded-xl w-full shadow-md">
        <Image className="w-60 rounded-md" alt="logo" src={Logo} />

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-black">SITE MAP</h1>
            <div className="flex flex-col">
              {SiteMapFooterData.map((item, index) => (
                <Link
                  key={index}
                  className="text-lg font-bold hover:text-[#0818A8] text-black"
                  href={item.href}
                >
                  {item.link_name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h1 className="font-bold text-2xl text-black">CONTACT</h1>
            <div className="flex flex-row w-full justify-start gap-4">
              {ContactFooterData.map((item, index) => (
                <Link
                  key={index}
                  className="text-lg font-bold hover:border-b-2 border-[#0818A8]"
                  href={item.href}
                >
                  <Image className="w-14" alt="icon" src={item.src!} />
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

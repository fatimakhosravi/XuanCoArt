import React from "react";
import { NavbarData } from "./NavbarData";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/jpg/common/bread-farm-logo.jpg";

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="flex flex-row justify-center gap-4 grad bg-gradient-to-r from-[#e9cf7c] bg-[#eee2ba] p-4 rounded-xl w-full shadow-md shadow-[#70695c]">
        <Link href="/home">
          <Image className="w-24 !h-[100px] rounded-md" alt="logo" src={Logo} />
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

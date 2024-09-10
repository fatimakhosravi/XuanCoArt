"use client";

import Image from "next/image";
import React from "react";
import BreadImg from "@/../public/jpg/common/bred-authentication.jpg";
import { Google } from "iconsax-react";
import CommonLink from "../Common/CommonLink";
import CommonButton from "../Common/CommonButton";
import Link from "next/link";

const LogInForm = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center px-40">
      {/* img sec */}
      <Image
        className="w-[100%] h-[85%] opacity-30 rounded-tl-xl rounded-bl-xl col-start-1 col-span-1 bg-[#16295e]"
        src={BreadImg}
        alt="ssds"
      />
      {/* form sec */}
      <div className="w-[100%] h-[85%] rounded-tr-xl rounded-br-xl grid col-start-2 items-center col-span-1 bg-[#16295e] p-4">
        <form className="grid gap-6">
          <div className="text-center">
            <h1 className="font-bold text-4xl text-[#f5bb4f]">LogIn</h1>
          </div>
          <div className=" gap-1">
            <label className="font-bold text-lg">Email</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Email"
            />
          </div>
          <div className=" gap-1">
            <label className="font-bold text-lg">Password</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Password"
            />
          </div>
          <Link href="/" className="font-bold text-lg hover:text-[#e9cc98]">
            Forgot Password?
          </Link>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-center items-center gap-4">
              <CommonButton
                on_click={() => {}}
                text_button="LogIn"
                class_name="h-12 !text-lg  w-full"
              />
              <CommonLink
                href="/sign-up"
                text_link="SignUp"
                class_name="h-12 !text-lg"
              />
            </div>
            <CommonLink
              class_name="h-12 !text-lg"
              href="/sign-in"
              text_link="LogIn With Google"
              icon={<Google variant="Bold" size="24" color="#16295e" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;

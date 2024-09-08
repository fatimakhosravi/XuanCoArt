import Image from "next/image";
import React from "react";
import BreadImg from "@/../public/jpg/common/bred-authentication.jpg";
import { Google } from "iconsax-react";
import CommonLink from "../Common/CommonLink";

const SignUpForm = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center px-40">
      {/* img sec */}
        <Image
          className="w-full h-[100%] opacity-30 rounded-tl-xl rounded-bl-xl col-start-1 col-span-1  bg-[#16295e]"
          src={BreadImg}
          alt="ssds"
        />
      {/* form sec */}
      <div className="w-[100%] h-[100%] rounded-tr-xl rounded-br-xl grid col-start-2 items-center col-span-1 bg-[#16295e] p-4">
        <form className="grid gap-6">
          <div className="w-full flex flex-col items-start gap-1">
            <label className="font-bold text-lg">Full Name</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="font-bold text-lg">Email</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="font-bold text-lg">Phone Number</label>
            <input
              className=" w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="font-bold text-lg">Password</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="font-bold text-lg">Retype Password</label>
            <input
              className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
              placeholder="Enter Retype Password"
            />
          </div>
          <div className="flex flex-col gap-6">
            <CommonLink
              href="/log-in"
              text_link="LogIn"
              class_name="h-12 !text-lg"
            />
            <CommonLink
              class_name="h-12  !text-lg"
              href="/sign-in"
              text_link="SignUp With Google"
              icon={<Google variant="Bold" size="24" color="#16295e" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

import Image from "next/image";
import React from "react";
import BreadImg from "@/../public/jpg/common/bred-authentication.jpg";
import { Google } from "iconsax-react";
import CommonLink from "../Common/CommonLink";

const LogInForm = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center px-40">
      {/* img sec */}
        <Image
          className=" h-[100%] opacity-30 rounded-tl-xl rounded-bl-xl w-[100%] col-start-1 col-span-1 bg-[#16295e]"
          src={BreadImg}
          alt="ssds"
        />
      {/* form sec */}
      <div className="w-[100%] h-[100%] rounded-tr-xl rounded-br-xl grid col-start-2 items-center col-span-1 bg-[#16295e] p-4">
        <form className="grid gap-6">
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

          <div className="flex flex-col gap-6">
              <CommonLink
              href="/sign-up"
              text_link="SignUp"
              class_name="h-12 !text-lg"
            />
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

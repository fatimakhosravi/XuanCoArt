import Image from "next/image";
import React from "react";
import ssds from "@/../public/jpg/hero-sec/pain-complet-maison.jpg";
import { Google } from "iconsax-react";

const SignUpForm = () => {
  return (
    <div className="grid grid-cols-4 justify-center items-center">
      <div className="w-[100%] col-start-2 col-span-1 h-[100%] bg-[#16295e] rounded-tl-xl rounded-bl-xl ">
        <Image
          className="h-[100%] opacity-50 rounded-tl-xl rounded-bl-xl "
          src={ssds}
          alt="ssds"
        />
      </div>
      <form className="w-[100%] h-[100%] rounded-tr-xl rounded-br-xl grid col-start-3 col-span-1 gap-6 bg-[#16295e] p-4">
        <div className="w-full flex flex-col items-start gap-1">
          <label className="font-bold text-sm ">Full Name</label>
          <input
            className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="font-bold text-sm">Email</label>
          <input
            className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="font-bold text-sm">Phone Number</label>
          <input
            className=" w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="font-bold text-sm">Password</label>
          <input
            className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="font-bold text-sm">Retype Password</label>
          <input
            className="w-full bg-[#ffff] h-12 rounded-lg p-2 text-black focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Enter Retype Password"
          />
        </div>
        <div className="flex flex-col gap-6">
          <button className="bg-[#f5bb4f] hover:bg-[#e9cc98] h-12 rounded-lg text-black font-bold">
            Create An Account
          </button>
          <button className="bg-[#f5bb4f] hover:bg-[#e9cc98] h-12 rounded-lg text-black font-bold flex flex-row gap-1 items-center justify-center">
          <Google variant="Bold" size="24" color="#16295e"/>
            SignUp With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

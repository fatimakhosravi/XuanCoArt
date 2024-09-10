import { CommonButtonProps } from "@/interface/Common/CommonButtonInterface";
import React, { FC } from "react";

const CommonButton: FC<CommonButtonProps> = ({
  class_name,
  text_button,
  icon,
  on_click,
}) => {
  return (
    <div className="w-full">
      <button
        onClick={on_click}
        className={`${class_name} gap-1 rounded-lg bg-[#f5bb4f] hover:bg-[#e9cc98] text-xl font-bold text-black flex flex-row justify-center items-center`}
      >
        {icon}
        {text_button}
      </button>
    </div>
  );
};

export default CommonButton;

import { CommonLinkProps } from "@/interface/Common/CommonInterface";
import Link from "next/link";
import React, { FC } from "react";

const CommonLink: FC<CommonLinkProps> = ({
  class_name,
  href,
  text_link,
  icon,
}) => {
  return (
    <div>
      <Link
        target="_blank"
        href={href}
        className={`${class_name} gap-1 rounded-lg bg-[#f5bb4f] hover:bg-[#e9cc98] text-xl font-bold text-black flex flex-row justify-center items-center`}
      >
        {icon}

        {text_link}
      </Link>
    </div>
  );
};

export default CommonLink;

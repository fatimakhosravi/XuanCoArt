import { CommonLinkProps } from "@/interface/Common/CommonInterface";
import Link from "next/link";
import React, { FC } from "react";

const CommonLink: FC<CommonLinkProps> = ({ class_name, href, text_link }) => {
  return (
    <div>
      <Link
        target="_blank"
        href={href}
        className={`${class_name} bg-[#f1c87a] hover:bg-[#eee2ba] font-bold text-black flex justify-center items-center`}
      >
        {text_link}
      </Link>
    </div>
  );
};

export default CommonLink;

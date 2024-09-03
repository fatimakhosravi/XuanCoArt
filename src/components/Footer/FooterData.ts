import LinkedIn from "@/../public/svg/footer/linkedin.svg";
import Email from "@/../public/svg/footer/email.svg";
import Telegram from "@/../public/svg/footer/telegram.svg";
import Phone from "@/../public/svg/footer/phone.svg";

interface FooterDataType {
  link_name: string;
  href: string;
  src?:  string;
}

export const SiteMapFooterData: FooterDataType[] = [
  {
    link_name: "Recent Post",
    href: "/recent-",
  },
  {
    link_name: "All Breads",
    href: "/",
  },
  {
    link_name: "All Recipes",
    href: "/",
  },

  {
    link_name: "Blog",
    href: "/",
  },
];

export const ContactFooterData: FooterDataType[] = [
  {
    link_name: "Recent Post",
    href: "/",
    src: Phone,
  },
  {
    link_name: "All Breads",
    href: "/",
    src: LinkedIn,
  },
  {
    link_name: "All Recipes",
    href: "/",
    src: Email,
  },

  {
    link_name: "Blog",
    href: "/",
    src:Telegram
  },
];

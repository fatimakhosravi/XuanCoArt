import LinkedIn from "@/../public/svg/footer/linkedin.svg";
import Email from "@/../public/svg/footer/email.svg";
import Telegram from "@/../public/svg/footer/telegram.svg";
import Phone from "@/../public/svg/footer/phone.svg";
import GitHub from "@/../public/png/footer/github.png";
import Instagram from "@/../public/png/footer/instagram.png";
import WhatsApp from "@/../public/png/footer/whatsapp.png";

interface FooterDataType {
  link_name?: string;
  href: string;
  src?: string;
}

export const SiteMapFooterData: FooterDataType[] = [
  // {
  //   link_name: "Recent Post",
  //   href: "/recent-posts",
  // },
  {
    link_name: "All Products",
    href: "/products",
  },
  {
    link_name: "About",
    href: "/products-recipes",
  },

  {
    link_name: "Blog",
    href: "/blog",
  },
];

export const ContactFooterData: FooterDataType[] = [
  {
    href: "tel:+989371733307",
    src: Phone,
  },
  {
    href: "https://wa.me/+989371733307",
    src: WhatsApp,
  },
  {
    href: "https://web.telegram.org/k/#@FatimaKh0sravi",
    src: Telegram,
  },
  {
    href: "https://www.linkedin.com/in/fatimakhosravi/",
    src: LinkedIn,
  },
  {
    href: "mailto:fatimakhosravi.tech@gmail.com",
    src: Email,
  },
  {
    href: "https://github.com/fatimakhosravi",
    src: GitHub,
  },
];

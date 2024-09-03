// SwiperData Sec
import FirstImg from "@/../public/jpg/fist-img.jpg";
import SecondImg from "@/../public/jpg/second-img.jpg";
import ThirdImg from "@/../public/jpg/third-img.jpg";
import FourthImg from "@/../public/jpg/fourth-img.jpg";
import FifthImg from "@/../public/jpg/fifth-img.jpg";
import { StaticImageData } from "next/image";

// BlogSectionData Sec
import FirstBlog from "@/../public/jpg/blog/blog-first.jpg"
import SecondBlog from "@/../public/jpg/blog/blog-second.jpg";
import ThirdBlog from "@/../public/jpg/blog/blog-third.jpg";

export interface SwiperType{
  title: string;
  subtitle: string;
  link: {
    text: string;
    href: string;
  };
  src: StaticImageData;
}
export const SwiperData: SwiperType[] = [
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: FirstImg,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: SecondImg,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: ThirdImg,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: FourthImg,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: FifthImg,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: FifthImg,
  },
];

export const BlogSectionData: SwiperType[] = [
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: FirstBlog,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: SecondBlog,
  },
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Read More",
      href: "",
    },
    src: ThirdBlog,
  },

];

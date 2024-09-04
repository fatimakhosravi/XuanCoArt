// SwiperData import Sec
import FirstImg from "@/../public/jpg/hero-sec/fist-img.jpg";
import SecondImg from "@/../public/jpg/hero-sec/second-img.jpg";
import ThirdImg from "@/../public/jpg/hero-sec/third-img.jpg";
import FourthImg from "@/../public/jpg/hero-sec/fourth-img.jpg";
import FifthImg from "@/../public/jpg/hero-sec/fifth-img.jpg";
import { StaticImageData } from "next/image";

// BlogSectionData import Sec
import FirstBlog from "@/../public/jpg/blog/blog-first.jpg";
import SecondBlog from "@/../public/jpg/blog/blog-second.jpg";
import ThirdBlog from "@/../public/jpg/blog/blog-third.jpg";

// SwiperData Sec
export interface SwiperType {
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
      href: "/recent-posts",
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
      href: "/recent-posts",
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
      href: "/recent-posts",
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
      href: "/recent-posts",
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
      href: "/recent-posts",
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
      href: "/recent-posts",
    },
    src: FifthImg,
  },
];

//BlogSectionData sec
export interface BlogSectionDataType {
  title: string;
  subtitle: string;
  link: {
    text: string;
    href: string;
  };
  src: StaticImageData;
}
export const BlogSectionData: BlogSectionDataType[] = [
  {
    title: "Baked fresh, loved by all.",
    subtitle: ` Let’s make the easiest coffee ice cream! It’s creamy and scoopable,
            made with roasty-toasy coffee and a mega amount of crumbled
            chocolate cookies. This is the dessert of summer that also sometimes
            doubles as dinner. Just here to introduce you to your newest kitchen
            superpower: ice cream without an ice cream maker. Really, this
            should…`,
    link: {
      text: "Learn More",
      href: "/blog",
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
      text: "Learn More",
      href: "/blog",
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
      text: "Learn More",
      href: "/blog",
    },
    src: ThirdBlog,
  },
];

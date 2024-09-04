// SwiperData import Sec
import FirstImg from "@/../public/jpg/hero-sec/baguettes.jpg";
import SecondImg from "@/../public/jpg/hero-sec/pain-complet-maison.jpg";
import ThirdImg from "@/../public/jpg/hero-sec/pain-de-campagne.jpg";
import FourthImg from "@/../public/jpg/hero-sec/pain-de-mie.jpg";
import FifthImg from "@/../public/jpg/hero-sec/pain-poilâne.jpg";
import { StaticImageData } from "next/image";

// BlogSectionData import Sec
import FirstBlog from "@/../public/jpg/blog/blog-first.jpg";
import SecondBlog from "@/../public/jpg/blog/blog-second.jpg";
import ThirdBlog from "@/../public/jpg/blog/blog-third.jpg";

// SwiperData Sec
export interface SwiperType {
  slogan:string;
  title: string;
  subtitle: string;
  src: StaticImageData;
}

export const SwiperData: SwiperType[] = [
  {
    slogan:"Baked fresh, loved by all",
    title: "Baguette Bread",
    subtitle: `The baguette is perhaps the most iconic of French breads, instantly recognizable by its long, slender shape and crispy crust. Originating in France, this bread is a staple of French culture and cuisine. Its name, which means "wand" or "stick" in French, perfectly captures its characteristic form. The baguette’s crust is golden-brown and crackly, giving way to a soft, airy interior with a delicate crumb. It is traditionally made from just four ingredients: flour…`,
    src: FirstImg,
  },
  {
    slogan:"Perfect for Every Meal",
    title: "Pain Complet Bread",
    subtitle: `Pain de Campagne, or "country bread," is a rustic and hearty bread that reflects its origins from French rural bakeries. This bread is often round or oval, with a thick, chewy crust and a dense, flavorful crumb. Its flavor is slightly tangy due to a sourdough starter or a pre-ferment like levain, which also contributes to its complex, robust taste…`,
    src: SecondImg,
  },
  {
    slogan:"Freshness in Every Slice",
    title: "Pain de Campagne Bread",
    subtitle: `Pain Complet, or whole wheat bread, is made from whole grain flour, which includes the bran, germ, and endosperm of the wheat. This results in a denser, more textured bread with a rich, nutty flavor. The crust is typically thicker and more robust compared to white bread, and the interior is a deep, golden-brown color…`,
    src: ThirdImg,
  },
  {
    slogan:"Bringing Families Together, One Slice at a Time",
    title: "Pain de Mie",
    subtitle: `Pain de Mie is a square-shaped bread with a soft, tender crumb and a fine, even texture. This bread is known for its soft crust, which is often trimmed away to reveal a uniformly moist and fluffy interior. Pain de Mie is typically baked in a special lidded pan, which helps it maintain its shape and ensures an even bake…`,
    src: FourthImg,
  },
  {
    slogan:"A Little Slice of Heaven",
    title: "Pain Poilâne Bread",
    subtitle: `Named after the famous Poilâne bakery in Paris, Pain Poilâne is a type of sourdough bread that has achieved international acclaim for its rich flavor and artisanal quality. This bread is made from a mix of whole wheat and white flours, giving it a dense, chewy texture and a mildly sour taste due to the natural fermentation process…`,
    src: FifthImg,
  },
];

//BlogSectionData sec
export interface BlogSectionDataType {
  title: string;
  subtitle: string;
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

    src: ThirdBlog,
  },
];

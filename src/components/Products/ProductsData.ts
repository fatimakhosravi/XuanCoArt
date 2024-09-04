import FirstImg from "@/../public/jpg/hero-sec/baguettes.jpg";
import SecondImg from "@/../public/jpg/hero-sec/pain-complet-maison.jpg";
import ThirdImg from "@/../public/jpg/hero-sec/pain-de-campagne.jpg";
import FourthImg from "@/../public/jpg/hero-sec/pain-de-mie.jpg";
import FifthImg from "@/../public/jpg/hero-sec/pain-poilâne.jpg";
interface MainProductsData {
  name: string;
  cost: string;
  description: string;
  src: string;
}

export const MainProductsData = [
  {
    name: "Baguette",
    src: FirstImg,
    cost: "$2",
    description: `Description: The baguette is perhaps the most iconic of French breads, instantly recognizable by its long, slender shape and crispy crust. Originating in France, this bread is a staple of French culture and cuisine. Its name, which means "wand" or "stick" in French, perfectly captures its characteristic form. The baguette’s crust is golden-brown and crackly, giving way to a soft, airy interior with a delicate crumb. It is traditionally made from just four ingredients: flour, water, yeast, and salt. The dough is allowed to rise and then is shaped into its distinctive long form before being baked in a very hot oven, which creates the baguette's signature crispy exterior and light, chewy inside. Often enjoyed fresh out of the oven, it pairs beautifully with cheeses, pâtés, or simply with a pat of butter.`,
  },
  {
    name: "Pain Complet",
    src: SecondImg,
    cost: "$6",
    description: `Description: Pain Complet, or whole wheat bread, is made from whole grain flour, which includes the bran, germ, and endosperm of the wheat. This results in a denser, more textured bread with a rich, nutty flavor. The crust is typically thicker and more robust compared to white bread, and the interior is a deep, golden-brown color. The flavor of Pain Complet is more complex and earthy, reflecting the use of whole wheat flour. It is a popular choice for those who prefer a heartier, more nutritious bread, and it pairs wonderfully with hearty toppings like cheeses, smoked meats, or robust spreads. Pain Complet also provides a satisfying chewiness and a longer-lasting freshness compared to lighter breads.`,
  },
  {
    name: "Pain de Campagne",
    src: ThirdImg,
    cost: "$2.50",
    description: `Description: Pain de Campagne, or "country bread," is a rustic and hearty bread that reflects its origins from French rural bakeries. This bread is often round or oval, with a thick, chewy crust and a dense, flavorful crumb. Its flavor is slightly tangy due to a sourdough starter or a pre-ferment like levain, which also contributes to its complex, robust taste. The dough for Pain de Campagne typically includes a mix of white and whole wheat flours, giving it a fuller flavor and more texture compared to more refined breads. It is often enjoyed with soups, stews, or as a base for sandwiches. The crust is deeply caramelized, with an earthy aroma that hints at its traditional baking methods.`,
  },
  {
    name: "Pain de Mie",
    src: FourthImg,
    cost: "$2.30",
    description: `Description: Pain de Mie is a square-shaped bread with a soft, tender crumb and a fine, even texture. This bread is known for its soft crust, which is often trimmed away to reveal a uniformly moist and fluffy interior. Pain de Mie is typically baked in a special lidded pan, which helps it maintain its shape and ensures an even bake. The flavor is subtly sweet and buttery, making it an excellent choice for sandwiches or toast. Its soft texture and mild flavor make it particularly popular with children and those who prefer a less crusty bread. Often enjoyed with jam or used for making elegant sandwiches, Pain de Mie is a versatile and beloved addition to any bread basket.`,
  },
  {
    name: " Pain Poilâne",
    src: FifthImg,
    cost: "$4",
    description: `Description: Named after the famous Poilâne bakery in Paris, Pain Poilâne is a type of sourdough bread that has achieved international acclaim for its rich flavor and artisanal quality. This bread is made from a mix of whole wheat and white flours, giving it a dense, chewy texture and a mildly sour taste due to the natural fermentation process. The loaf is typically round and weighs around 1.5 kilograms, and its crust is dark and crisp. The interior is moist and tender, with a slightly tangy flavor that pairs well with a variety of toppings, from cheese and charcuterie to simple butter. Pain Poilâne is renowned for its deep, nutty flavor, a testament to the quality of ingredients and the traditional baking methods used.`,
  },
];

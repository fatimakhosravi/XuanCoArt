interface NavbarDataType {
  link_name: string;
  href: string;
}

export const NavbarData: NavbarDataType[] = [
  {
    link_name: "Recent Post",
    href: "/recent-posts",
  },
  {
    link_name: "All Breads",
    href: "/products",
  },
  {
    link_name: "All Recipes",
    href: "/products-recipes",
  },
  {
    link_name: "Contact Us",
    href: "/contact-us",
  },
  {
    link_name: "Blog",
    href: "/blog",
  },
];

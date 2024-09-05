import Image from "next/image";
import React from "react";
import BackgroundImgProduc from "@/../public/jpg/products/background.jpg";
import Link from "next/link";
import { Messages2, ShoppingCart } from "iconsax-react";
import { MainProductsData } from "./ProductsData";

const MainProducts = () => {
  return (
    <div className="flex flex-col gap-24">

      {/* secound sec  */}
      <div className="grid grid-cols-3 justify-center gap-4">
        {MainProductsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 bg-[#16295e] rounded-xl p-4"
          >
            <Image
              className="w-[50%] rounded-xl"
              alt="bread-img"
              src={item.src}
            />
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  target="_blank"
                  className="h-15 text-sm bg-[#f5bb4f] p-2 rounded-lg font-bold text-[#16295e] flex flex-row gap-1 items-center justify-center"
                  href="/shop-basket"
                >
                  Shopping Basket
                  <ShoppingCart variant="Bold" size="18" color="#16295e" />
                </Link>
                <Link
                  target="_blank"
                  className="h-15 text-sm bg-[#f5bb4f] p-2 rounded-lg font-bold text-[#16295e] flex flex-row gap-1 items-center justify-center"
                  href="/products/comments"
                >
                  User Comments
                  <Messages2 variant="Bold" size="18" color="#16295e" />
                </Link>
              </div>
              <div className="flex flex-col  gap-2">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1 className="text-3xl font-bold">{item.cost}</h1>
                </div>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducts;

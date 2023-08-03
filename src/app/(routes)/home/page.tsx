import { Headline } from "@/components";
import { ProductType } from "@/types";
import { allProducts } from "@/utils/products";
import Image from "next/image";
import React from "react";
import { MdOutlineStarRate } from "react-icons/md";

async function HomePage() {
  const products = await allProducts();

  return (
    <>
      {/* Product Section */}
      <section className="container mx-auto my-4 flex flex-col items-start justify-between bg-slate-200 p-4 rounded-md">
        <div className="flex w-full justify-between items-center">
          <Headline text={"Products"} />
          <span className="px-4 py-2 bg-white shadow rounded-xl hover:shadow-2xl hover:cursor-pointer">
            Filter
          </span>
        </div>

        <div className="w-ful grid grid-cols-5 gap-4">
          {products.map((item: ProductType) => {
            const splitPrice = item.price.toString().split(".");

            const decimalPrice =
              splitPrice[1] == null || 0 || undefined ? "00" : splitPrice[1];
            const updatedDecimalPrice =
              decimalPrice.length == 1 ? "00" : decimalPrice;

            return (
              <div className="h-80 p-2 bg-white rounded-lg flex flex-col justify-between hover:shadow-2xl hover:cursor-pointer">
                <div>
                  <div className="flex h-44 w-auto overflow-hidden items-center justify-center mx-auto rounded-lg">
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={500}
                      height={500}
                      className="bg-contain"
                    />
                  </div>

                  <p className="pt-2 text-lg font-medium">
                    {item.title.length > 25
                      ? item.title.slice(0, 25) + "..."
                      : item.title}
                  </p>

                  <p className="text-sm text-gray-700">
                    {item.description.length > 60
                      ? item.description.slice(0, 60) + "..."
                      : item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-1">
                    <MdOutlineStarRate size={20} color={"#d8db2e"} />
                    <p>{item.rating.rate}</p>
                    <p className="text-gray-600 text-sm">
                      - ({item.rating.count})
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex justify-center text-gray-900">
                      <span className="flex justify-center items-start align-text-top text-sm">
                        $
                      </span>
                      <span className="flex justify-center items-center align-top text-xl font-semibold">
                        {item.price.toFixed(0)}
                      </span>
                      <span className="text-sm flex justify-center items-end text-gray-700 align-text-bottom">
                        {updatedDecimalPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HomePage;

// ! not working

// import Carousal from "./Carousal";

// const images: string[] = [
//   "/carousal (5).jpg",
//   "/carousal (4).jpg",
//   "/carousal (2).jpg",
//   "/carousal (1).jpg",
//   "/carousal (3).jpg",
// ];

/* <Carousal images={images} /> */

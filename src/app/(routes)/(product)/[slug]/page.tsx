import { Headline, AddToCart, AddToFavorite } from "@/components";
import { SearchParams } from "@/types";
import { fetchOneProduct } from "@/utils/products";
import Image from "next/image";
import React from "react";
import { MdOutlineStarRate } from "react-icons/md";

async function page({ searchParams }: { searchParams: SearchParams }) {
  const { id } = searchParams;

  const product = await fetchOneProduct(Number(id));
  const { title, description, category, image, price, rating } = product;

  return (
    <div className="container mx-auto bg-slate-200 rounded-md my-4 px-2 py-2">
      <Headline className={"capitalize"} text={`${category}`} />
      <div className="flex items-start gap-2">
        <div className="flex-1 bg-white rounded-xl">
          <div className="flex h-full w-full overflow-hidden items-center justify-center">
            <Image
              alt={title}
              src={image}
              width={500}
              height={500}
              className="bg-contain"
            />
          </div>
        </div>
        <div className="flex-1 h-[35rem] flex items-start justify-between flex-col bg-white rounded-xl p-4">
          {/* details */}
          <div className="flex-1 flex justify-between items-start flex-col gap-1">
            <p className="pt-2 mb-4 text-lg font-medium">{title}</p>

            {/* description container */}
            <div className="flex-1 bg-slate-200 w-full p-2 rounded-md overflow-y-scroll">
              <p className="text-sm text-gray-700">{description}</p>
            </div>

            {/* price and rating container */}
            <div className="flex w-full justify-between items-center gap-2 py-4">
              {/* price */}
              <p className="flex justify-center items-end gap-2 text-gray-700">
                <span className="font-medium">Price:</span>
                <span className="text-2xl font-bold text-orange-500">
                  ${price}
                </span>
              </p>

              {/* rating */}
              <p className="flex justify-center items-center gap-1 text-gray-700">
                <span className="font-medium">Rating: </span>
                <MdOutlineStarRate
                  size={25}
                  color={"#dba51d"}
                  className="mb-0.5"
                />
                <span className="text-xl font-semibold">{rating.rate}</span>
                <span className="font-medium text-sm">({rating.count})</span>
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center justify-center flex-1">
              <AddToFavorite
                product={product}
                text={"Add To Favorites"}
                textIfAdded={"Remove From Favorites"}
                className={"bg-slate-400 rounded-xl h-20 w-full"}
              />
            </div>
            <div className="flex items-center justify-center flex-1 bg-slate-400 rounded-xl">
              <AddToCart
                product={product}
                text={"Add To Cart"}
                textIfAdded={"Remove From Cart"}
                className={"bg-slate-400 rounded-xl h-20 w-full"}
              />
            </div>
            <div className="flex items-center justify-center flex-1 h-20 bg-slate-400 rounded-xl w-full">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

import { Headline } from "@/components";
import { SearchParams } from "@/types";
import { fetchOneProduct } from "@/utils/products";
import Image from "next/image";
import React from "react";
import { MdOutlineStarRate } from "react-icons/md";

async function page({ searchParams }: { searchParams: SearchParams }) {
  const { id } = searchParams;

  const product = await fetchOneProduct(Number(id));

  return (
    <div className="container mx-auto bg-slate-200 rounded-md my-4 px-2 py-2">
      <Headline className={"capitalize"} text={product.category} />
      <div className="flex items-start gap-2">
        <div className="flex-1 bg-white rounded-xl">
          <div className="flex h-full w-full overflow-hidden items-center justify-center">
            <Image
              alt={product.title}
              src={product.image}
              width={500}
              height={500}
              className="bg-contain"
            />
          </div>
        </div>
        <div className="flex-1 h-[35rem] flex items-start justify-between flex-col bg-white rounded-xl p-4">
          {/* details */}
          <div className="flex-1 flex justify-between items-start flex-col gap-1">
            <p className="pt-2 mb-4 text-lg font-medium">{product.title}</p>

            {/* description container */}
            <div className="flex-1 bg-slate-200 w-full p-2 rounded-md overflow-y-scroll">
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>

            {/* price and rating container */}
            <div className="flex w-full justify-between items-center gap-2 py-4">
              {/* price */}
              <p className="flex justify-center items-end gap-2 text-gray-700">
                <span className="font-medium">Price:</span>
                <span className="text-2xl font-bold ">${product.price}</span>
              </p>

              {/* rating */}
              <p className="flex justify-center items-center gap-1 text-gray-700">
                <span className="font-medium">Rating: </span>
                <MdOutlineStarRate
                  size={25}
                  color={"#dba51d"}
                  className="mb-0.5"
                />
                <span className="text-xl font-semibold">
                  {product.rating.rate}
                </span>
                <span className="font-medium text-sm">
                  ({product.rating.count})
                </span>
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex w-full items-center justify-between gap-4">
            <button className="flex items-center justify-center h-20 flex-1 bg-slate-400 rounded-xl">
              Add To Favorite
            </button>
            <button className="flex items-center justify-center h-20 flex-1 bg-slate-400 rounded-xl">
              Add To Cart
            </button>
            <button className="flex items-center justify-center h-20 flex-1 bg-slate-400 rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

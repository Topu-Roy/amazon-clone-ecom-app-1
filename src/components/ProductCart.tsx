import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStarRate } from "react-icons/md";

function ProductCart({ product, shorten }: ProductCardProps) {
  const { title, description, image, id, price, rating } = product;

  const splitPrice = price.toString().split(".");

  const decimalPrice =
    splitPrice[1] == null || 0 || undefined ? "00" : splitPrice[1];
  const updatedDecimalPrice = decimalPrice.length == 1 ? "00" : decimalPrice;

  return (
    <Link
      href={{
        pathname: `/${id}`,
        query: { slug: title, id: id },
      }}
      className="h-[25rem] p-2 bg-white rounded-lg flex flex-col justify-between hover:shadow-2xl hover:cursor-pointer"
    >
      <div>
        <div className="flex h-44 overflow-hidden items-start justify-center mx-auto rounded-lg">
          <Image
            alt={title}
            src={image}
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>

        <p className="pt-2 text-lg font-medium">
          {shorten
            ? title.length > 25
              ? title.slice(0, 25) + "..."
              : title
            : title}
        </p>

        <p className="text-sm text-gray-700">
          {shorten
            ? description.length > 25
              ? description.slice(0, 25) + "..."
              : description
            : description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-1">
          <MdOutlineStarRate size={20} color={"#d8db2e"} />
          <p>{rating.rate}</p>
          <p className="text-gray-600 text-sm">- ({rating.count})</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex justify-center text-gray-900">
            <span className="flex justify-center items-start align-text-top text-sm">
              $
            </span>
            <span className="flex justify-center items-center align-top text-xl font-semibold">
              {price.toFixed(0)}
            </span>
            <span className="text-sm flex justify-center items-end text-gray-700 align-text-bottom">
              {updatedDecimalPrice}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;

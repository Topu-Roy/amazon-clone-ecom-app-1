"use client";
import { SingleProductType } from "@/types";
import { useCartStore } from "@/zustand/cart";
import { useRouter } from "next/navigation";
import React from "react";

function AddToCart(product: SingleProductType) {
  const router = useRouter();
  const { addToCart } = useCartStore();

  const handelClick = () => {
    addToCart(product);
    router.push("/cart");
  };

  return <button onClick={handelClick}>Add To Cart</button>;
}

export default AddToCart;

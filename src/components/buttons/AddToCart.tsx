"use client";
import { addToButtonType } from "@/types";
import { useCartStore } from "@/zustand/cart";
import { useRouter } from "next/navigation";
import React from "react";

function AddToCart({ product, className }: addToButtonType) {
  const router = useRouter();
  const { addToCart } = useCartStore();

  const handelClick = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <button className={`${className}`} onClick={handelClick}>
      Add To Cart
    </button>
  );
}

export default AddToCart;

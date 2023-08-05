"use client";
import { addToButtonType } from "@/types";
import { useCartStore } from "@/zustand/cart";
import { useRouter } from "next/navigation";
import React from "react";

function AddToCart({ product, className }: addToButtonType) {
  const router = useRouter();
  const { addToCart, products } = useCartStore();

  const handelClick = () => {
    const isExist = products.includes(product);

    if (!isExist) {
      addToCart(product);
      router.push("/cart");
    } else {
      alert("Cart already exists");
    }
  };

  return (
    <button className={`${className}`} onClick={handelClick}>
      Add To Cart
    </button>
  );
}

export default AddToCart;

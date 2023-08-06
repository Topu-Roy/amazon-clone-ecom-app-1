"use client";

import { addToButtonType } from "@/types";
import { useCartStore } from "@/zustand/cart";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddToCart({ product, className, text, textIfAdded }: addToButtonType) {
  const router = useRouter();
  const { addToCart, removeFromCart, products } = useCartStore();
  const [isAddedToCart, setIsAddedToCart] = useState(() =>
    products.includes(product)
  );

  const handelClick = () => {
    if (isAddedToCart) {
      removeFromCart(product.id);
      setIsAddedToCart((prev) => !prev);
      alert("Removed product from cart");
    } else {
      addToCart(product);
      setIsAddedToCart((prev) => !prev);
      router.push("/cart");
      alert("Added to cart");
    }
  };

  return (
    <button className={`${className}`} onClick={handelClick}>
      {isAddedToCart ? textIfAdded : text}
    </button>
  );
}

export default AddToCart;

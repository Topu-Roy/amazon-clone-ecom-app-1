"use client";

import { addToButtonType } from "@/types";
import { useCartStore } from "@/zustand/cart";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddToCart({ product, className, text, textIfAdded }: addToButtonType) {
  const router = useRouter();
  const { addToCart, removeFromCart, products } = useCartStore();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handelClick = () => {
    if (isAddedToCart) {
      removeFromCart(product.id);
      setIsAddedToCart(false);
      alert("Removed product from cart");
    } else {
      addToCart(product);
      setIsAddedToCart(true);
      router.push("/cart");
      alert("Added to cart");
    }
  };

  React.useEffect(() => {
    setIsAddedToCart(products.includes(product));
  }, []);

  return (
    <button className={`${className}`} onClick={handelClick}>
      {isAddedToCart ? textIfAdded : text}
    </button>
  );
}

export default AddToCart;

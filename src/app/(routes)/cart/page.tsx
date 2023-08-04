"use client";
import { useCartStore } from "@/zustand/cart";
import React from "react";

function CartPage() {
  const { products, addToCart } = useCartStore();

  React.useEffect(() => {
    console.log(products);
  }, [products]);

  return <div>CartPage</div>;
}

export default CartPage;

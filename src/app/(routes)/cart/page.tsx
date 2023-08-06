"use client";
import { Headline, ProductCart } from "@/components";
import { useCartStore } from "@/zustand/cart";
import React from "react";

function CartPage() {
  const { products } = useCartStore();
  return (
    <>
      <div className="container mx-auto bg-slate-200 rounded-md my-4 px-2 py-2">
        <Headline text="Cart" />

        <div className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <ProductCart product={product} shorten={false} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CartPage;

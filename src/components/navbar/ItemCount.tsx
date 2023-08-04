"use client";

import { useFavoritesStore } from "@/zustand/Favorites";
import { useCartStore } from "@/zustand/cart";
import React from "react";

export function FavoritesCount() {
  const { products } = useFavoritesStore();
  return <span>{products.length > 99 ? "99+" : products.length}</span>;
}

export function CartCount() {
  const { products } = useCartStore();
  return <span>{products.length > 99 ? "99+" : products.length}</span>;
}

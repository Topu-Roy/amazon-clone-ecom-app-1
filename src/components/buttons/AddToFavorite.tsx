"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/zustand/Favorites";
import { addToButtonType } from "@/types";

function AddToFavorite({ product, className }: addToButtonType) {
  const router = useRouter();
  const { addToFavorites, products } = useFavoritesStore();

  const handleClick = () => {
    router.push("/favorites");
    products.map((item) => {
      if (item.id === product.id) {
        alert("item already exists");
        return;
      }
      addToFavorites(product);
    });
  };

  return (
    <button className={`${className}`} onClick={handleClick}>
      Add To Favorites
    </button>
  );
}

export default AddToFavorite;

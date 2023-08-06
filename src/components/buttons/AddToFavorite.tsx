"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/zustand/Favorites";
import { addToButtonType } from "@/types";

function AddToFavorite({ product, className, text }: addToButtonType) {
  const router = useRouter();
  const { addToFavorites, products } = useFavoritesStore();

  const handleClick = () => {
    const isExist = products.includes(product);

    if (!isExist) {
      addToFavorites(product);
      router.push("/favorites");
    } else {
      alert("Favorites already exists");
    }
  };

  return (
    <button className={`${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default AddToFavorite;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/zustand/Favorites";
import { addToButtonType } from "@/types";

function AddToFavorite({ product, className }: addToButtonType) {
  const router = useRouter();
  const { addToFavorites } = useFavoritesStore();

  const handleClick = () => {
    addToFavorites(product);
    router.push("/favorites");
  };

  return (
    <button className={`${className}`} onClick={handleClick}>
      Add To Favorites
    </button>
  );
}

export default AddToFavorite;

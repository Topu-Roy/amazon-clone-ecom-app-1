"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/zustand/Favorites";
import { SingleProductType } from "@/types";

function AddToFavorite(product: SingleProductType) {
  const router = useRouter();
  const { addToFavorites } = useFavoritesStore();

  const handleClick = () => {
    addToFavorites(product);
    router.push("/favorites");
  };

  return <button onClick={handleClick}>Add To Favorites</button>;
}

export default AddToFavorite;

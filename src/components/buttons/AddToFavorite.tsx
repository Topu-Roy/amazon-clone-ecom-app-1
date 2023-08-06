"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFavoritesStore } from "@/zustand/Favorites";
import { addToButtonType } from "@/types";

function AddToFavorite({
  product,
  className,
  textIfAdded,
  text,
}: addToButtonType) {
  const router = useRouter();
  const { addToFavorites, removeFromFavorites, products } = useFavoritesStore();
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const handleClick = () => {
    if (isAddedToFavorites) {
      removeFromFavorites(product.id);
      setIsAddedToFavorites(false);
      alert("Remove from favorites");
    } else {
      addToFavorites(product);
      setIsAddedToFavorites(true);
      alert("Added to favorites");
      router.push("/favorites");
    }
  };

  React.useEffect(() => {
    setIsAddedToFavorites(products.includes(product));
  }, []);

  return (
    <button className={`${className}`} onClick={handleClick}>
      {isAddedToFavorites ? textIfAdded : text}
    </button>
  );
}

export default AddToFavorite;

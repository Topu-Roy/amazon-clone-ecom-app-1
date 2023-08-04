import { FavoritesStateTypes, SingleProductType } from "@/types";
import { create } from "zustand";

export const useFavoritesStore = create<FavoritesStateTypes>()((set) => ({
  products: [],
  addToFavorites: (product: SingleProductType) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
}));

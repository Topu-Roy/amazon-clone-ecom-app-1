import { FavoritesStateTypes, SingleProductType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesStateTypes>()(
  persist(
    (set) => ({
      products: [],
      addToFavorites: (product: SingleProductType) => {
        set((state) => ({
          products: [...state.products, product],
        }));
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

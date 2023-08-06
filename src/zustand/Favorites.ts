import { FavoritesStateTypes, ProductType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesStateTypes>()(
  persist(
    (set) => ({
      products: [],
      addToFavorites: (product) => {
        set((state) => {
          // Check for duplicates before adding the product
          if (!state.products.some((item) => item.id === product.id)) {
            return {
              products: [...state.products, product],
            };
          }
          return state; // Product already exists, so return the current state as is
        });
      },
      removeFromFavorites: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

import { CartStateTypes, ProductType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create<CartStateTypes>()(
  persist(
    (set) => ({
      products: [],
      addToCart: (product: ProductType) => {
        set((state) => ({
          products: [...state.products, product],
        }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

import { CartStateTypes } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create<CartStateTypes>()(
  persist(
    (set) => ({
      products: [],
      addToCart: (product) => {
        set((state) => {
          if (!state.products.some((item) => item.id === product.id)) {
            return {
              products: [...state.products, product],
            };
          }
          return state;
        });
      },
      removeFromCart: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

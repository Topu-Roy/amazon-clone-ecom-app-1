import { CartStateTypes, SingleProductType } from "@/types";
import { create } from "zustand";

export const useCartStore = create<CartStateTypes>()((set) => ({
  products: [],
  addToCart: (product: SingleProductType) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
}));

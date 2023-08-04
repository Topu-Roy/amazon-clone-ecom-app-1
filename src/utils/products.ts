// * Fetch All Products from Fake Store API

import { ProductType } from "@/types";

export const allProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

export const fetchOneProduct = async (id: number): Promise<ProductType> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await res.json();
  return products;
};

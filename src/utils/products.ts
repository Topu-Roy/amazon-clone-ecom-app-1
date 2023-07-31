// * Fetch All Products from Fake Store API

export const allProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

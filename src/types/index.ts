export interface ImageType {
  images: string[];
}

export interface SearchParams {
  slug: string;
  id: string;
}

export interface HeadlineProps {
  text: string;
  className?: string;
}
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// * Product Cart Props

export interface ProductCardProps {
  shorten: boolean;
}

export interface SingleProductType {
  product: ProductType;
}

export interface CartStateTypes {
  products: SingleProductType[];
  addToCart: (product: SingleProductType) => void;
}
export interface FavoritesStateTypes {
  products: SingleProductType[];
  addToFavorites: (product: SingleProductType) => void;
}

// * Navigation Bar

export interface ItemCountType {
  type: "Favorites" | "Cart";
}

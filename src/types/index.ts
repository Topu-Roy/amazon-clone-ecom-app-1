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

// * Add To Cart & Add To Favorites Button Component
export interface addToButtonType {
  product: ProductType;
  className?: string;
}

export interface CartStateTypes {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
}
export interface FavoritesStateTypes {
  products: ProductType[];
  addToFavorites: (product: ProductType) => void;
}

// * Navigation Bar

export interface ItemCountType {
  type: "Favorites" | "Cart";
}

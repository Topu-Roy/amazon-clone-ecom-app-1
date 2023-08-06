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

// * Product Cart Props

export interface ProductCardProps {
  product: ProductType;
  shorten: boolean;
}

// * Add To Cart & Add To Favorites Button Component
export interface addToButtonType {
  product: ProductType;
  className?: string;
  text: string;
  textIfAdded: string;
}

export interface CartStateTypes {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
}
export interface FavoritesStateTypes {
  products: ProductType[];
  addToFavorites: (product: ProductType) => void;
}

// * Navigation Bar

export interface ItemCountType {
  type: "Favorites" | "Cart";
}

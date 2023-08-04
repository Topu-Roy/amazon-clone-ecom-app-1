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

import { useData } from './useData';

interface ProductProp {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
}
  
export const useProduct = (selectedCategory: string |null)=>useData<ProductProp>('/products', {params:{category: selectedCategory}}, [selectedCategory]);
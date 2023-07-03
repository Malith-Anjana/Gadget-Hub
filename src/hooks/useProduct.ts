import { ProductQuery } from '../pages/Home';
import { useData } from './useData';

export interface ProductProp {
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
  
export const useProduct = (productQuery?: ProductQuery)=>useData<ProductProp>('/products', {params:productQuery}, [productQuery]);
import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from 'axios';

export interface ProductProp {
  id: number;
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

interface FetchProductsType {
  products: ProductProp[];
  total: number;
  skip: number;
  limit: number;
}
export const useProducts = () => {
  const [products, setproducts] = useState<ProductProp[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchProductsType>("/products?limit=100", {
        signal: controller.signal,
      })
      .then((res) => setproducts(res.data.products))
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log("test");
          return;
        } else {
          console.log('hit', err);
          
          setError(err.message)};
      });

    return () => controller.abort();
  }, []);

  return { products, error };
};

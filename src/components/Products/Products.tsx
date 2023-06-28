import { Grid } from "@mui/material";
import Product from "../Product/Product";
import { useState, useEffect } from "react";


export interface ProductProp {
  id: number
  title: string
  price: number
  discountPercentage:number
  description: string
  category: string
  image: string
  rating: number
  stock:number
  brand:string
  thumbnail:string
  images: string[]
}


const Products = () => {
  const [products, setproducts] = useState<ProductProp[]>([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => {setproducts(json.products);
      ;
      });
  };
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      pt={1}
    >
      {products.map(product =>   <Product product={product} key={product.id}/>)}
    
    </Grid>
  );
};

export default Products;

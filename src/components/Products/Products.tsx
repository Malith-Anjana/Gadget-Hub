import { Grid, Typography } from "@mui/material";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
import apiClient from "../../api-client";
import NoData from "../NoData/NoData";

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

const Products = () => {
  const [products, setproducts] = useState<ProductProp[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await apiClient
      .get<FetchProductsType>("products?limit=100")
      .then((res) => setproducts(res.data.products))
      .catch((err) => setError(err.message));
  };
  return (
    <>
    {error && <Typography fontSize={20} color="error" fontWeight="600" p={2}>{error}!</Typography>}
      { products.length == 0 ? <NoData /> : (products.length > 0 && <Typography fontSize={20} color="text.disabled" fontWeight="600" p={2}>
          Showing {products.length} Products
        </Typography> )
      }
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        pt={1}
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
};

export default Products;

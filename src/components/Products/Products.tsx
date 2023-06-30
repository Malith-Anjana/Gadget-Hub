import { Grid, Typography } from "@mui/material";
import Product from "../Product/Product";
import NoData from "../NoData/NoData";
import { useProducts } from "../../hooks/useProduct";

const Products = () => {
  const { products, error } = useProducts();
  return (
    <>
      {error && (
        <Typography fontSize={20} color="error" fontWeight="600" p={2}>
          {error}!
        </Typography>
      )}
      {products.length == 0 ? (
        <NoData />
      ) : (
        products.length > 0 && (
          <Typography
            fontSize={20}
            color="text.disabled"
            fontWeight="600"
            p={2}
          >
            Showing {products.length} Products
          </Typography>
        )
      )}
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

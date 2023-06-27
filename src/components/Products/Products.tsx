import { Grid } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      pt={1}
    >
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </Grid>
  );
};

export default Products;

import { Grid, Skeleton, Typography } from "@mui/material";
import Product from "../Product/Product";
import NoData from "../NoData/NoData";
import { useProduct } from "../../hooks/useProduct";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
interface Props{
  selectedCategory : string | null
  selectedSort : string | null
}
const Products = ({selectedCategory, selectedSort}: Props) => {
  const { data, error, isLoading , count} = useProduct(selectedCategory, selectedSort);
  
  const skeletons = [1, 2, 3, 4,6,,7,8];
  return (
    <>
      {error && (
        <Typography fontSize={20} color="error" fontWeight="600" p={2}>
          {error}!
        </Typography>
      )}
      {count == 0 ? (
        <NoData/>
      ) : (
        count > 0 && (
          <Typography
            fontSize={20}
            color="text.disabled"
            fontWeight="600"
            p={2}
          >
            Showing {count} Products
          </Typography>
        )
      )}
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        pt={1}
      >
        {isLoading && skeletons.map((skeleton) => <SkeletonCard key={skeleton}/>)}
        {data.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </Grid>
    </>
  );
};

export default Products;

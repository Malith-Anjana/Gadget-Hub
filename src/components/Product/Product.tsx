import { AddShoppingCart, FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  Button,
  Grid,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
  Chip,
  Stack,
  Link,
  Rating,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { ProductProp } from "../Products/Products";

interface Prop{
  product: ProductProp
}

const Product = ({product}: Prop) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  return (
      <Grid item xs={12} md={6} lg={4}>
        <Card
          sx={{
            width: "100%",
            boxShadow: "lg",
            marginTop: "10px",
            borderRadius: { xs: 3, lg: 2 },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="170"
            sx={{objectFit:'contain'}}
            image={product.thumbnail}
          />
          <CardContent>
            <Stack direction="row" p={0} m={0} justifyContent="space-between">
              <Typography
                color="grey"
                sx={{ fontWeight: "400", fontSize: "md" }}
              >
               {product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}
              </Typography>
              <IconButton
                color={isFavourite ? "primary" : "secondary"}
                onClick={() => setIsFavourite((prev) => !prev)}
                aria-label="add an alarm"
              >
                {isFavourite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Stack>
            <Link href="#" underline="always">
              <Typography fontSize="medium" fontWeight="700">
                {product.title.slice(0,20)+ '...'}
              </Typography>
            </Link>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography fontSize="large" fontWeight="800">
                ${product.price}
              </Typography>
              <Chip
                label={product.discountPercentage+ '% off'}
                color="error"
                size="small"
              />
            </Stack>
            <Typography
              color="grey"
              sx={{ fontWeight: "500", fontSize: "small" }}
            >
              (Only <b>{product.stock}</b> left in stock!)
            </Typography>
            <Rating name="read-only" value={product.rating} readOnly />
          </CardContent>
          <CardActions sx={{ padding: 0 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "100%", fontWeight: "600" }}
              endIcon={<AddShoppingCart />}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
  );
};

export default Product;

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

const Products = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
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
            height="160"
            image="https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
          />
          <CardContent>
            <Stack direction="row" p={0} m={0} justifyContent="space-between">
              <Typography
                color="grey"
                sx={{ fontWeight: "400", fontSize: "small" }}
              >
                Bluetooth Headset
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
                Super Fast Drone
              </Typography>
            </Link>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography fontSize="large" fontWeight="800">
                2,900 THB
              </Typography>
              <Chip
                label="Lowest Price"
                color="success"
                size="small"
                variant="outlined"
              />
            </Stack>
            <Typography
              color="grey"
              sx={{ fontWeight: "500", fontSize: "small" }}
            >
              (Only <b>7</b> left in stock!)
            </Typography>
            <Rating name="read-only" value={3} readOnly />
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
    </Grid>
  );
};

export default Products;

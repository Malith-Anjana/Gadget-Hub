import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { theme } from "../../theme/theme";
const Banner = () => {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random !",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];
  return (
    <Carousel sx={{ display: { xs: "none", sm: "block" } }}>
      {items.map((item, i) => (
        <Box key={i}>
          <img
            src={item.img}
            height="300px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div style={{ position: "absolute", top: " 60%", left: "20px" }}>
            <Typography variant="h5" color={theme.palette.primary.light}>
              {item.name}
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.light}>
              {item.description}
            </Typography>

            <Button variant="contained" color="secondary">
              Shop Now
            </Button>
          </div>
        </Box>
      ))}
    </Carousel>
  );
};

export default Banner;

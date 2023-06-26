import { AddCircleOutline, Circle, Favorite, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const CartItem = () => {
  return (
    <Card sx={{borderRadius:'10px'}}>
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={1}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              width: { sm: "100%", md: 180 },
              height: 180,
              objectFit: "cover",
            }}
            image="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80"
          />
        </Box>

        <Box flex={4} p={2}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex"
          justifyContent="center"
          alignItems="center"
          >
            <IconButton color="primary" aria-label="add an alarm">
              <AddCircleOutline fontSize="large" />
            </IconButton>
            <Typography gutterBottom fontSize={20} color='text.secondary' fontWeight='800'>
            2
          </Typography>
            <IconButton color="primary" aria-label="add an alarm">
              <RemoveCircleOutline fontSize="large" />
            </IconButton>
          </Box>
          <Button sx={{marginY:'10px'}} variant="outlined" size="small">
                Remove
              </Button>
          
        </Box>
      </Stack>
    </Card>
  );
};

export default CartItem;

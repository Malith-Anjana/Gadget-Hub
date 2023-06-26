import { Box, Divider, Stack } from "@mui/material";
import Checkout from "../components/Checkout/Checkout";
import CartItems from "../components/CartItems/CartItems";
import Sidebar from "../components/Sidebar/Sidebar";



const Cart = () => {


  return (
    <Box p={0.5} minHeight={"100vh"}>
      <Stack direction={{xs:'column', sm:'row'}} spacing={2} justifyContent={"space-between"}>
        <Box sx={{ display: { xs: "none", md: "flex", minWidth: "180px" } }}>
          <Sidebar />
        </Box>

        
          <CartItems />
      
          <Checkout />
 
      </Stack>
    </Box>
  );
};

export default Cart;

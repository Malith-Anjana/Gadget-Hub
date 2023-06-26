import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";

function App() {

  return (

      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <WishList/>
        {/* <Cart/> */}
        {/* <Home/> */}
      </Box>
  );
}

export default App;

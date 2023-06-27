import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";

function App() {

  return (

      <Box bgcolor={'background.default'}  sx={{height:'100%'}} color={'text.primary'}>
        <Navbar />
        {/* <WishList/> */}
        {/* <Cart/> */}
        <Home/>
        {/* <Profile/> */}
      </Box>
  );
}

export default App;

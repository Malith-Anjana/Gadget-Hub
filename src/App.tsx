import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

function App() {
const [searchs, setSearch] = useState<string>('');
  return (

      <Box bgcolor='background.default' sx={{height:'100%'}} color={'text.primary'}>
        <Navbar onSearch={(search)=> setSearch(search) }/>
        {/* <WishList/> */}
        {/* <Cart/> */}
        <Home search={searchs}/>
        {/* <Profile/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
      </Box>
  );
}

export default App;

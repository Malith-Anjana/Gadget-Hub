import Navbar from "./components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  return (

      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Cart/>
        {/* <Home/> */}
      </Box>
  );
}

export default App;

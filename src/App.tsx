import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Products from './components/Products/Products'
function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Products/>
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

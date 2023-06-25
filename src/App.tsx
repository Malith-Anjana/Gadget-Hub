import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Sorter from "./components/Sorter/Sorter";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Box flex={4} bgcolor={"greenyellow"} pt={1}>
          <Banner/>
          <Sorter/>
          <Products />
        </Box>
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

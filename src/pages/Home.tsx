import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import Sorter from "../components/Sorter/Sorter";
import { Divider } from "@mui/material";
function Home() {
  return (
    <Box p={0.5}>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Box flex={4} bgcolor={"secondary"} pt={1}>
          <Banner />
          <Sorter />
          <Products />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Home;

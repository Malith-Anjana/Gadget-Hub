import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import {useState} from 'react'
import { Divider } from "@mui/material";
function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  return (
    <Box p={0.5}>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar onSelectSort={(sort)=> setSelectedSort(sort)} onSelectCategory={(category)=> setSelectedCategory(category)}/>
        <Divider orientation="vertical" flexItem />
        <Box flex={4} bgcolor={"secondary"} pt={1}>
          <Banner />
          <Products selectedSort={selectedSort} selectedCategory={selectedCategory}/>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Home;

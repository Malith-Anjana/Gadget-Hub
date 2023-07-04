import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import { Divider } from "@mui/material";

export interface ProductQuery {
  category: string | null;
  sort: string | null;
  search: string | null;
}

interface Props {
  search: string
}
function Home({search}: Props) {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  useEffect(() => {
    setProductQuery({ ...productQuery, search });
  }, [search]);

  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar
          onSelectSort={(sort) => setProductQuery({ ...productQuery, sort })}
          onSelectCategory={(category) =>
            setProductQuery({ ...productQuery, category })
          }
        />
        <Divider orientation="vertical" flexItem />
        <Box flex={4} bgcolor={"secondary"} pt={1}>
          <Banner />
          <Products productQuery={productQuery} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Home;

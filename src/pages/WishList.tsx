import { Box, Stack } from "@mui/material"
import CartItems from "../components/CartItems/CartItems"
import Rightbar from "../components/Rightbar/Rightbar"
import NoData from "../components/NoData/NoData"
import {useState} from 'react'

const WishList = () => {
    const [isFav, setisFav] = useState(true)
  return (
    <Box p={0.5} minHeight={"100vh"}>
      <Stack direction={{xs:'column', sm:'row'}} spacing={2} justifyContent={"space-between"}>
        <Box flex={5} justifyContent='center'>
    
        {isFav? <CartItems/>:<NoData/>}

        </Box>

        <Rightbar/>
      
      </Stack>
    </Box>
  )
}

export default WishList
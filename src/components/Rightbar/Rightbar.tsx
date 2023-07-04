import { Favorite, FavoriteBorderOutlined} from "@mui/icons-material";
import {Box,CircularProgress,IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import {useState} from 'react'
import { ScrollableCard } from "./styled.component";
import { useProduct } from "../../hooks/useProduct";
import noImage from '../../assets/images/noImage.jpg'

const Rightbar = () => {
  const [favItems, setFavItems] = useState<number[]>([])
  const {isLoading, data}=useProduct();
  const newestData = data.slice(-20)
  const onClickFav = (index: number) => {
    if(favItems.includes(index)){
      setFavItems(favItems.filter((id)=> id !== index))
    }
    else{
      setFavItems([...favItems, index])
    }
  }

  return (
    <Box
      flex={2}
      pt={1}
      mr={1}
      minWidth={'120px'}
      width='100%'
      sx={{ display: { xs: "none",sm:'flex',md:'flex' } }}
    >
      <ScrollableCard variant="outlined" sx={{flex:1, height:600,overflow:'scroll' }}>
        <ImageList sx={{margin:1}} >
        <ImageListItem key="Subheader" cols={2}>
         <Typography p={1} fontWeight='800' variant='h6'>Newest Arrival</Typography>
        </ImageListItem>
        {!isLoading ? newestData.map((item, index) => (
          <ImageListItem key={index}>
            <img
                src={`${item.thumbnail ? item.thumbnail:noImage}?w=248&fit=crop&auto=format`}
                srcSet={`${item.thumbnail ? item.thumbnail:noImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}

              />
            <ImageListItemBar
              title={item.title}
              subtitle={item.category}
              actionIcon={
                !favItems.includes(index) ? <IconButton
                onClick={()=> onClickFav(index)}
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteBorderOutlined/>
                </IconButton>
                 :<IconButton
                 onClick={()=> onClickFav(index)}
                 color="primary"
                   aria-label={`info about ${item.title}`}
                 >
                   <Favorite/>
                 </IconButton>
        
              }
            />
          </ImageListItem>
        )): <Box display='flex' justifyContent='center' pt={5}>
          <CircularProgress color="inherit" />
        </Box>}
            </ImageList>
        
      </ScrollableCard>
    </Box>
  );
};


export default Rightbar;

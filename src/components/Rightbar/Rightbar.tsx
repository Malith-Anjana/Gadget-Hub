import { Favorite, FavoriteBorderOutlined} from "@mui/icons-material";
import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import {useState} from 'react'


const Rightbar = () => {
  const [favItems, setFavItems] = useState<number[]>([])

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
      mr={2}
      minWidth={'120px'}
      height={700}
      sx={{ display: { xs: "none", md: "block" } ,overflowY: 'scroll' }}
    >
      <ImageList>
      <ImageListItem key="Subheader" cols={2}>
       <Typography ml={1} mb={2} fontWeight='800'>Newest Arrival</Typography>
      </ImageListItem>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
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
      ))}
    </ImageList>
      
    </Box>
  );
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
export default Rightbar;

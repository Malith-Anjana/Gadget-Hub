import { Card, CardProps, styled } from "@mui/material";


export const ScrollableCard= styled(Card)<CardProps>(({theme}) => ({
    
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
     }));
  
  
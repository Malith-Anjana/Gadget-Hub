import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

export const getMode =():string => {
  return  localStorage.getItem('MODE') || 'light';

}

export const theme = createTheme({
  palette: {
    mode:getMode(),
    primary: {
      main: '#fc0362',
      light:'#fff'
    },
    secondary: {
      main: '#000000',
      light:'#696969'
    },
    success:{
        main:'#00e061'
    },
    warning:{
        main:'#f7cf05'
    },
    
  },
  
});

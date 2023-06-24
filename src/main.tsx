import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins"; // Defaults to weight 400 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/800.css"; 
import "@fontsource/poppins/900.css"; 
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme.ts';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)

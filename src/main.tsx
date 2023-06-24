import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins"; // Defaults to weight 400 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

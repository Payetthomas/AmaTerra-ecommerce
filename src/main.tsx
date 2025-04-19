import './style.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root"); 

if(!rootElement) {
  throw new Error("Root is missing")
  
  
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
); 

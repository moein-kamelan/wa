import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

import './styles/globals.css'
import "./styles/fonts.css"
import ReduxProvider from './redux/ReduxProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <ReduxProvider>
    <BrowserRouter>
    <App />

    </BrowserRouter>
    </ReduxProvider>
 
  </StrictMode>,
)

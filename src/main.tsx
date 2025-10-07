import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/globals.css'
import "./styles/fonts.css"
import ReduxProvider from './redux/ReduxProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <ReduxProvider>
    <App />

    </ReduxProvider>
 
  </StrictMode>,
)

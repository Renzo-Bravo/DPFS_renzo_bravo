import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './components/Partials/Header.jsx'
import './components/Partials/Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

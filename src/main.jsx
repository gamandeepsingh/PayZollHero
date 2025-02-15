import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster 
    toastOptions={{
      className: '',
      style: {
        border: '1px solid white',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
      },
      position: 'top-right',
      error: {
        style: {
          backgroundColor: 'rgba(255, 0, 0, 0.6)',
          color: 'white',
        },
      },
    }}
    />
  </StrictMode>,
)

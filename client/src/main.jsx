import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {ServiceContextProvider} from './context/context'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServiceContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ServiceContextProvider>
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './Contextapi/ConApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Contextapi>

        <App />

      </Contextapi>

    </BrowserRouter>

  </React.StrictMode>,
)

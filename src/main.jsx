import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import RoutesApp from './routes'
import GlobalStyle from './style/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesApp></RoutesApp>
  </React.StrictMode>,
)

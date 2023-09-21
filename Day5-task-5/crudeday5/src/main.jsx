import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mytodo from './Mytodo.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Mytodo></Mytodo>
  </React.StrictMode>,
)

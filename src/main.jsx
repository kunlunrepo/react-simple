import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*React.StrictMode开启严格模式*/
  <React.StrictMode>
      <HashRouter>
          <App text={'react'}/>
      </HashRouter>
  </React.StrictMode>,
)

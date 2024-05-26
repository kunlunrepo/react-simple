import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*React.StrictMode开启严格模式*/
  <React.StrictMode>
      <Provider store={store}>
          <App text={'react'}/>
      </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './window/App/Index'
import "./invis.scss"
import { Provider } from 'react-redux'
import store from './data/store'
import { WaterMark } from './WaterMark/WaterMark'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WaterMark/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

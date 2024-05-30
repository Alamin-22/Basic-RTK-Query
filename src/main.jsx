import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './routes/mainLayout/MainLayout.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <MainLayout />

    </Provider>
  </React.StrictMode>,
)

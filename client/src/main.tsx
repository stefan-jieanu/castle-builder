import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// !IMPORTANT 
// removing strinct mode from the whole app and adding it manually
// to elements in app.tsx in order to prevent re-rendering of canvas 
// component. This helps performance and memory usage in development
// irelevant for production.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)

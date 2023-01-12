import React from 'react'
import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import Sketch from './components/Sketch/Sketch'
import './tailwind-dist/index.css'

function App() {
  return (
    <div>
      <React.StrictMode>
        <NavbarComponent />
      </React.StrictMode>

      <Sketch />

      <React.StrictMode>
        {/* Everything else */}
      </React.StrictMode>
    </div>
  )
}

export default App
